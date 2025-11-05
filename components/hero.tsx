import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-0 pt-16">
  <div className="w-full text-center">
    <div className="space-y-6">
      <div className="space-y-2">
        {/* Banner ancho completo */}
        <div className="w-full mb-12">
          <img 
            src="/banner.png" 
            alt="Banner" 
            className="w-full h-auto rounded-lg" 
          />
        </div>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Apasionado del mundo del desarrollo Backend, en constante aprendizaje y crecimiento. Mi objetivo es formar parte de un equipo
            donde pueda aportar mi entusiasmo y dedicación para crear proyectos desafiantes mientras perfecciono mis habilidades.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <a href="#projects">Ver Proyectos</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contactar</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="https://github.com/jose-Diaz1002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:jldi1002@hotmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+34634601040"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
