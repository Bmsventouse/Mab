type RateLimitConfig = {
  windowMs: number;
  max: number;
};

type RateLimitState = {
  count: number;
  timestamp: number;
};

const buckets = new Map<string, RateLimitState>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const ip = forwardedFor.split(',')[0]?.trim();
    if (ip) return ip;
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp;

  const netlifyIp = request.headers.get('x-nf-client-connection-ip');
  if (netlifyIp) return netlifyIp;

  return 'unknown';
}

/**
 * Rate-limit incoming requests on a best-effort basis.
 * Note: this is an in-memory limiter, adapté à un runtime Node unique.
 * En environnement serverless/multi-instance, il agit comme une première barrière
 * mais ne remplace pas un rate limiting centralisé (CDN, WAF, etc.).
 */
export function rateLimitByIp(
  request: Request,
  key: string,
  config: RateLimitConfig,
): { allowed: boolean; remaining: number } {
  const ip = getClientIp(request);
  const bucketKey = `${key}:${ip}`;
  const now = Date.now();

  const existing = buckets.get(bucketKey);

  if (!existing || now - existing.timestamp > config.windowMs) {
    buckets.set(bucketKey, { count: 1, timestamp: now });
    return { allowed: true, remaining: config.max - 1 };
  }

  if (existing.count >= config.max) {
    return { allowed: false, remaining: 0 };
  }

  existing.count += 1;
  return { allowed: true, remaining: config.max - existing.count };
}