import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-center">{"¡Trabajemos Juntos!"}</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center text-balance">
          Estoy disponible para nuevas oportunidades como desarrollador backend
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:jldi1002@hotmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jldi1002@hotmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <a href="tel:+34634601040" className="text-muted-foreground hover:text-primary transition-colors">
                    +34 634 60 10 40
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/jose-Diaz1002" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="lg" asChild>
              <a href="mailto:jldi1002@hotmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jose Luis Diaz.</p>
      </footer>
    </section>
  )
}
