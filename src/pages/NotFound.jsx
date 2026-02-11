import "../css/Home.css";

function NotFound() {
    return (
        <div className="home-container">
            <h1 className="home-title">404 - Page Non Trouvée</h1>
            <p className="home-subtitle">La page que vous recherchez n'existe pas.</p>
        </div>
    );
}

export default NotFound;