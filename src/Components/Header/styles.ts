import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 7rem;
  position: fixed;
  z-index: 5;
  background: white;
  display: flex;
  align-items: center;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
  
  /* display: grid;
  grid-template-columns: auto auto; */

`

export const Content = styled.div`
  font-size: 2rem;
  display: flex;
  margin-left: 0rem;
  padding-top: 1.5rem;
  height: auto;
  padding-left: 2rem;
  width: fit-content;
  align-content: space-between;
  
  img {
    height: auto;
    max-width: 17rem;
    margin: 2rem 0rem;
  }

  p {
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    font-family: 'Josefin Sans', sans-serif;
    color: #000080;
    
  }


  @media (max-width: 1000px) {
    
    padding: 0rem;
    
    

    p {
      color: #000080;
      align-items: bottom;
      text-align: bottom;
      justify-content: bottom;
      font-size: 80%;
      padding-right: .5rem;
    }

    img {
      height: auto;
      max-width: 6.5rem;
      margin: 2rem 0rem;
      margin: auto;
      padding-left: 0rem;
      justify-content: center;
      display: flex;
      max-width: 15rem;

    }
  }  
`
export const Menu = styled.div`
  
  @media (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 1200px) {
    p {
      font-size: 0.5rem;
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
  
  ul {
    text-align: right;

    &:last-child {
      padding-right: 1rem;

      @media (max-width: 1200px) {
      
        padding-right: .3rem;
      }
    }
  }
  
  li {
    font-size: 1.5rem;
    padding: 0rem 1.5rem;
    float: none;
    display: inline-block;
    transition: background-color .4s;
    &:hover {
      background-color: #44B1FF;
    }
    @media (max-width: 1620px) {
      font-size: 1.25rem;
      padding: 0rem .9rem;
    }
  }

  
  a {
    display: inline-block;
    text-decoration: none;
    color: black;
    padding: 0.3rem;
  }
`
