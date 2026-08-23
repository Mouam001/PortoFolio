import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/background.css";
import "../../styles/layout.css";

export default function MainLayoutView({children}) {
    return (
        <>
            <Header/>
            <main className="app-main">{children}</main>
            <Footer/>
        </>
    );
}
