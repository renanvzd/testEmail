import Whatsapp from "../../Assets/Whats.svg";
import Instagram from "../../Assets/Instagram_new.svg";
import Facebook from "../../Assets/Facebook.svg";
import { Container, Whats } from './styles';

export function Footer() {
  return (
    <Container >
      <Whats>
        <div>
          <a
            target="_blank"
            href="/"
            title="Whatsapp"
            rel="noreferrer"
          >
            <img src={Whatsapp} alt="Whatsapp" className="whatsImg"/>
          
          
          </a>
      </div>
      </Whats>
            
      <header>
        <p>Visite nossas redes sociais:</p>
      </header>
       <div className="footerContainer">

       <div className="socialMediaFooter">
         <ul>
            <li>
              <a 
                href="https://www.facebook.com/"
                target="_blank"
                title="Visite nosso facebook"
                rel="noreferrer"
              >
                <img src={Facebook} alt="Facebook" className="mediaImgFooter"/>
              </a>
            </li>
            <li>
            <a
                href="https://www.instagram.com/"
                target="_blank"
                title="Visite nosso Instagram"
                rel="noreferrer"
              >
                <img src={Instagram} alt="Instagram" className="mediaImgFooter"/>
              </a>
            </li>
        </ul>
      </div>
      </div>
        <div className="footerContact">
          <span>Rio Grande do Sul</span>
          <span>Santa Catarina</span>
        </div>
      <div className="copyright">
        <p>© 2021 Nome Empresa</p>
      </div>

    </Container>
  )
}