import CardSite from '../../../components/CardSite'; 
import ButtonSite from '../../../components/ButtonSit';
import { Link } from 'react-router-dom';

export default function HomeContent() {
    return ( /* tem que colcoar o fragment <> </ quando tem mais de um component */
        <>
        <section className="m-container">
        <CardSite text="Página inicial"/>
        <Link to="promotion-page">
        <ButtonSite text="Ver promoção"/>
        </Link>
        </section>
        </>
    );
}