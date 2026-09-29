import styled from 'styled-components'
import { Container } from './Container'
import { Logo } from './Logo'
import { colors } from '../styles/GlobalStyle'

const FooterArea = styled.footer`
  margin-top: 88px;
  background: ${colors.soft};
`

const Content = styled(Container)`
  min-height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 40px 0;
  text-align: center;
`

const Social = styled.div`
  display: flex;
  gap: 12px;
`

const SocialLink = styled.a`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border: 2px solid ${colors.coral};
  border-radius: 6px;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
`

const Copy = styled.p`
  max-width: 480px;
  font-size: 10px;
  line-height: 1.4;
`

export const Footer = () => (
  <FooterArea>
    <Content>
      <Logo />
      <Social aria-label="Redes sociais">
        <SocialLink href="#" aria-label="Instagram">in</SocialLink>
        <SocialLink href="#" aria-label="Facebook">f</SocialLink>
        <SocialLink href="#" aria-label="X / Twitter">x</SocialLink>
      </Social>
      <Copy>
        A eFood é uma plataforma para divulgação de estabelecimentos. A responsabilidade pela entrega e pela qualidade dos produtos é do estabelecimento contratado.
      </Copy>
    </Content>
  </FooterArea>
)
