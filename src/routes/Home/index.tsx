import { Outlet } from "react-router-dom";
import HeaderSite from "../../components/HeaderSite";

export default function Home() {

    return(
        <>
    <HeaderSite/>
    <Outlet/>
    </>
    );
}