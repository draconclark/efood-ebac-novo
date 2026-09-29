import styled from 'styled-components'
import { Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { MenuCard } from '../components/MenuCard'
import { RestaurantHeader } from '../components/RestaurantHeader'
import { restaurants } from '../data/restaurants'
import { colors } from '../styles/GlobalStyle'

const Hero = styled.section<{ $image: string }>`
  position: relative;
  min-height: 280px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url(${({ $image }) => $image});
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

const Note = styled.p`
  width: min(1024px, calc(100% - 32px));
  margin: 32px auto 0;
  color: ${colors.coral};
  font-size: 13px;
  opacity: 0.8;
`

export const Restaurant = () => {
  const { id } = useParams()
  const restaurant = restaurants.find((item) => item.id === Number(id))

  if (!restaurant) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <RestaurantHeader />
      <Hero $image={restaurant.image}>
        <HeroContent>
          <Category>{restaurant.type}</Category>
          <Title>{restaurant.title}</Title>
        </HeroContent>
      </Hero>
      <Main>
        <Grid>
          {restaurant.menu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </Grid>
        <Note>
          Nesta etapa do curso, o botão de adicionar ao carrinho é apenas visual. O gerenciamento de estado com Redux será implementado no módulo seguinte.
        </Note>
      </Main>
      <Footer />
    </>
  )
}
