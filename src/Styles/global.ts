
import { createGlobalStyle } from 'styled-components'


export const GlobalStyled = createGlobalStyle` 

    *{
        margin:0;
        padding:0;
        box-sizing: border-box,
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px  ${props => props.theme.colors.shape_dark};
    }

    body{
         background-color: ${props => props.theme.colors.shape_dark}; 
         color: ${props => props.theme.colors.shape};
    }
    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    a {
        text-decoration: none;
        background-color: transparent;
        border: none;
    }
`;