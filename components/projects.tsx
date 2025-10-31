import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Mascota Virtual",
    description:
      "API & Dashboard full-stack que simula una mascota virtual. Backend con Spring Boot implementando lógica de negocio, persistencia y autenticación. Frontend con React + Vite para interfaz interactiva.",
    technologies: ["Spring Boot", "React", "Vite", "Java", "REST API"],
    githubBackend: "https://github.com/jose-Diaz1002/MascotaBackend.git",
    githubFrontend: "https://github.com/jose-Diaz1002/mascota-frontend.git",
  },
  {
    title: "Blackjack WebFlux",
    description:
      "API de Blackjack totalmente funcional y no bloqueante usando Spring Boot 3.x y Spring WebFlux. Implementa arquitectura reactiva para manejo eficiente de múltiples partidas simultáneas.",
    technologies: ["Spring Boot 3.x", "Spring WebFlux", "Java", "Reactive Programming"],
    githubBackend: "https://github.com/jose-Diaz1002/5-01-Webflux.git",
  },
  {
    title: "Escape Room Virtual",
    description:
      "Proyecto colaborativo realizado en IT Academy enfocado en trabajo en equipo. Aplicación que simula una experiencia de escape room con múltiples desafíos y lógica de juego.",
    technologies: ["Java", "Spring Framework", "Team Collaboration", "Git"],
    githubBackend: "https://github.com/jose-Diaz1002/03.03-DevelopersTeam.git",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Proyectos Destacados</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Proyectos que demuestran mis habilidades en desarrollo backend con Java y Spring
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-2">
                <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                  <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    {project.githubFrontend ? "Backend" : "Ver Código"}
                  </a>
                </Button>
                {project.githubFrontend && (
                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Frontend
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
