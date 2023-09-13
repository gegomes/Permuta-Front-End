
import { Header } from '../../Components/Header'


import {
    Container,
    Main,
    Content,
    CardButtonText,
    ButtomCadastro,
    Card,
    Box
} from './styled'


export function Dashboard() {

    return (
        <Container>
            <Header />
            <Main>
                <Content>
                    <CardButtonText>
                        <h1>Imovéis com Permutas</h1>
                        <ButtomCadastro>Novo Imovél</ButtomCadastro>
                    </CardButtonText>
                    <Card>
                        <Box>
                            <h2>Edificio  alegre</h2>
                            <p>Codigo: CA58455</p>
                            <p>Endereço: Vila nova Campinas-sp</p>
                            <p>Propietário: Ana Paula</p>
                            <p>Celular: (19) 9 81057845</p>
                        </Box>
                        <Box>
                            <h2>Edificio  alegre</h2>
                            <p>Codigo: CA58455</p>
                            <p>Endereço: Vila nova Campinas-sp</p>
                            <p>Propietário: Ana Paula</p>
                            <p>Celular: (19) 9 81057845</p>
                        </Box>
                        <Box>
                            <h2>Edificio  alegre</h2>
                            <p>Codigo: CA58455</p>
                            <p>Endereço: Vila nova Campinas-sp</p>
                            <p>Propietário: Ana Paula</p>
                            <p>Celular: (19) 9 81057845</p>
                        </Box>
                        <Box>
                            <h2>Edificio alegre</h2>
                            <p>Codigo: CA58455</p>
                            <p>Endereço: Vila nova Campinas-sp</p>
                            <p>Propietário: Ana Paula</p>
                            <p>Celular: (19) 9 81057845</p>
                        </Box><Box>
                            <h2>Edificio alegre</h2>
                            <p>Codigo: CA58455</p>
                            <p>Endereço: Vila nova Campinas-sp</p>
                            <p>Propietário: Ana Paula</p>
                            <p>Celular: (19) 9 81057845</p>
                        </Box>
                    </Card>
                </Content>
            </Main>
        </Container>
    )
}