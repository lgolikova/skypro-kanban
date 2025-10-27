import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", textAlign: "center" }}>
            <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>404</h1>
            <p style={{ fontSize: "20px", marginBottom: "30px" }}>
                Такой страницы не существует
            </p>
            <Link
                to="/"
                style={{
                fontSize: "18px",
                color: "#565eef",
                textDecoration: "underline",
                }}
            >
                Вернуться на главную
            </Link>
        </div>
    );
}

export default NotFoundPage;