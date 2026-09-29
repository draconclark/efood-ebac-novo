import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HomeHeader } from '../components/HomeHeader'
import { Container } from '../components/Container'
import { RestaurantCard } from '../components/RestaurantCard'
import { Footer } from '../components/Footer'
import { getRestaurants, type Restaurant } from '../data/restaurants'
import { colors } from '../styles/GlobalStyle'

const Main = styled.main`
  padding-top: 80px;
`

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const Status = styled(Container)`
  min-height: 240px;
  display: grid;
  place-items: center;
  color: ${colors.coral};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`

export const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getRestaurants()
      .then(setRestaurants)
      .catch(() => setError('Não foi possível carregar os restaurantes. Tente novamente mais tarde.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <HomeHeader />
      <Main>
        {loading && <Status>Carregando restaurantes...</Status>}
        {!loading && error && <Status>{error}</Status>}
        {!loading && !error && (
          <Grid>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </Grid>
        )}
      </Main>
      <Footer />
    </>
  )
}
