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

    function Register() {
        return (
        <Wrapper>
            <Container>
                <Modal>
                    <ModalBlock>
                        <ModalTitle>
                            <h2>Регистрация</h2>
                        </ModalTitle>
                        <Form>
                            <Input type="text" name="login" placeholder="Имя" />
                            <Input type="text" name="email" placeholder="Эл.почта" />
                            <Input
                            type="password"
                            placeholder="Пароль"
                            />
                            <Button type="submit">Зарегистрироваться</Button>
                            <FormGroup>
                                <p>Уже есть аккаунт?</p>
                                <a href="/login">Войдите здесь</a>
                            </FormGroup>
                        </Form>
                    </ModalBlock>
                </Modal>
            </Container>
        </Wrapper>
        );
    }

export default Register;