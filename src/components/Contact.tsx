import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setFormStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('idle');
      }, 5000);
    } else {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jrcas027@gmail.com',
      href: 'mailto:jrcas027@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Luis Sánchez',
      href: 'https://www.linkedin.com/in/luis-s%C3%A1nchez-c-936b901b8',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@LuisSanchez851',
      href: 'https://github.com/LuisSanchez851',
      color: 'from-slate-700 to-slate-900'
    },
  ];

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Conectemos
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white">
            Contacto
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme. Estoy siempre abierta a nuevas oportunidades y conversaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">
                Envíame un mensaje
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Completa el formulario y te responderé lo antes posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className={`bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 ${
                      errors.name ? 'border-red-500 dark:border-red-500' : ''
                    }`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className={`bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 ${
                      errors.email ? 'border-red-500 dark:border-red-500' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    className={`bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 resize-none ${
                      errors.message ? 'border-red-500 dark:border-red-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>

                {/* Success/Error Messages */}
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" />
                    <div>
                      <p className="text-green-800 dark:text-green-300">
                        ¡Mensaje enviado exitosamente!
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Te responderé lo antes posible.
                      </p>
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                    <p className="text-red-800 dark:text-red-300">
                      Por favor, corrige los errores en el formulario.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 border-0 shadow-xl text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-white">
                  Información de Contacto
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Encuéntrame en las siguientes plataformas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                      onClick={() => info.href && window.open(info.href, '_blank')}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-blue-100 mb-1">{info.label}</p>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white mb-2">
                      Disponibilidad
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Actualmente disponible para proyectos freelance y colaboraciones académicas. Tiempo de respuesta promedio: 24-48 horas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}