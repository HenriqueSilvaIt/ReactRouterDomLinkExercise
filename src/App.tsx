import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PromotionPage from "./routes/PromotionPage";
import RegisterPage from "./routes/RegisterPage";
import Home from "./routes/Home";
import HomeContent from "./routes/Home/HomeContent";

export default  function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
            <Route index element={<HomeContent/>} />
            <Route path="promotion-page" element={<PromotionPage/>} />
            <Route path="register-page" element={<RegisterPage/>}/>
            <Route path="promotion-page" element={<PromotionPage/>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

