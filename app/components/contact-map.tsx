export default function ContactMap() {
    return (
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold">Lokasi Kantor Kami</h2>
            <p className="text-muted-foreground">
              Kunjungi kantor kami di Jakarta Selatan untuk meeting dan diskusi langsung
            </p>
          </div>
  
          {/* Map Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">TechSolution Indonesia</div>
                  <div className="text-sm text-muted-foreground">Jl. Sudirman No. 123, Jakarta Selatan 12190</div>
                  <div className="text-sm text-accent">Klik untuk buka di Google Maps</div>
                </div>
              </div>
            </div>
  
            {/* Overlay with office info */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-medium">Akses Transportasi</div>
                  <div className="text-muted-foreground">MRT, TransJakarta, Grab/Gojek</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Parkir</div>
                  <div className="text-muted-foreground">Tersedia parkir mobil & motor</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Fasilitas</div>
                  <div className="text-muted-foreground">Meeting room, WiFi, AC</div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Cara Menuju Kantor</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Dari Bandara Soekarno-Hatta: 45 menit via tol</div>
                <div>• Dari Stasiun Gambir: 20 menit via MRT</div>
                <div>• Dari Terminal Blok M: 15 menit jalan kaki</div>
                <div>• Landmark terdekat: Plaza Senayan, FX Sudirman</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Jadwal Meeting</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Senin - Jumat: 09:00 - 17:00 WIB</div>
                <div>• Sabtu: 09:00 - 14:00 WIB (by appointment)</div>
                <div>• Meeting di luar jam kerja dapat diatur</div>
                <div>• Reservasi meeting: +62 21 1234 5678</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  