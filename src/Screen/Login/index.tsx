
import {
    Container,
    Form,
    Input,
    Buttom,
    Title,

} from './styled'
import { Header } from '../../Components/HeaderLogin'

import { NavLink, Navigate } from 'react-router-dom';

import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useAuth } from '../../Context/AuthProvider/auth';


interface ValuesProps {
    email: string
    password: string
}[]


export function Login() {

    // const notify = () => toast('Error Login inválido!');

    const { authenticate } = useContext(AuthContext)
    const { token } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ValuesProps>()

    const handleLogin = async ({ email, password }: ValuesProps) => {
        const data = {
            email, password
        }

        try {
            await authenticate(data.email, data.password)

            return (
                <NavLink to='/dashboard'></NavLink>
            )
        } catch (error) {
            console.log(error, 'error')
        }
        reset()
    };
    if (token != undefined) {
        return <Navigate to="/dashboard" />
    } else {
        return (
            <>
                <Header />
                <Container>

                    <Form onSubmit={handleSubmit(handleLogin)}>
                        <Title>Login</Title>
                        <Input
                            placeholder='Informe o e-mail'
                            type='email'
                            {...register('email',  {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

                            })}
                        />
                        {
                            errors.email && <p>E-mail incorreto </p>
                        }
                        <Input
                            placeholder='Informe a senha'
                            type='password'
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <p>{"Por favor digite a senha"}</p>
                        )}

                        <Buttom type='submit'>Entrar</Buttom>
                        <nav> Registrar-se:
                            
                            <NavLink
                                to='/creatuser'>{'\t'}clique aqui
                            </NavLink>
                        </nav>
                    </Form>
                </Container>
            </>
        )

    }
}
