import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";

export default function App() {
    return (
        <MainLayout>
            <section className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">
                    <Home />
                    <About/>
                </h1>
            </section>
        </MainLayout>
    );
}
