
import{
    Container, 
    Logo,

} from './styled'

import logoHIT from '../../assets/logo.png'

export const Header = () => {
    return(
        <Container>
             <Logo src={logoHIT} alt="logotipo" />
        </Container>
    )
}