import styled from 'styled-components';

export const NavBar = styled.div`

@media (min-width: 1200px) {
display: none;
}
@media (max-width: 1200px) {
  .navbar {
    
    button.menu-bars {
      text-decoration: none;
      font-size: 1.5rem;
      margin: 1.5rem;
      background-color: white;
      border-style: none;

      
    }
  }


  .nav-menu {
    background-color: #104E8B

;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    z-index: 6;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
    .menu-bars {
      margin-left: 2rem;
      width: 2rem;
      height: 1.8rem;
    }
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: #104E8B

;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }
  }
}
  @media(max-width: 768px) {
    .menu-bars {
      margin-left: 1rem;
      font-size: 1rem;
    }
`