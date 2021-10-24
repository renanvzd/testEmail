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
    
    .containerForm {
      width: 100%;
      max-width: 600px;
      padding: 0rem 3rem;
      
      border-radius: 0.24rem;
      text-align: center;
    }


    h1 {
      color: var (--text-title);
      font-size: 1.5rem;
      padding-bottom: .5rem;
      padding-top: 2rem;
      
    }

    input {
      width: 100%; 
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      border: 1px solid black;
      background: #e7e9ee;
      
      font-weight: 400;
      font-size: 1rem;
      
      &::placeholder {
        color: var(--text-body);
      }
      
      & + input {
        margin-top: 1rem;
      }
    }
    
    textarea {
      width: 100%;
      height: 8rem;
      box-sizing: border-box;
      margin-top: 6px; 
      margin-bottom: 14px;
      resize: vertical;
      padding: 1rem 1.5rem;
      
      border-radius: 0.25rem;
      border: 1px solid black;
      background: #e7e9ee;
    
      font-weight: 400;
      font-size: 1rem;
    
      &::placeholder {
           color: var(--text-body);
      }
    }

   button[type="submit"] {
     width: 20rem;
     padding: 1rem 1.5rem;
     height: 4rem;
     background: var(--green);
     color: #FFF;
     border-radius: 0.25rem;
     border: 0;
     font-size: 1rem;
     margin-top: 2.5rem;
     margin-bottom: 2.5rem;
     font-weight: 600;

     transition: filter 0.2s;

     &:hover {
       filter: brightness(0.9); 
     }
   }
`