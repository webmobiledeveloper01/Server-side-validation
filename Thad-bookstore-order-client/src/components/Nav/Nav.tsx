import { useState } from "react";
import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";
import { setNavLink } from "../../services/utils";
import { useCategoryContext } from '../../contexts/CategoryContext'; // Import the custom hook 

const Nav = () => {
    //const { categories } = props;
    const { categories } = useCategoryContext(); // Use the custom hook to get categories 
    const [currentActive, setCurrentActive] = useState(0);
    const navigate = useNavigate();

    return (
        <nav className={styles.navigation}>
            <div className={styles.nav_container}>
                <ul>
                    <li className={currentActive === 0 ? styles.active : ""}
                        onClick={() => {
                            setCurrentActive(0);
                            navigate(`/`);
                        }}
                    ><span>Home</span></li>
                    <li
                        className={currentActive === 1 ? styles.active : ""}
                        onClick={() => {
                            setCurrentActive(1);
                            navigate(`/about`);
                        }}
                    ><span>About Us</span></li>
                    <li className={currentActive === 2 ? `${styles.dropdown} ${styles.active}` : styles.dropdown}
                    ><span>Categories</span>
                        <ul className={styles.submenu}>
                            {categories.map((category) => (
                                <li
                                    key={category.categoryId}
                                    onClick={() => {
                                        setCurrentActive(2);
                                        localStorage.setItem('categoryName', category.name);
                                        navigate(`/category/${setNavLink(category.name)}`);
                                    }}
                                ><span>{category.name}</span></li>
                            ))}

                        </ul>
                    </li>
                    <li
                        className={currentActive === 3 ? styles.active : ""}
                        onClick={() => {
                            setCurrentActive(3);
                            navigate(`/contact`);
                        }}
                    ><span>Contact Us</span></li>
                </ul>
                <ul>
                    <li
                        className={currentActive === 4 ? styles.active : ""}
                        onClick={() => {
                            setCurrentActive(4);
                            navigate(`/new-releases`);
                        }}
                    ><span>New Releases</span></li>
                    <li
                        className={currentActive === 5 ? styles.active : ""}
                        onClick={() => {
                            setCurrentActive(5);
                            navigate(`/best-sellers`);
                        }}
                    ><span>Best Seller</span></li>
                    <li
                        className={currentActive === 6 ? styles.active : ""}
                        onClick={() => {
                            setCurrentActive(6);
                            navigate(`/trending-books`);
                        }}
                    ><span>Trending Books</span></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;