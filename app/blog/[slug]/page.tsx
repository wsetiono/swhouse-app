import type { Metadata } from "next"
import { getBlogPost } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import BlogPostClientPage from "./BlogPostClientPage"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan | TechSolution",
      description: "Artikel yang Anda cari tidak ditemukan.",
    }
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seo.ogTitle,
      description: post.seo.ogDescription,
      url: `https://techsolution.id/blog/${post.slug}`,
      siteName: "TechSolution Indonesia",
      images: [
        {
          url: post.seo.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "id_ID",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.ogTitle,
      description: post.seo.ogDescription,
      images: [post.seo.ogImage],
    },
    alternates: {
      canonical: `https://techsolution.id/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClientPage />
}
