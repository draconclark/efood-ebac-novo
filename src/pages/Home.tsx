import styled from 'styled-components'
import { HomeHeader } from '../components/HomeHeader'
import { Container } from '../components/Container'
import { RestaurantCard } from '../components/RestaurantCard'
import { Footer } from '../components/Footer'
import { restaurants } from '../data/restaurants'

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

export const Home = () => (
  <>
    <HomeHeader />
    <Main>
      <Grid>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Grid>
    </Main>
    <Footer />
  </>
)
