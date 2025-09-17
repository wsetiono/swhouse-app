"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardContent className="pt-12 pb-8 space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Pesan Terkirim!</h3>
                <p className="text-muted-foreground">
                  Terima kasih atas kepercayaan Anda. Tim kami akan menghubungi Anda dalam 24 jam.
                </p>
              </div>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Kirim Pesan Lain
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Formulir Konsultasi</CardTitle>
            <p className="text-center text-muted-foreground">
              Ceritakan kebutuhan proyek Anda dan dapatkan konsultasi gratis dari tim ahli kami
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap *</Label>
                  <Input id="name" name="name" required placeholder="Masukkan nama lengkap" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Nama Perusahaan</Label>
                  <Input id="company" name="company" placeholder="Nama perusahaan (opsional)" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="nama@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon *</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+62 812 3456 7890" />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <Label htmlFor="service">Jenis Layanan *</Label>
                <Select name="service" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis layanan yang dibutuhkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                    <SelectItem value="system-enterprise">Sistem Enterprise</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="consultation">Konsultasi IT</SelectItem>
                    <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Estimasi Budget</Label>
                <Select name="budget">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih range budget (opsional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50">Di bawah 50 juta</SelectItem>
                    <SelectItem value="50-100">50 - 100 juta</SelectItem>
                    <SelectItem value="100-250">100 - 250 juta</SelectItem>
                    <SelectItem value="250-500">250 - 500 juta</SelectItem>
                    <SelectItem value="above-500">Di atas 500 juta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline Proyek</Label>
                <Select name="timeline">
                  <SelectTrigger>
                    <SelectValue placeholder="Kapan proyek ingin dimulai?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">Sesegera mungkin</SelectItem>
                    <SelectItem value="1-month">Dalam 1 bulan</SelectItem>
                    <SelectItem value="2-3-months">2-3 bulan ke depan</SelectItem>
                    <SelectItem value="6-months">6 bulan ke depan</SelectItem>
                    <SelectItem value="planning">Masih dalam tahap perencanaan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Deskripsi Proyek *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Ceritakan detail proyek Anda, fitur yang diinginkan, target user, dan informasi lain yang relevan..."
                />
              </div>

              {/* Agreement */}
              <div className="flex items-start space-x-2">
                <Checkbox id="agreement" required />
                <Label htmlFor="agreement" className="text-sm leading-relaxed">
                  Saya setuju dengan{" "}
                  <a href="/privacy-policy" className="text-accent hover:underline">
                    kebijakan privasi
                  </a>{" "}
                  dan memberikan izin untuk dihubungi terkait konsultasi proyek ini.
                </Label>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Mengirim Pesan...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan & Dapatkan Konsultasi Gratis
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
