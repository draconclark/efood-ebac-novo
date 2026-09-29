import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export const Logo = () => (
  <Link to="/" aria-label="Ir para a página inicial">
    <img src={logo} alt="eFood" width="126" height="58" />
  </Link>
)
