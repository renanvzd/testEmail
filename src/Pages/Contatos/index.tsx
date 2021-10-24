import { Container, Header } from "./styles";

export function Contatos() {
  return (
    <>
      <Header>
        <div className="header">
          <h1>Fale Conosco</h1>
        </div>
      </Header>
      
      <Container>
      <div className="mainSection">
        <div className="titleSection">
          <p>Entre em contato conosco para maiores informações e solicitação de orçamento!</p>
        </div>
        <div className="emailSection">
          <p>Chame pelo whatsapp ou nos contate por e-mail e telefones abaixo: </p>
          <span>email </span>
        </div>
        <div className="phoneSectionRS">
          <p>Rio Grande do Sul: </p>
          <span>
            (51) XXXX-XXXX
          </span>
          <span>
            (51) XXXX-XXXX
          </span>
          <span>
            (51) XXXX-XXXX
          </span>
        </div>
        <div className="phoneSectionRS">
        <p>Santa Catarina: </p>
        <span>
          (51) XXXX-XXXX
        </span>
        </div>
      </div>
      </Container>
    </>  
  );
}
