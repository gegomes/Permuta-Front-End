
import {
    Container,
    Logo,

} from './styled'

import { SignOut } from 'phosphor-react'

import logoHIT from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

export const Header = () => {

    const { logout } = useContext(AuthContext)
    //logout 

    const handleLogout = () => {
        logout()
    }

    return (
        <Container>
            <Logo src={logoHIT} alt="logotipo" />

            <nav onClick={() => {
                 if (window.confirm("Realmente deseja sair?")) handleLogout()
            }}>
                <NavLink
                    to='/' title='login'>
                    <SignOut size={24} />
                    Sair
                </NavLink>
            </nav>
        </Container>
    )
}