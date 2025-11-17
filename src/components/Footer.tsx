import { Heart, Mail, Linkedin, Github, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:ana.rodriguez@correo.com',
      label: 'Email',
      color: 'hover:text-blue-500'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/usuario',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      href: 'https://github.com/usuario',
      label: 'GitHub',
      color: 'hover:text-slate-700 dark:hover:text-white'
    },
  ];

  return (
    <footer className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Ana María Rodríguez
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Estudiante de Inteligencia Artificial y Desarrollo Web, creando soluciones digitales innovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-slate-900 dark:text-white">
              Enlaces Rápidos
            </h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#sobre-mi"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Sobre mí
              </a>
              <a
                href="#habilidades"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#proyectos"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#contacto"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contacto
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-slate-900 dark:text-white">
              Conecta Conmigo
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 ${link.color} border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
              © {currentYear} Ana María Rodríguez García. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span>Página creada con apoyo de herramientas de IA</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
