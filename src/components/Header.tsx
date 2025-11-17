import { Moon, Sun, Code2 } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

export function Header({ darkMode, setDarkMode, scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Portafolio Personal
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('sobre-mi')}
              className="hover:bg-blue-100 dark:hover:bg-blue-950/50 text-slate-700 dark:text-slate-300"
            >
              Sobre mí
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('habilidades')}
              className="hover:bg-blue-100 dark:hover:bg-blue-950/50 text-slate-700 dark:text-slate-300"
            >
              Habilidades
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('experiencia')}
              className="hover:bg-blue-100 dark:hover:bg-blue-950/50 text-slate-700 dark:text-slate-300"
            >
              Experiencia
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('proyectos')}
              className="hover:bg-blue-100 dark:hover:bg-blue-950/50 text-slate-700 dark:text-slate-300"
            >
              Proyectos
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contacto')}
              className="hover:bg-blue-100 dark:hover:bg-blue-950/50 text-slate-700 dark:text-slate-300"
            >
              Contacto
            </Button>
          </nav>

          {/* Dark Mode Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            )}
            <span className="sr-only">
              {darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}