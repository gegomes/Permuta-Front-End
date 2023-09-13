import { useNavigate } from "react-router-dom";
import { Header } from '../../Components/HeaderLogin'

import { useForm } from 'react-hook-form'


import {
    Container,
    Title,
    Content,
    Formulary,
    Input,
    Label,
    Button,
} from './styled'
import { Api } from '../../services/api'
import { toast } from 'react-toastify'

interface ValuesProps {
    name: string
    email: string
    password: string
}[]


export function CreateUser() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ValuesProps>()
    const navigate = useNavigate();

    async function handleCreateUser({ name, email, password }: ValuesProps) {

        const data = {
            name, email, password

        }

        try {

            // conecxao sucesso 

            const response = await Api.post("/users/register", data)
            if (response.data.error === 'false') {
                toast.error("Não foi possivel criar o usuário")
                // redireciona para tela de login 
            }
            navigate("/")
            reset()

        } catch (error:any) {
            toast.error(`Verifique sua conecxão com o servidor, ${error.message}`)

        }

    }

    return (
        <>
            <Header />
            <Container>
                <Title>Crie sua conta</Title>
                <Content>
                    <Formulary onSubmit={handleSubmit(handleCreateUser)} action=''>
                        <Label htmlFor='name'>Informe seu nome</Label>
                        <Input 
                            // {...register('name', { required: true })}
                            {...register("name", { required: true,  minLength:3  ,maxLength: 20 })}

                        />
                        {errors.name && (
                            <p>{"Informe no minímo 3 caracteres para validar o nome "}</p>
                        )}
                        <Label htmlFor='email'>Informe seu e-mail</Label>
                        <Input
                            
                            {...register('email', {
                                required: true,
                                pattern:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

                            })}
                        />
                         {
                            errors.email && <p>E-mail incorreto </p>
                        }
                        <Label htmlFor='password'>Informe sua senha </Label>
                        <Input
                            type='password'
                            {...register("password", { required: true,  minLength:3})}
                        />
                        {errors.password && (
                            <p>{"Informe no minímo 3 caracteres para validar a senha"}</p>
                        )}
                        {/* <Label htmlFor='password'>Confirme sua senha</Label>
                        <Input
                            type='password'
                            {...register('password', { required: true })}
                        />
                        {errors.password && (
                            <p>{"Senha não confere"}</p>
                        )} */}
                        <Button type='submit'>Cadastrar</Button>
                    </Formulary>
                </Content>
            </Container>
        </>
    )
}