import { useEffect } from 'react'
import styled from 'styled-components'
import type { MenuItem } from '../data/restaurants'
import { colors } from '../styles/GlobalStyle'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.8);
`

const Modal = styled.div`
  position: relative;
  width: min(1024px, 100%);
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  padding: 32px;
  background: ${colors.coral};
  color: ${colors.white};

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`

const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 720px) {
    width: 100%;
    height: 240px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 900;
`

const Description = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.55;
`

const Serving = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.4;
`

const AddButton = styled.button`
  border: 0;
  padding: 6px 8px;
  background: ${colors.soft};
  color: ${colors.coral};
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
`

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  color: ${colors.white};
  font-size: 30px;
  line-height: 1;
  font-weight: 300;
  cursor: pointer;
`

type Props = {
  item: MenuItem
  onClose: () => void
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

export const ProductModal = ({ item, onClose }: Props) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <Overlay
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <Modal role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
        <CloseButton type="button" onClick={onClose} aria-label="Fechar modal">
          ×
        </CloseButton>
        <Image src={item.foto} alt={item.nome} />
        <Content>
          <Title id="product-modal-title">{item.nome}</Title>
          <Description>{item.descricao}</Description>
          <Serving>Serve: {item.porcao}</Serving>
          <AddButton type="button">
            Adicionar ao carrinho - {formatPrice(item.preco)}
          </AddButton>
        </Content>
      </Modal>
    </Overlay>
  )
}
