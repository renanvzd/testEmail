import { Link } from 'react-router-dom';
import { Navbar } from "../Navbar";
// import logoImg from '../../Assets/.png'
import { Container, Content, Menu } from './styles'

export function Header() {
  return (
    <Container >
      <Navbar />
      <Content>
        <Link to="/">
          {/* <img src={logoImg} alt="Nome da Empresa" /> */}
          <p>Logo da Empresa</p>
        </Link>
      </Content>

      <Menu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quem-somos">Quem Somos</Link>
          </li>
          <li>
            <Link to="/">Outro Menu</Link>
          </li>
          <li>
            <Link to="/faleconosco">Fale Conosco</Link>
          </li>
          <li>
            <Link to="/contatos">Contatos</Link>
          </li>
        </ul>
      </Menu>

    </Container>
  )
}