import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/routes.jsx";

export default function App() {
    return (
        <BrowserRouter basename="/PortoFolio">
            <MainLayout>
                <AppRoutes/>
            </MainLayout>
        </BrowserRouter>
    );
}
