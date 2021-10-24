import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: white;

  header {
      
      padding-bottom: 0rem;
      align-items: center;
      text-align: center;
      
      p {
        padding-top: 1.5rem;
        display: block;
        
        font-size: 1rem;
        color: black;
      }
  }

  .copyright {
      
      align-items: center;
      text-align: center;
      
      p {
        padding-top: 1rem;
        padding-bottom: 1.5rem;
        display: block;
        
        font-size: 1rem;
        color: black;
      }
  }

  .footerContainer {
      
      padding-top: 1rem;

      .socialMediaFooter {
        display: flex;
        justify-content: center;
        padding-bottom: 0rem;
        margin-top: 0rem;
        margin-bottom: 0rem;

        @media (max-width: 1500px) {
          img {
            width: 2.5rem;
          }
        }
      }

      .socialMediaFooter ul {
        display: flex;
        
      }

      .socialMediaFooter li {
        list-style: none;
        padding-right: 1.4rem;
        padding-left: 1.4rem;
      }
    }
    .footerContact {
        p {
          font-size: 1rem;
          text-align: center;
          color: black;
          
        }

        span {
          justify-content: center;
          text-align: center;
          display: block;
          color: black;
          font-weight: 800;
          font-size: 1rem;
          margin: 0rem 1rem;
          padding: 0rem 0;
          @media (max-width: 560px) {
            margin: .5rem 1rem;
          }

          &:first-child{
            padding-top: .5rem;
          }
          &:last-child{
            padding-top: .5rem;
            font-size: 1rem;
            margin-bottom: .2rem;

          }
        }
      }
`
export const Whats = styled.div`
  div {
    position: fixed;
    bottom: 2.5rem;
    right: 2rem;

    @media (max-width: 560px) {
      bottom: 9rem;
      right: 1rem;
    }

    img {
      width: 120px;

      @media (max-width: 1490px) {
        width: 100px;
      }

      @media (max-width: 560px) {
        width: 6.5rem;
      }
    }
  }
`