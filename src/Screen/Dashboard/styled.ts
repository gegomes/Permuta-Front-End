

import styled from "styled-components";

export const Container = styled.body`
    padding: 0.875rem ;
    margin: auto;
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns:  1fr; /* Three equal-width columns */
  grid-gap: 10px; /* Gap between grid items */
`;

export const Content = styled.div`
  flex: 1 ;
  padding: 1rem; /* Four items per row (25% width each) */
  margin-top: 2rem;
  display: grid;
  grid-template-columns:  1fr; /* Three equal-width columns */
  grid-gap: 10px; 

  h1{
    font-size: larger;
    font-family: ${(props) => props.theme.fonts.secondaty_500};
    line-height: 1.5;
    padding-left: 0.5rem;
    font-size: 25px;
  }
`;

export const Card = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
`;

export const Box = styled.div`
    padding-top: 1rem;
    width: 100%;
    line-height: 1.5;
    border: 0;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.BoxColor};
    h2{
        font-size: larger;
        font-family: ${(props) => props.theme.fonts.secondaty_500};
        line-height: 1.5;
        padding-left: 0.5rem;
        font-size: 100%;
        padding-bottom: 1rem;
    }
    p{
        font-size: larger;
        font-family: ${(props) => props.theme.fonts.primary_400};
        line-height: 1.5;
        padding-left: 0.5rem;
        font-size: 80%;
    }
`;

export const CardButtonText = styled.div`
    display: flex;

    justify-content: space-between;
`;

export const ButtomCadastro = styled.button`
    border: none;
     line-height: 1.5;
     background-color:  ${props => props.theme['green-500']};
     color: ${props => props.theme['buttonLogin']}; 
     cursor: pointer;
     border-radius: 8px;
     padding: 0%.5rem;
     &:hover{
          background-color: ${(props) => props.theme.colors.hoverButtom};
     }
`;

