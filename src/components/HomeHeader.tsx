import styled from 'styled-components'
import { Container } from './Container'
import { Logo } from './Logo'
import { colors } from '../styles/GlobalStyle'

const Header = styled.header`
  min-height: 384px;
  background-color: ${colors.soft};
  background-image:
    radial-gradient(circle at 15% 20%, rgba(230, 103, 103, 0.08) 0 2px, transparent 3px),
    radial-gradient(circle at 75% 65%, rgba(230, 103, 103, 0.08) 0 2px, transparent 3px);
  background-size: 34px 34px, 46px 46px;
`

const HeaderContent = styled(Container)`
  min-height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
`

const Title = styled.h1`
  max-width: 540px;
  text-align: center;
  font-size: clamp(28px, 4vw, 36px);
  line-height: 1.15;
  font-weight: 900;
  letter-spacing: -0.8px;
`

export const HomeHeader = () => (
  <Header>
    <HeaderContent>
      <Logo />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderContent>
  </Header>
)
