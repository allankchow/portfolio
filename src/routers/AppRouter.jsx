import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import WorksPage from "../pages/WorksPage";
import WorkPage from "../pages/WorkPage";

const AppRouter = () => {
    return (
        <BrowserRouter basename="/portfolio-01/">
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} /> 
                    <Route path="/:tab" element={<HomePage />} /> 
                    <Route path="/about" element={<AboutPage />} />  
                    <Route path="/works" element={<WorksPage />} />  
                    <Route path="/works/:slug" element={<WorkPage />} />  
                    {/* <Route path="*" element={<NotFoundPage />} />  */}
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
