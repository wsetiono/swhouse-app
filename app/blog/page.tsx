import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getBlogPosts } from "@/lib/blog-data"
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Blog - Tips & Panduan Digital untuk Bisnis Indonesia | TechSolution",
  description:
    "Baca artikel terbaru tentang web development, mobile app, dan transformasi digital untuk bisnis Indonesia. Tips praktis dari ahli teknologi TechSolution.",
  keywords: [
    "blog teknologi indonesia",
    "tips bisnis digital",
    "web development indonesia",
    "mobile app indonesia",
    "transformasi digital umkm",
  ],
  openGraph: {
    title: "Blog TechSolution - Panduan Digital untuk Bisnis Indonesia",
    description: "Tips dan panduan terbaru tentang teknologi digital untuk mengembangkan bisnis di Indonesia.",
    url: "https://techsolution.id/blog",
    siteName: "TechSolution Indonesia",
    images: [
      {
        url: "/blog/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blog TechSolution Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog TechSolution - Panduan Digital untuk Bisnis Indonesia",
    description: "Tips dan panduan terbaru tentang teknologi digital untuk mengembangkan bisnis di Indonesia.",
    images: ["/blog/blog-og-image.jpg"],
  },
  alternates: {
    canonical: "https://techsolution.id/blog",
  },
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Blog TechSolution</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Tips, panduan, dan insight terbaru tentang teknologi digital untuk mengembangkan bisnis Indonesia di era
                digital
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  Web Development
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Mobile App
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Digital Transformation
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  UMKM Indonesia
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:gap-12">
              {posts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-[16/10] md:aspect-square overflow-hidden">
                      <Image
                        src={
                          post.featuredImage ||
                          "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=600&h=400&fit=crop" ||
                          "/placeholder.svg"
                        }
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        itemProp="image"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.publishedAt} itemProp="datePublished">
                              {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </time>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2
                          className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance"
                          itemProp="headline"
                        >
                          <Link href={`/blog/${post.slug}`} className="hover:underline">
                            {post.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        <p className="text-muted-foreground mb-6 text-pretty leading-relaxed" itemProp="description">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 3).map((tag) => (
                            <div key={tag} className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Tag className="w-3 h-3" />
                              <span>#{tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Read More Button */}
                      <div>
                        <Button asChild variant="outline" className="group/btn bg-transparent">
                          <Link href={`/blog/${post.slug}`}>
                            Baca Selengkapnya
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>

                      {/* Hidden Schema.org data */}
                      <div className="hidden">
                        <span itemProp="author" itemScope itemType="https://schema.org/Person">
                          <span itemProp="name">{post.author}</span>
                        </span>
                        <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                          <span itemProp="name">TechSolution Indonesia</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Butuh Solusi Digital untuk Bisnis Anda?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Tim ahli TechSolution siap membantu mewujudkan transformasi digital bisnis Anda. Dari website
                  profesional hingga aplikasi mobile yang powerful.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/kontak">
                    Konsultasi Gratis Sekarang
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
