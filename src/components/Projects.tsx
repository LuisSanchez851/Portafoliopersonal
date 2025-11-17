import { useState } from 'react';
import { ExternalLink, Github, ChevronDown, Sparkles, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Portfolio Web V2',
      tag: 'Frontend',
      tagColor: 'from-blue-500 to-cyan-500',
      year: '2024',
      description: 'Prototipo de currículum y página web personal interactiva con diseño moderno y responsivo.',
      image: 'https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcG9ydGZvbGlvJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjMzNTk2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      detailedDescription: 'Proyecto de desarrollo web que funciona como página personal y currículum digital interactivo. Implementado con diseño responsivo y moderno, utilizando las mejores prácticas de desarrollo frontend. El sitio cuenta con secciones para presentación personal, habilidades, proyectos y datos de contacto, todo con un diseño limpio y profesional que facilita la navegación y presenta la información de manera efectiva.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX'],
      github: 'https://github.com/LuisSanchez851/portfoliowebV2',
    },
    {
      title: 'Commerce TechNova',
      tag: 'E-commerce',
      tagColor: 'from-purple-500 to-pink-500',
      year: '2024',
      description: 'Frontend de una plataforma de e-commerce especializada en productos tecnológicos con carrito de compras.',
      image: 'https://images.unsplash.com/photo-1742836531239-1fe146bf7e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHRlY2glMjBlY29tbWVyY2V8ZW58MXx8fHwxNzYzMzU5NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      detailedDescription: 'Aplicación web de comercio electrónico enfocada en la venta de productos tecnológicos. El proyecto incluye catálogo de productos con filtros y búsqueda, carrito de compras funcional, gestión de productos, y una interfaz de usuario intuitiva y atractiva. Implementado con tecnologías modernas de frontend, el proyecto demuestra habilidades en desarrollo de interfaces comerciales, gestión de estado, y creación de experiencias de usuario fluidas y eficientes en plataformas de e-commerce.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'State Management', 'Responsive Design'],
      github: 'https://github.com/LuisSanchez851/commerceTechNova',
    },
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-950/50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Mi Trabajo
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white">
            Proyectos
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Una selección de proyectos académicos y personales que reflejan mi pasión por la tecnología y el desarrollo web.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs text-slate-700 dark:text-slate-300">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge className={`bg-gradient-to-r ${project.tagColor} text-white border-0 shadow-md shrink-0`}>
                    <Tag className="w-3 h-3 mr-1" />
                    {project.tag}
                  </Badge>
                </div>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  {project.description}
                </CardDescription>
              </CardHeader>

              {/* Expanded Content */}
              {expandedProject === index && (
                <CardContent className="pt-0 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Tecnologías
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              )}

              <CardFooter className="mt-auto pt-4">
                <Button
                  variant="ghost"
                  className="w-full hover:bg-blue-100 dark:hover:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                  onClick={() => toggleProject(index)}
                >
                  {expandedProject === index ? 'Ver menos' : 'Ver más detalles'}
                  <ChevronDown
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                      expandedProject === index ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}