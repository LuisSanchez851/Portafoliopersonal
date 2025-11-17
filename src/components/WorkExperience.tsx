import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function WorkExperience() {
  const experiences = [
    {
      company: 'Brandstrat BIC S.A.S',
      position: 'Practicante de Ingeniería de Software',
      period: 'Enero 2025 – Junio 2025',
      location: 'Colombia',
      type: 'Práctica Profesional',
      description: 'Empresa líder en estudios de mercado y consultoría estratégica.',
      achievements: [
        'Instalación y configuración completa del software de call center Omnileads desde cero, superando la limitada documentación disponible.',
        'Diseño y desarrollo de herramienta de gestión de bases de datos, incluyendo levantamiento de requerimientos, modelado de BD y diagramas.',
        'Creación de backend y frontend con Node.js con conexión y funcionalidad completa entre ambos entornos.',
        'Apoyo en tareas del área tecnológica: respaldos de información, mantenimiento de equipos y soporte técnico.',
      ],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      company: 'Koyag',
      position: 'Practicante de Ingeniería de Software',
      period: 'Enero 2024 – Junio 2024',
      location: 'Colombia',
      type: 'Práctica Profesional',
      description: 'Startup enfocado en conectar empresarios y fortalecer redes corporativas mediante plataformas digitales y eventos empresariales.',
      achievements: [
        'Levantamiento de requisitos y documentación de procesos para la plataforma principal.',
        'Ejecución de pruebas funcionales garantizando la calidad del software.',
        'Colaboración en la planeación de integraciones futuras con otros sistemas.',
        'Experiencia práctica con herramientas low-code como Bubble.io y Supabase, fortaleciendo conocimientos en desarrollo ágil.',
      ],
      color: 'from-purple-600 to-pink-500',
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-slate-950/50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Mi Trayectoria
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white">
            Experiencia Laboral
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mi experiencia profesional en el desarrollo de soluciones tecnológicas para diferentes empresas y sectores.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                {/* Gradient Header Bar */}
                <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>

                <CardHeader className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} p-2.5 shadow-lg flex items-center justify-center shrink-0`}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-slate-900 dark:text-white mb-1">
                            {exp.company}
                          </CardTitle>
                          <CardDescription className="text-slate-700 dark:text-slate-300">
                            {exp.position}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-600 dark:text-slate-400 italic mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge 
                          variant="secondary"
                          className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                        >
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                        <Badge 
                          variant="secondary"
                          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
                        >
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </Badge>
                        <Badge 
                          className={`bg-gradient-to-r ${exp.color} text-white border-0 shadow-md`}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <h4 className="text-slate-900 dark:text-white">
                      Logros y Responsabilidades:
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 shrink-0`}></div>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline Connector */}
        <div className="flex justify-center mt-12">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg mx-auto">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Más experiencias por venir...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
