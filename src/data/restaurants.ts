export type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Não foi possível carregar os restaurantes.')
  }

  return response.json()
}
