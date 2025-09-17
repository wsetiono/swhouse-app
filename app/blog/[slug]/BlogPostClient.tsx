"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  readTime: string
}

interface BlogPostClientProps {
  params: any
  relatedPosts: BlogPost[]
}

export default function BlogPostClient({ params, relatedPosts }: BlogPostClientProps) {
  return (
    <>
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Blog
            </Link>
          </Button>
        </div>
      </nav>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Artikel Terkait</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={
                        relatedPost.featuredImage ||
                        "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=600&h=400&fit=crop"
                      }
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">{relatedPost.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={relatedPost.publishedAt}>
                          {new Date(relatedPost.publishedAt).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:underline">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 text-pretty">{relatedPost.excerpt}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Siap Mengembangkan Bisnis Digital Anda?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Konsultasikan kebutuhan website atau aplikasi mobile bisnis Anda dengan tim ahli TechSolution. Gratis dan
              tanpa komitmen.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/kontak">
                Konsultasi Gratis Sekarang
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
