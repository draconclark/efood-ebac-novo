import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from './Container'
import { Logo } from './Logo'
import { colors } from '../styles/GlobalStyle'

const Header = styled.header`
  background: ${colors.soft};
`

const Content = styled(Container)`
  min-height: 164px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 14px;
    padding: 24px 0;
  }
`

const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
`

const CartText = styled.span`
  justify-self: end;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 640px) {
    justify-self: center;
  }
`

export const RestaurantHeader = () => (
  <Header>
    <Content>
      <NavLink to="/">Restaurantes</NavLink>
      <Logo />
      <CartText>0 produto(s) no carrinho</CartText>
    </Content>
  </Header>
)
