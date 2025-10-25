import { Link } from "react-router-dom";
import {
    Wrapper,
    Container,
    Modal,
    ModalBlock,
    ModalTitle,
    Form,
    Input,
    Button,
    FormGroup,
} from "../pages/Login.styled";

function Login() {
    return (
        <Wrapper>
            <Container>
                <Modal>
                    <ModalBlock>
                        <ModalTitle>
                        <h2>Вход</h2>
                        </ModalTitle>
                        <Form>
                            <Input type="text" name="login" placeholder="Эл. почта" />
                            <Input type="password" name="password" placeholder="Пароль" />
                            <Button type="submit">Войти</Button>
                            <FormGroup>
                                <Link to="/register">Зарегистрироваться</Link>
                            </FormGroup>
                        </Form>
                    </ModalBlock>
                </Modal>
            </Container>
        </Wrapper>
    );
}

export default Login;