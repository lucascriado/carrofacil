import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Users, Shield, Clock, Star, Fuel, Settings, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredCars = [
    {
      id: 1,
      name: "Honda Civic",
      category: "Sedan",
      price: "R$ 120",
      rating: 4.8,
      fuel: "Flex",
      transmission: "Automático",
      seats: 5,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Toyota Corolla",
      category: "Sedan",
      price: "R$ 110",
      rating: 4.9,
      fuel: "Flex",
      transmission: "Automático",
      seats: 5,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Jeep Compass",
      category: "SUV",
      price: "R$ 180",
      rating: 4.7,
      fuel: "Flex",
      transmission: "Automático",
      seats: 5,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-900">CarroFácil</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-900 hover:text-blue-600 font-medium">
                Início
              </Link>
              <Link href="/vehicles" className="text-blue-700 hover:text-blue-600">
                Veículos
              </Link>
              <Link href="/about" className="text-blue-700 hover:text-blue-600">
                Sobre
              </Link>
              <Link href="/contact" className="text-blue-700 hover:text-blue-600">
                Contato
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/client">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  <User className="h-4 w-4 mr-2" />
                  Cliente
                </Button>
              </Link>
              <Link href="/admin">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Settings className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Alugue seu carro ideal com
              <span className="text-blue-600"> facilidade</span>
            </h1>
            <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
              Encontre o veículo perfeito para sua viagem. Processo simples, preços justos e atendimento excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Ver Veículos Disponíveis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3 bg-transparent"
              >
                Como Funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Por que escolher o CarroFácil?</h2>
            <p className="text-blue-700 text-lg">Oferecemos a melhor experiência em aluguel de veículos</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Atendimento 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">
                  Suporte completo a qualquer hora do dia para garantir sua tranquilidade
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Segurança Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">Todos os veículos com seguro completo e manutenção em dia</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Processo Rápido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">Alugue em poucos minutos com nosso sistema simplificado</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Veículos em Destaque</h2>
            <p className="text-blue-700 text-lg">Confira alguns dos nossos carros mais populares</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-shadow border-blue-200">
                <div className="relative">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-blue-600">{car.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-blue-900">{car.name}</CardTitle>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-blue-700 ml-1">{car.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{car.price}</div>
                      <div className="text-sm text-blue-700">por dia</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-blue-700 mb-4">
                    <div className="flex items-center">
                      <Fuel className="h-4 w-4 mr-1" />
                      {car.fuel}
                    </div>
                    <div className="flex items-center">
                      <Settings className="h-4 w-4 mr-1" />
                      {car.transmission}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {car.seats} lugares
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Alugar Agora</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para sua próxima viagem?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Cadastre-se agora e tenha acesso a nossa frota completa com os melhores preços
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">CarroFácil</span>
              </div>
              <p className="text-blue-200">Sua melhor opção para aluguel de veículos com qualidade e confiança.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-blue-200">
                <li>Aluguel de Carros</li>
                <li>Seguro Completo</li>
                <li>Suporte 24h</li>
                <li>Entrega e Coleta</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-blue-200">
                <li>Sobre Nós</li>
                <li>Contato</li>
                <li>Termos de Uso</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-blue-200">
                <li>0800 123 4567</li>
                <li>contato@carrofacil.com</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 CarroFácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
