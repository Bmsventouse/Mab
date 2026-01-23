import type { ReactNode } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface BlogArticleTemplateProps {
  title: string;
  intro: string;
  publishedAt?: string;
  children: ReactNode;
}

/**
 * Generic layout for a blog article.
 * Ready to be used with a future /blog/[slug] route or a CMS integration.
 */
export function BlogArticleTemplate({
  title,
  intro,
  publishedAt,
  children,
}: BlogArticleTemplateProps) {
  return (
    <article className="section">
      <div className="section-inner max-w-3xl space-y-6">
        <header className="space-y-2">
          <Heading level={1}>{title}</Heading>
          <Text variant="muted">{intro}</Text>
          {publishedAt && (
            <Text variant="caption">Publié le {publishedAt}</Text>
          )}
        </header>
        <div className="prose prose-invert max-w-none">{children}</div>
      </div>
    </article>
  );
}