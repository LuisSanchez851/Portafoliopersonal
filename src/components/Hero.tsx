import { useState } from 'react';
import { ChevronDown, Sparkles, Brain, Code, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import profileImage from 'figma:asset/bc66737a7637de29c0ef8075644a4f1870b8df10.png';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  const [expanded, setExpanded] = useState(false);

  const skills = [
    { icon: Brain, label: 'Liderazgo', gradient: 'from-purple-500 to-pink-500' },
    { icon: Code, label: 'HTML', gradient: 'from-orange-500 to-red-500' },
    { icon: Code, label: 'CSS', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Code, label: 'JavaScript', gradient: 'from-yellow-500 to-amber-500' },
    { icon: Palette, label: 'Creatividad', gradient: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="sobre-mi" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 dark:from-blue-500/3 dark:to-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Avatar with Gradient Border */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-900 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-slate-900 dark:text-white">
              <span className="block text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-2">Hola, soy</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Luis Alexander Sánchez
              </span>
            </h1>
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Soy estudiante de sexto semestre de Ingeniería de Software en Uniempresarial, con experiencia en el desarrollo de soluciones tecnológicas tanto para empresas grandes como pequeñas. He trabajado con herramientas low-code como WordPress, Bubble, WeWeb, Mendix y Oracle APEX, además de contar con habilidades en desarrollo tradicional utilizando Python, JavaScript y TypeScript con Node.js. Manejo frameworks modernos como Next.js para frontend y backend, aplicando buenas prácticas de arquitectura y trabajo colaborativo. Me caracterizo por mi capacidad para aprender rápidamente, adaptarme a distintos entornos tecnológicos y aportar soluciones innovadoras orientadas a la eficiencia y la calidad del software.
            </p>
            
            {expanded && (
              <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-lg backdrop-blur-sm space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Mi experiencia profesional incluye la implementación de soluciones digitales escalables y mantenibles, siempre priorizando las necesidades del cliente y del usuario final. He participado en proyectos que van desde pequeñas automatizaciones hasta sistemas empresariales completos, donde he podido aplicar tanto herramientas de desarrollo rápido como metodologías de programación más tradicionales.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Mi filosofía de trabajo se basa en la mejora continua y el aprendizaje constante. Disfruto enfrentando desafíos técnicos complejos y encontrando la mejor solución posible, siempre considerando factores como rendimiento, seguridad y experiencia de usuario. Además, valoro enormemente el trabajo en equipo y la comunicación clara, elementos que considero fundamentales para el éxito de cualquier proyecto.
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Comprometido con la excelencia técnica y la innovación continua</span>
                </div>
              </div>
            )}

            <Button
              onClick={() => setExpanded(!expanded)}
              className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 rounded-full px-8"
            >
              {expanded ? 'Leer menos' : 'Leer más sobre mí'}
              <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.gradient} mr-2 group-hover:animate-pulse`}></div>
                  <Icon className="w-3 h-3 mr-1 text-slate-600 dark:text-slate-400" />
                  <span className="text-slate-700 dark:text-slate-300">{skill.label}</span>
                </Badge>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}