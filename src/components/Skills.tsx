import { Code, Cpu, MessageSquare, Users, BookOpen, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

export function Skills() {
  const skills = [
    {
      name: 'HTML y CSS',
      level: 'Intermedio',
      percentage: 75,
      icon: Code,
      color: 'from-orange-500 to-red-500',
      description: 'Diseño y estructura web responsiva'
    },
    {
      name: 'JavaScript',
      level: 'Básico',
      percentage: 50,
      icon: Code,
      color: 'from-yellow-500 to-amber-500',
      description: 'Programación interactiva del lado del cliente'
    },
    {
      name: 'Inteligencia Artificial',
      level: 'Intermedio',
      percentage: 70,
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      description: 'Machine learning y aplicaciones IA'
    },
    {
      name: 'Comunicación',
      level: 'Avanzado',
      percentage: 90,
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      description: 'Comunicación efectiva y presentaciones'
    },
    {
      name: 'Trabajo en Equipo',
      level: 'Avanzado',
      percentage: 85,
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      description: 'Colaboración y metodologías ágiles'
    },
    {
      name: 'Aprendizaje Continuo',
      level: 'Avanzado',
      percentage: 95,
      icon: BookOpen,
      color: 'from-indigo-500 to-blue-500',
      description: 'Adaptabilidad y crecimiento constante'
    },
  ];

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Mis Capacidades
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white">
            Habilidades
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Conjunto de competencias técnicas y blandas que he desarrollado a lo largo de mi formación académica y proyectos personales.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-2.5 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 border border-blue-200 dark:border-blue-800">
                      <span className="text-xs text-blue-700 dark:text-blue-300">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-slate-900 dark:text-white mb-2">
                      {skill.name}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 text-sm">
                      {skill.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Progreso</span>
                    <span className={`bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="relative h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div className="h-full w-full bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
