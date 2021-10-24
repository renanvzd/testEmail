import backgroundHeader from '../../Assets/backgroundHeader.jpg'
import styled from 'styled-components';

export const Header = styled.header`
  padding-top: 7rem;

  .header {
    height: 8rem;
    background-image: url(${backgroundHeader});
    margin: auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-content: center;
    display: flex;

    h1 {
      color: white;
    }
  }
`

export const Container = styled.form`
  margin: .5rem 0rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .mainSection {
    
    margin: 1rem 2rem;
    padding-bottom: 1rem;
    
    @media (max-width: 480px) {
      width: 400px;
    }
    
    p {
      
      padding: 0 3rem;
      text-align: center;
    }

    .titleSection {
      
      padding-bottom: 2rem;
      margin: 0 2rem;

      

        p {
        text-align: center;
        color: black;    
        padding: 1.5rem 2rem;
        font-size: 1.5rem;
        @media (max-width: 550px) {
          font-size: 1.3rem;
          padding: 1.5rem 1rem;
        }
      }
  
      span {
        display: block;
        font-weight: 600;
        text-align: center;
        padding: 1.5rem 0;
        font-size: 1.5rem;
        color: #008B00;
      }
    }

    .emailSection{
      padding-bottom: 1rem;

      p {
        font-weight: 600;
        text-align: center;
        font-size: 1.5rem;
        @media (max-width: 550px) {
          font-size: 1.3rem;
        }
      }

      span {
        padding-top: 2rem;
        display: block;
        text-align: center;
        color: blue;
        font-size: 1.5rem;
        font-weight: 600;
        @media (max-width: 550px) {
          font-size: 1.2rem;
        }
        @media (max-width: 400px) {
          font-size: 1rem;
        }

      }
    }

    .phoneSectionRS {
      padding-top: 1rem;

      p {
        font-weight: 600;
        text-align: center;
        padding: .5rem 0;
        font-size: 1.5rem;
      }
      span {
        display: block;
        text-align: center;
        color: blue;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }

  }
`