import { Link } from "react-router-dom";
import ButtonSite from "../../components/ButtonSit";
import CardSite from "../../components/CardSite";


export default function PromotionPage() {
    return (
          <>
                <section className="m-container">
                <CardSite text="Página de promoção"/>
                
                <Link to="/register-page">
                <ButtonSite text="Quero participar"/>
                </Link>
                </section>
                </>
    );
}