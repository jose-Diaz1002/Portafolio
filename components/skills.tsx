import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Backend",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 88 },
      { name: "Spring Framework", level: 85 },
      { name: "Spring WebFlux", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Herramientas",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Maven", level: 80 },
      { name: "IntelliJ IDEA", level: 85 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Trabajo en Equipo", level: 90 },
      { name: "Pensamiento Crítico", level: 85 },
      { name: "Responsabilidad", level: 95 },
      { name: "Empatía", level: 88 },
      { name: "Inteligencia Emocional", level: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Habilidades Técnicas</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Tecnologías y competencias con las que trabajo diariamente
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
