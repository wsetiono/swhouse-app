import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Budi Santoso",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Visioner dengan 12+ tahun pengalaman di industri teknologi Indonesia",
      linkedin: "#",
      github: "#",
      email: "budi@techsolution.id",
    },
    {
      name: "Sari Wijaya",
      position: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Expert dalam arsitektur sistem dan cloud computing dengan sertifikasi AWS",
      linkedin: "#",
      github: "#",
      email: "sari@techsolution.id",
    },
    {
      name: "Ahmad Rahman",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer dengan spesialisasi React, Node.js, dan mobile development",
      linkedin: "#",
      github: "#",
      email: "ahmad@techsolution.id",
    },
    {
      name: "Maya Putri",
      position: "UI/UX Design Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Creative designer dengan passion untuk user experience dan design thinking",
      linkedin: "#",
      github: "#",
      email: "maya@techsolution.id",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Tim <span className="text-accent">Profesional</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Berkenalan dengan tim ahli yang berdedikasi untuk menghadirkan solusi teknologi terbaik untuk bisnis Anda.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={
                    member.image ||
                    "/placeholder.svg?height=300&width=300&query=professional indonesian person portrait" ||
                    "/placeholder.svg"
                  }
                  alt={`${member.name} - ${member.position} TechSolution Indonesia`}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={member.linkedin}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </Link>
                  <Link
                    href={member.github}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </Link>
                  <Link
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>

              <CardContent className="pt-6 text-center space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <div className="text-accent font-medium">{member.position}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-background rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-bold">Tim yang Berpengalaman</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Developer & Designer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Tahun Rata-rata Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Sertifikasi Profesional</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Teknologi Dikuasai</div>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tim kami terdiri dari profesional berpengalaman dengan latar belakang pendidikan dan sertifikasi
              internasional. Kami terus mengembangkan skill dan mengikuti perkembangan teknologi terbaru untuk
              memberikan solusi terbaik.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
