import type { BlogPost } from "@/lib/blog-data"

interface BlogStructuredDataProps {
  post: BlogPost
}

export default function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://techsolution.id/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: `https://techsolution.id${post.featuredImage}`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://techsolution.id/tentang-kami",
    },
    publisher: {
      "@type": "Organization",
      name: "TechSolution Indonesia",
      logo: {
        "@type": "ImageObject",
        url: "https://techsolution.id/logo.png",
        width: 200,
        height: 60,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://techsolution.id/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(" ").length,
    timeRequired: post.readTime,
    inLanguage: "id-ID",
    isPartOf: {
      "@type": "Blog",
      "@id": "https://techsolution.id/blog",
      name: "Blog TechSolution Indonesia",
    },
    about: {
      "@type": "Thing",
      name: post.category,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
