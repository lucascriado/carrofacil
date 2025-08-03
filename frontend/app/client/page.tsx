"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Car,
  Calendar,
  MapPin,
  Star,
  Fuel,
  Users,
  Settings,
  Search,
  Filter,
  Clock,
  ArrowLeft,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ClientPage() {
  const [activeTab, setActiveTab] = useState("vehicles")

  const availableVehicles = [
    {
      id: 1,
      name: "Honda Civic",
      category: "Sedan",
      price: "R$ 120",
      rating: 4.8,
      fuel: "Flex",
      transmission: "Automático",
      seats: 5,
      location: "Centro - SP",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
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
      location: "Vila Madalena - SP",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
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
      location: "Moema - SP",
      image: "/placeholder.svg?height=200&width=300",
      available: false,
    },
  ]

  const myRequests = [
    {
      id: 1,
      vehicle: "Honda Civic",
      startDate: "2024-01-20",
      endDate: "2024-01-25",
      status: "approved",
      value: "R$ 600,00",
      location: "Centro - SP",
    },
    {
      id: 2,
      vehicle: "Toyota Corolla",
      startDate: "2024-01-15",
      endDate: "2024-01-18",
      status: "completed",
      value: "R$ 330,00",
      location: "Vila Madalena - SP",
    },
    {
      id: 3,
      vehicle: "Volkswagen Polo",
      startDate: "2024-01-25",
      endDate: "2024-01-30",
      status: "pending",
      value: "R$ 450,00",
      location: "Pinheiros - SP",
    },
  ]

  const currentRental = {
    vehicle: "Honda Civic",
    startDate: "2024-01-20",
    endDate: "2024-01-25",
    returnDate: "2024-01-25",
    daysRemaining: 3,
    location: "Centro - SP",
    image: "/placeholder.svg?height=150&width=200",
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pendente", className: "bg-yellow-100 text-yellow-800" },
      approved: { label: "Aprovado", className: "bg-green-100 text-green-800" },
      rejected: { label: "Rejeitado", className: "bg-red-100 text-red-800" },
      completed: { label: "Concluído", className: "bg-blue-100 text-blue-800" },
    }

    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-blue-900">CarroFácil</span>
                <Badge className="bg-blue-600">Cliente</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-blue-600 text-white">JS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Olá, João Silva!</h1>
          <p className="text-blue-700">Bem-vindo ao seu painel do CarroFácil</p>
        </div>

        {/* Current Rental Alert */}
        {currentRental && (
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-blue-900">Veículo Atual</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src={currentRental.image || "/placeholder.svg"}
                    alt={currentRental.vehicle}
                    width={100}
                    height={75}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-blue-900">{currentRental.vehicle}</h3>
                    <p className="text-sm text-blue-700">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      {currentRental.location}
                    </p>
                    <p className="text-sm text-blue-600">Devolução: {currentRental.returnDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{currentRental.daysRemaining} dias</div>
                  <p className="text-sm text-blue-700 mb-3">restantes</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">Devolver Agora</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-blue-100">
            <TabsTrigger value="vehicles" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Veículos
            </TabsTrigger>
            <TabsTrigger value="requests" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Solicitações
            </TabsTrigger>
            <TabsTrigger value="current" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Atual
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Perfil
            </TabsTrigger>
          </TabsList>

          {/* Veículos Disponíveis */}
          <TabsContent value="vehicles" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-blue-900">Veículos Disponíveis</CardTitle>
                    <CardDescription>Escolha o veículo ideal para sua viagem</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 bg-transparent">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrar
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 bg-transparent">
                      <Search className="h-4 w-4 mr-2" />
                      Buscar
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableVehicles.map((vehicle) => (
                    <Card
                      key={vehicle.id}
                      className={`overflow-hidden hover:shadow-lg transition-shadow ${!vehicle.available ? "opacity-60" : ""}`}
                    >
                      <div className="relative">
                        <Image
                          src={vehicle.image || "/placeholder.svg"}
                          alt={vehicle.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className={`absolute top-3 left-3 ${vehicle.available ? "bg-green-600" : "bg-red-600"}`}>
                          {vehicle.available ? "Disponível" : "Indisponível"}
                        </Badge>
                        <Badge className="absolute top-3 right-3 bg-blue-600">{vehicle.category}</Badge>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-blue-900">{vehicle.name}</CardTitle>
                            <div className="flex items-center mt-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-blue-700 ml-1">{vehicle.rating}</span>
                            </div>
                            <p className="text-sm text-blue-600 mt-1">
                              <MapPin className="h-4 w-4 inline mr-1" />
                              {vehicle.location}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">{vehicle.price}</div>
                            <div className="text-sm text-blue-700">por dia</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between text-sm text-blue-700 mb-4">
                          <div className="flex items-center">
                            <Fuel className="h-4 w-4 mr-1" />
                            {vehicle.fuel}
                          </div>
                          <div className="flex items-center">
                            <Settings className="h-4 w-4 mr-1" />
                            {vehicle.transmission}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {vehicle.seats} lugares
                          </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled={!vehicle.available}>
                          {vehicle.available ? "Solicitar Aluguel" : "Indisponível"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Minhas Solicitações */}
          <TabsContent value="requests" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Minhas Solicitações</CardTitle>
                <CardDescription>Acompanhe o status das suas solicitações de aluguel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between p-4 border border-blue-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Car className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-900">{request.vehicle}</h4>
                          <p className="text-sm text-blue-700">
                            <Calendar className="h-4 w-4 inline mr-1" />
                            {request.startDate} até {request.endDate}
                          </p>
                          <p className="text-sm text-blue-600">
                            <MapPin className="h-4 w-4 inline mr-1" />
                            {request.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-blue-900 mb-2">{request.value}</p>
                        {getStatusBadge(request.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Veículo Atual */}
          <TabsContent value="current" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Veículo Atual</CardTitle>
                <CardDescription>Informações sobre seu aluguel ativo</CardDescription>
              </CardHeader>
              <CardContent>
                {currentRental ? (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <Image
                        src={currentRental.image || "/placeholder.svg"}
                        alt={currentRental.vehicle}
                        width={200}
                        height={150}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">{currentRental.vehicle}</h3>
                        <div className="space-y-2 text-blue-700">
                          <p>
                            <Calendar className="h-4 w-4 inline mr-2" />
                            Período: {currentRental.startDate} até {currentRental.endDate}
                          </p>
                          <p>
                            <MapPin className="h-4 w-4 inline mr-2" />
                            Local: {currentRental.location}
                          </p>
                          <p>
                            <Clock className="h-4 w-4 inline mr-2" />
                            Devolução em: {currentRental.daysRemaining} dias
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">Progresso do Aluguel</h4>
                      <Progress value={60} className="mb-2" />
                      <p className="text-sm text-blue-700">60% do período concluído</p>
                    </div>

                    <div className="flex space-x-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">Devolver Veículo</Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                        Estender Aluguel
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                        Suporte
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Car className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Nenhum veículo alugado</h3>
                    <p className="text-blue-700 mb-4">Você não possui nenhum aluguel ativo no momento</p>
                    <Button className="bg-blue-600 hover:bg-blue-700">Ver Veículos Disponíveis</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Perfil */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Meu Perfil</CardTitle>
                <CardDescription>Gerencie suas informações pessoais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback className="bg-blue-600 text-white text-xl">JS</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                    Alterar Foto
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-900">
                      Nome Completo
                    </Label>
                    <Input id="name" defaultValue="João Silva" className="border-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-900">
                      Email
                    </Label>
                    <Input id="email" type="email" defaultValue="joao.silva@email.com" className="border-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-900">
                      Telefone
                    </Label>
                    <Input id="phone" defaultValue="(11) 98765-4321" className="border-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf" className="text-blue-900">
                      CPF
                    </Label>
                    <Input id="cpf" defaultValue="123.456.789-00" className="border-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnh" className="text-blue-900">
                      CNH
                    </Label>
                    <Input id="cnh" defaultValue="12345678901" className="border-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-blue-900">
                      Endereço
                    </Label>
                    <Input
                      id="address"
                      defaultValue="Rua das Flores, 123 - São Paulo, SP"
                      className="border-blue-200"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">Salvar Alterações</Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
