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
import { useState, useContext } from "react";
import { signUp } from "../../src/services/auth";
import { AuthContext } from "../../src/context/AuthContext";

function Register() {
    const [formData, setFormData] = useState({ name: "", login: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await signUp(formData);

            const userInfo = {
                user: {
                    name: response.name,
                    login: response.login,
                    imageUrl: response.imageUrl || "",
                    _id: response._id,
                },
                token: response.token,
            };

            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            setUser(userInfo);

            navigate("/");
        } catch (err) {
            console.error(err);
            setError(err.message || "Не удалось зарегистрироваться");
        }
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
                            <Input
                                type="text"
                                name="name"
                                placeholder="Имя"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="text"
                                name="login"
                                placeholder="Эл.почта"
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
                            <Button type="submit">Зарегистрироваться</Button>
                            {error && <p style={{ color: "red" }}>{error}</p>}
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
