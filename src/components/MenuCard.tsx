import styled from 'styled-components'
import type { MenuItem } from '../data/restaurants'
import { colors } from '../styles/GlobalStyle'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 338px;
  padding: 8px;
  background: ${colors.coral};
  color: ${colors.soft};
`

const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

const Title = styled.h3`
  margin: 8px 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 900;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 1.45;
`

const Button = styled.button`
  width: 100%;
  margin-top: auto;
  border: 0;
  padding: 6px 8px;
  background: ${colors.soft};
  color: ${colors.coral};
  font-weight: 800;
`

type Props = {
  item: MenuItem
}

export const MenuCard = ({ item }: Props) => (
  <Card>
    <Image src={item.image} alt={item.name} />
    <Title>{item.name}</Title>
    <Text>{item.description}</Text>
    <Button type="button">Adicionar ao carrinho</Button>
  </Card>
)
