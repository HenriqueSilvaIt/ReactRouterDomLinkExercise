import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import './style.css'

export default function Subscription() {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="title-page">
                    <h2>Faça sua incrição!</h2>
                    </div>
                    <div className="mt30 mb30">
                        <Card title="Página de inscrição" />
                    </div>
                    <div className="dflex">
                        <Link to="/">
                            <Button text="Ver promoção" />
                        </Link>

                    </div>
                </div>
            </section>
        </main>
    );
}
