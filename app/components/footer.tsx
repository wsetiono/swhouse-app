import Link from "next/link"
import { Code, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-bold text-xl">TechSolution</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Software house terpercaya di Indonesia yang mengkhususkan diri dalam pembuatan website profesional dan
              aplikasi mobile berkualitas tinggi.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Layanan Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/layanan/web-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/mobile-app"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/web-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  E-Commerce Website
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/web-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Company Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  Jl. Sudirman No. 123
                  <br />
                  Jakarta Pusat, DKI Jakarta 10220
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">info@techsolution.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 TechSolution Indonesia. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
