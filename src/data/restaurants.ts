export type Restaurant = {
  id: number
  title: string
  type: string
  rating: number
  description: string
  image: string
  featured?: boolean
  menu: MenuItem[]
}

export type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const makeMenu = (image: string): MenuItem[] => [
  {
    id: 1,
    name: 'Entrada especial da casa',
    description:
      'Uma combinação leve e saborosa preparada com ingredientes selecionados para começar bem a refeição.',
    price: 29.9,
    image
  },
  {
    id: 2,
    name: 'Prato principal',
    description:
      'Receita autoral com ingredientes frescos, preparo cuidadoso e o sabor que representa a identidade da casa.',
    price: 49.9,
    image
  },
  {
    id: 3,
    name: 'Sobremesa artesanal',
    description:
      'Finalização delicada e equilibrada, ideal para completar a experiência gastronômica.',
    price: 24.9,
    image
  }
]

export const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Bella Tavola Italiana',
    type: 'Italiana',
    rating: 4.7,
    featured: true,
    image: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana/capa.jpeg',
    description:
      'A paixão pela cozinha italiana aparece em cada prato: massas, risotos, frutos do mar e carnes preparados com cuidado e ingredientes selecionados.',
    menu: makeMenu('https://api-ebac.vercel.app/efood/bella_tavola_italiana/capa.jpeg')
  },
  {
    id: 2,
    title: 'Casa das Delícias Árabes',
    type: 'Árabe',
    rating: 4.8,
    image: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes/capa.jpeg',
    description:
      'Sabores do Oriente Médio em receitas tradicionais, temperos marcantes e um cardápio cheio de personalidade.',
    menu: makeMenu('https://api-ebac.vercel.app/efood/casa_delicias_arabes/capa.jpeg')
  },
  {
    id: 3,
    title: 'Sakura Sushi House',
    type: 'Japonesa',
    rating: 4.9,
    image: 'https://api-ebac.vercel.app/efood/sakura_sushi_house/capa.jpeg',
    description:
      'Uma experiência japonesa completa, com preparos delicados, apresentação cuidadosa e ingredientes frescos.',
    menu: makeMenu('https://api-ebac.vercel.app/efood/sakura_sushi_house/capa.jpeg')
  },
  {
    id: 4,
    title: 'Cantinho Lusitano',
    type: 'Portuguesa',
    rating: 4.8,
    image: 'https://api-ebac.vercel.app/efood/cantinho_lusitano/capa.jpeg',
    description:
      'Receitas portuguesas que valorizam tradição, conforto e os sabores clássicos da culinária lusitana.',
    menu: makeMenu('https://api-ebac.vercel.app/efood/cantinho_lusitano/capa.jpeg')
  },
  {
    id: 5,
    title: 'Piazza del Forno',
    type: 'Italiana',
    rating: 4.7,
    image: 'https://api-ebac.vercel.app/efood/piazza/capa.png',
    description:
      'Pizzas artesanais, massa leve e ingredientes frescos preparados para celebrar a tradição italiana.',
    menu: makeMenu('https://api-ebac.vercel.app/efood/piazza/capa.png')
  },
  {
    id: 6,
    title: 'Jardim da Terra',
    type: 'Vegana',
    rating: 4.8,
    featured: true,
    image: 'https://api-ebac.vercel.app/efood/jardim_terra/capa.png',
    description:
      'Culinária vegetal criativa com ingredientes frescos, orgânicos e sazonais em pratos cheios de cor e sabor.',
    menu: makeMenu('https://api-ebac.vercel.app/efood/jardim_terra/capa.png')
  }
]
