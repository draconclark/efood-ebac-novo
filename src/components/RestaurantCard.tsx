import styled from 'styled-components'
import { Link } from 'react-router-dom'
import type { Restaurant } from '../data/restaurants'
import { colors } from '../styles/GlobalStyle'

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 398px;
  background: ${colors.white};
  border: 1px solid ${colors.coral};
`

const Cover = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
`

const Tag = styled.span`
  padding: 6px 8px;
  background: ${colors.coral};
  color: white;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
`

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 12px 8px 8px;
`

const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
`

const Name = styled.h2`
  font-size: 18px;
  line-height: 1.25;
  font-weight: 800;
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
  font-weight: 800;

  span:last-child {
    color: #f5b642;
    transform: translateY(-1px);
  }
`

const Description = styled.p`
  margin-bottom: 16px;
  color: ${colors.coral};
  font-size: 14px;
  line-height: 1.55;
`

const Button = styled(Link)`
  align-self: flex-start;
  margin-top: auto;
  padding: 6px 8px;
  background: ${colors.coral};
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`

type Props = {
  restaurant: Restaurant
}

export const RestaurantCard = ({ restaurant }: Props) => (
  <Card>
    <Cover src={restaurant.image} alt={`Fachada e pratos do ${restaurant.title}`} />
    <Tags>
      {restaurant.featured && <Tag>Destaque da semana</Tag>}
      <Tag>{restaurant.type}</Tag>
    </Tags>
    <Body>
      <Headline>
        <Name>{restaurant.title}</Name>
        <Rating aria-label={`Nota ${restaurant.rating}`}>
          <span>{restaurant.rating.toFixed(1)}</span>
          <span aria-hidden="true">★</span>
        </Rating>
      </Headline>
      <Description>{restaurant.description}</Description>
      <Button to={`/restaurante/${restaurant.id}`}>Saiba Mais</Button>
    </Body>
  </Card>
)
