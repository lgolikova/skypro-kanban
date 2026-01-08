import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { signIn } from "../services/auth";
import { AuthContext } from "../context/AuthContext";

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
} from "./Login.styled";

function Login() {
    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const userData = await signIn(formData);

            login(userData);

            navigate("/", { replace: true });
        } catch (err) {
            setError(err.message || "Ошибка авторизации");
        }
    };

    return (
        <Wrapper>
            <Container>
                <Modal>
                    <ModalBlock>
                        <ModalTitle>
                            <h2>Вход</h2>
                        </ModalTitle>

                        <Form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="login"
                                placeholder="Эл. почта"
                                value={formData.login}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <Button type="submit">Войти</Button>

                            {error && (
                                <p style={{ color: "red", marginTop: "10px" }}>
                                    {error}
                                </p>
                            )}

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
