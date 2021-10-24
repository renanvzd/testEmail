import { Container } from "./styles";
// import quemsomos from '../../Assets/quemSomosBanner.jpg';

export function QuemSomos() {
  return (
    <>
      <Container>
        <div className="header">
          <h1>Quem Somos</h1>
        </div>

        <div className="content">
          <div>
            <h2>
              Nome da empresa
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <h3>
            Segmentos:
            </h3>
            <li>
              <ul> - xxxxxxxxx;</ul>
              <ul> - xxxxxxxxx;</ul>
              <ul> - xxxxxxxxx;</ul>
              <ul> - xxxxxxxxx;</ul>
            </li>
            <div className="spanSlogan">
              <p>Fale consoco, somos especialistas!</p>
            </div>
          </div>
          
          {/* <div className="contentImage">
            <img src={quemsomos} alt="Quem Somos" />
          </div> */}
        </div>

      </Container>
    </>
  );
}
