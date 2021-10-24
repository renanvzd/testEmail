import backgroundHeader from '../../Assets/backgroundHeader.jpg'
import styled from 'styled-components';

export const Container = styled.main`
   padding-top: 7rem;

   .header {
    height: 8rem;
    margin-top: 8rem;
    background-image: url(${backgroundHeader});
    margin:auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-content: center;
    display: flex;

    h1 {
      color: white;
    }
  }

  .content {
    margin-top: 2.5rem;
    margin-left: 3rem;
    margin-right: 2rem;
    margin-bottom: 3.5rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    text-align: justify;
    
    @media (max-width: 1500px) {
      display: block;
      margin: 2.5rem 4rem 3.5rem 4rem;

      .contentImage {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        align-content: center;


        img {
          width: 60%;
          height: 60%;
          
          }
      }


      h2 {
        font-size: 1.5rem;
        text-align: center;

      }

        p {
          font-size: 1rem;

          &:last-child{
            padding-bottom: 3rem;
          }
        }
      }

      h3 {
        padding-top: 2rem;
        padding-bottom: 1rem;
      }

    }



    p {
      
      & + p {
        padding-top: 1rem;
      }
    }

    img {
      display: flex;
      max-width: 750px;
      height: 45rem;
    }

    h2 {
      padding-bottom: 1.5rem;
    }

    h3 {
      padding-top: 2rem;
      padding-bottom: 1rem;
    }

    .spanSlogan {
      
      margin:auto;
      align-items: center;
      text-align: center;
      justify-content: center;
      align-content: center;
    
      p {
        padding-top: 2rem;
        text-align: center;  
        font-weight: 600;
      }
    }
  
`