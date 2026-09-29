import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { MenuCard } from '../components/MenuCard'
import { ProductModal } from '../components/ProductModal'
import { RestaurantHeader } from '../components/RestaurantHeader'
import {
  getRestaurants,
  type MenuItem,
  type Restaurant as RestaurantType
} from '../data/restaurants'
import { colors } from '../styles/GlobalStyle'

const Hero = styled.section<{ $image: string }>`
  position: relative;
  min-height: 280px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url(${({ $image }) => $image});
  background-position: center;
  background-size: cover;
  color: white;
`

const HeroContent = styled(Container)`
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 32px;
`

const Category = styled.span`
  font-size: 32px;
  font-weight: 300;
  text-transform: lowercase;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
`

const Main = styled.main`
  padding-top: 56px;
`

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

const Status = styled(Container)`
  min-height: 320px;
  display: grid;
  place-items: center;
  color: ${colors.coral};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 12px;
  padding: 6px 8px;
  background: ${colors.coral};
  color: ${colors.white};
`

export const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getRestaurants()
      .then((restaurants) => {
        const foundRestaurant = restaurants.find((item) => item.id === Number(id))

        if (!foundRestaurant) {
          setError('Restaurante não encontrado.')
          return
        }

        setRestaurant(foundRestaurant)
      })
      .catch(() => setError('Não foi possível carregar o cardápio. Tente novamente mais tarde.'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <>
        <RestaurantHeader />
        <Status>Carregando cardápio...</Status>
        <Footer />
      </>
    )
  }

  if (error || !restaurant) {
    return (
      <>
        <RestaurantHeader />
        <Status>
          <div>
            <p>{error || 'Restaurante não encontrado.'}</p>
            <BackLink to="/">Voltar aos restaurantes</BackLink>
          </div>
        </Status>
        <Footer />
      </>
    )
  }

  return (
    <>
      <RestaurantHeader />
      <Hero $image={restaurant.capa}>
        <HeroContent>
          <Category>{restaurant.tipo}</Category>
          <Title>{restaurant.titulo}</Title>
        </HeroContent>
      </Hero>
      <Main>
        <Grid>
          {restaurant.cardapio.map((item) => (
            <MenuCard key={item.id} item={item} onBuy={setSelectedProduct} />
          ))}
        </Grid>
      </Main>
      <Footer />
      {selectedProduct && (
        <ProductModal item={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  )
}
