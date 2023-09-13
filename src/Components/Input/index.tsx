

import {
    Container,
    Label 

} from './styled'


export const Input = () => {
    return (
      <Container>
        <Label htmlFor="my-input">Name:</Label>
        <Input id="my-input" type="text" />
      </Container>
    );
  };