import { Link } from "react-router-dom";
import ButtonSite from "../../components/ButtonSit";
import CardSite from "../../components/CardSite";



export default function RegisterPage() {
    return (
          <>
                <section className="m-container">
                <CardSite text="Página de registro"/>
               
                <Link to="/promotion-page"> 
                <ButtonSite text="Ver Promoção"/></Link>
                
                </section>
                </>/* quando é uma sub pasta tem que colocar o barra no link*/
    );
}