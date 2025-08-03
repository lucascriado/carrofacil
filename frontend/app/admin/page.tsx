"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Car,
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Package,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("requests")

  const requests = [
    {
      id: 1,
      customer: "João Silva",
      vehicle: "Honda Civic",
      startDate: "2024-01-15",
      endDate: "2024-01-20",
      status: "pending",
      value: "R$ 600,00",
    },
    {
      id: 2,
      customer: "Maria Santos",
      vehicle: "Toyota Corolla",
      startDate: "2024-01-18",
      endDate: "2024-01-25",
      status: "approved",
      value: "R$ 770,00",
    },
    {
      id: 3,
      customer: "Pedro Costa",
      vehicle: "Jeep Compass",
      startDate: "2024-01-20",
      endDate: "2024-01-22",
      status: "pending",
      value: "R$ 360,00",
    },
  ]

  const returns = [
    {
      id: 1,
      customer: "Ana Lima",
      vehicle: "Honda Civic",
      returnDate: "2024-01-14",
      expectedDate: "2024-01-14",
      status: "completed",
      condition: "excellent",
    },
    {
      id: 2,
      customer: "Carlos Oliveira",
      vehicle: "Volkswagen Polo",
      returnDate: "2024-01-15",
      expectedDate: "2024-01-15",
      status: "pending",
      condition: "good",
    },
  ]

  const inventory = [
    {
      id: 1,
      name: "Honda Civic",
      category: "Sedan",
      status: "available",
      location: "Filial Centro",
      maintenance: "Em dia",
      price: "R$ 120/dia",
    },
    {
      id: 2,
      name: "Toyota Corolla",
      category: "Sedan",
      status: "rented",
      location: "Filial Norte",
      maintenance: "Em dia",
      price: "R$ 110/dia",
    },
    {
      id: 3,
      name: "Jeep Compass",
      category: "SUV",
      status: "maintenance",
      location: "Oficina",
      maintenance: "Revisão",
      price: "R$ 180/dia",
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pendente", className: "bg-yellow-100 text-yellow-800" },
      approved: { label: "Aprovado", className: "bg-green-100 text-green-800" },
      rejected: { label: "Rejeitado", className: "bg-red-100 text-red-800" },
      completed: { label: "Concluído", className: "bg-blue-100 text-blue-800" },
      available: { label: "Disponível", className: "bg-green-100 text-green-800" },
      rented: { label: "Alugado", className: "bg-blue-100 text-blue-800" },
      maintenance: { label: "Manutenção", className: "bg-orange-100 text-orange-800" },
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
                <Badge className="bg-blue-600">Admin</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-blue-600 text-white">AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Solicitações Pendentes</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">12</div>
              <p className="text-xs text-blue-600">+2 desde ontem</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Veículos Alugados</CardTitle>
              <Car className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">28</div>
              <p className="text-xs text-blue-600">+5 desde ontem</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Devoluções Hoje</CardTitle>
              <Package className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">8</div>
              <p className="text-xs text-blue-600">3 pendentes</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Receita Mensal</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">R$ 45.2K</div>
              <p className="text-xs text-blue-600">+12% vs mês anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-blue-100">
            <TabsTrigger value="requests" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Solicitações
            </TabsTrigger>
            <TabsTrigger value="returns" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Devoluções
            </TabsTrigger>
            <TabsTrigger value="inventory" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Estoque
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Perfil
            </TabsTrigger>
          </TabsList>

          {/* Solicitações */}
          <TabsContent value="requests" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-blue-900">Solicitações de Aluguel</CardTitle>
                    <CardDescription>Gerencie as solicitações de aluguel dos clientes</CardDescription>
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
                <div className="space-y-4">
                  {requests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between p-4 border border-blue-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {request.customer
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-blue-900">{request.customer}</h4>
                          <p className="text-sm text-blue-700">{request.vehicle}</p>
                          <p className="text-xs text-blue-600">
                            {request.startDate} até {request.endDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium text-blue-900">{request.value}</p>
                          {getStatusBadge(request.status)}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Devoluções */}
          <TabsContent value="returns" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Devoluções</CardTitle>
                <CardDescription>Gerencie as devoluções de veículos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {returns.map((returnItem) => (
                    <div
                      key={returnItem.id}
                      className="flex items-center justify-between p-4 border border-blue-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {returnItem.customer
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-blue-900">{returnItem.customer}</h4>
                          <p className="text-sm text-blue-700">{returnItem.vehicle}</p>
                          <p className="text-xs text-blue-600">Devolvido em: {returnItem.returnDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-blue-700">Condição: {returnItem.condition}</p>
                          {getStatusBadge(returnItem.status)}
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Processar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Estoque */}
          <TabsContent value="inventory" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-blue-900">Controle de Estoque</CardTitle>
                    <CardDescription>Gerencie a frota de veículos</CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Veículo
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventory.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      className="flex items-center justify-between p-4 border border-blue-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Car className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-900">{vehicle.name}</h4>
                          <p className="text-sm text-blue-700">{vehicle.category}</p>
                          <p className="text-xs text-blue-600">{vehicle.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium text-blue-900">{vehicle.price}</p>
                          <p className="text-sm text-blue-700">{vehicle.maintenance}</p>
                          {getStatusBadge(vehicle.status)}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-600 text-red-600 bg-transparent">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Perfil */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Configurações do Perfil</CardTitle>
                <CardDescription>Gerencie suas informações pessoais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback className="bg-blue-600 text-white text-xl">AD</AvatarFallback>
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
                    <Input id="name" defaultValue="Administrador Sistema" className="border-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-900">
                      Email
                    </Label>
                    <Input id="email" type="email" defaultValue="admin@carrofacil.com" className="border-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-900">
                      Telefone
                    </Label>
                    <Input id="phone" defaultValue="(11) 99999-9999" className="border-blue-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-blue-900">
                      Cargo
                    </Label>
                    <Input id="role" defaultValue="Administrador Geral" className="border-blue-200" />
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
