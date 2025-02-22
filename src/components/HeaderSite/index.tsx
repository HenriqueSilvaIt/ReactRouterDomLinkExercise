import { Link } from 'react-router-dom';
import './style.css'

export default function HeaderSite() {
    return (
        <header>
            <nav className="m-container">
            <Link to="/"> 
                <div>
                    <h1>MeuSite</h1>
                </div>
                </Link>

            </nav>
        </header>
    );
}