import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MainLayoutView({ children }) {
    return (
        <>
            <Header />
            <main className="pt-[88px]">{children}</main>
            <Footer />
        </>
    );
}
