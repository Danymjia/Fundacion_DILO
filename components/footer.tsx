import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, CheckCircle2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Desc */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                Fundación DILO
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-primary pl-4">
              Fundación DILO, acompañamiento constante en el desarrollo de niños y adolescentes con un enfoque clínico y humano.
            </p>
            {/* Social Icons */}
            <div className="mt-4">
              <div className="wrapper !h-auto !pt-0 !justify-start !w-auto">
                <a href="#" className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <svg
                    viewBox="0 0 320 512"
                    height="1.2em"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <svg
                    height="1.8em"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="twitter"
                  >
                    <path
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/dilo_fundacion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Servicios</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Estimulación Temprana</Link></li>
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Terapia de Lenguaje</Link></li>
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Psicología Infantil</Link></li>
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Terapia Infantil</Link></li>
            </ul>
          </div>

          {/* Column 3: Contacto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Contacto</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>Fundación DILO</li>
              <li>fundaciondilo@hotmail.com</li>
              <li><Link href="#contacto" className="hover:text-primary transition-colors">Contáctanos</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Ubicación</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#ubicacion" className="hover:text-primary transition-colors">Encuéntranos</Link></li>
              <li><Link href="#nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos de uso</a></li>
            </ul>
          </div>

          {/* Column 5: Badges */}
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>Fundación DILO - Website {new Date().getFullYear()}</p>
          <div className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="h-3 w-3 text-primary mx-1" />
            <span>por Fundación DILO</span>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
