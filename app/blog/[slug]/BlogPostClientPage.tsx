"use client"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getBlogPost, getRelatedPosts } from "@/lib/blog-data"
import { Calendar, Clock, User, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import BlogStructuredData from "@/app/components/blog-structured-data"
import BlogPostClient from "./BlogPostClient"
import { useParams } from "next/navigation"
import Navigation from "@/app/components/navigation"
import Footer from "@/app/components/footer"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostClientPage() {
  const params = useParams()

  const post = getBlogPost(params.slug as string)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug as string)

  return (
    <>
      <BlogStructuredData post={post} />
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav className="bg-muted/30 py-4 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground">{post.title}</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <header className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary text-primary-foreground">{post.category}</Badge>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
                itemProp="headline"
              >
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">{post.excerpt}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span itemProp="author">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt} itemProp="datePublished">
                    {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
              <Image
                src={
                  post.featuredImage ||
                  "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=1200&h=675&fit=crop" ||
                  "/placeholder.svg"
                }
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                itemProp="image"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">Bagikan:</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href,
                      })
                    } else {
                      navigator.clipboard.writeText(window.location.href)
                    }
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article
          className="prose prose-lg max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <div
            className="prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-muted-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            itemProp="articleBody"
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Hidden Schema.org data */}
          <div className="hidden">
            <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">TechSolution Indonesia</span>
              <span itemProp="url">https://techsolution.id</span>
            </span>
            <meta itemProp="dateModified" content={post.publishedAt} />
            <meta itemProp="wordCount" content={post.content.split(" ").length.toString()} />
          </div>
        </article>

        {/* BlogPostClient Component */}
        <BlogPostClient params={params} relatedPosts={relatedPosts} />
      </main>

      <Footer />
    </>
  )
}
