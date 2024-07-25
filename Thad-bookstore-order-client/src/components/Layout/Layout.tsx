import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Layout = ()  => {
    // const { categories } = props;
    return (
        <main className={styles.main}>
            <Header />
            <Nav/>
            <Outlet />
            <Footer />
        </main>
    );
};

export default Layout;