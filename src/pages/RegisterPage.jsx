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

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

    function Register({ setIsAuth }) {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            password: "",
        });

        const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (setIsAuth) setIsAuth(true);

        navigate("/");
    };

        return (
        <Wrapper>
            <Container>
                <Modal>
                    <ModalBlock>
                        <ModalTitle>
                            <h2>Регистрация</h2>
                        </ModalTitle>
                        <Form onSubmit={handleSubmit}>
                            <Input type="text" name="name" placeholder="Имя" value={formData.name}
                            onChange={handleChange}
                            required/>
                            <Input type="text" name="email" placeholder="Эл.почта"
                                value={formData.email}
                                onChange={handleChange}
                                required/>
                            <Input
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            />
                            <Button type="submit">Зарегистрироваться</Button>
                            <FormGroup>
                                <p>Уже есть аккаунт?</p>
                                <Link to="/login">Войдите здесь</Link>
                            </FormGroup>
                        </Form>
                    </ModalBlock>
                </Modal>
            </Container>
        </Wrapper>
        );
    }

export default Register;