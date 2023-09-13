
import styled from "styled-components";


export const Container = styled.header`
   width:100% ;
   border-bottom: 1px solid ${(props) => props.theme.colors.background_primary};


`;

export const Logo = styled.img`
    width: 6rem;
    height: 4rem;
    
    padding-left: 2rem;
`;
