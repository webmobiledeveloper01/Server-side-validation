import { FC } from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer: FC = () => {
    const navigate = useNavigate();
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="outerRow">
                    <div className={styles.footerLeft}>
                        <img src={`${import.meta.env.BASE_URL}/site-images/logo.svg`} />
                        <p>© NOVA Book store</p>
                    </div>
                    <div className={styles.footerRight}>
                        <div className="col">
                            <h4>Quick Link</h4>
                            <ul>
                                <li
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                >Home</li>
                                <li
                                    onClick={() => {
                                        navigate("/about");
                                    }}
                                >About Us</li>
                                <li
                                    onClick={() => {
                                        navigate("/category");
                                    }}
                                >Categories</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Help</h4>
                            <ul>
                                <li>Support</li>
                                <li>Troubleshooting</li>
                                <li>Status</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Contact Us</h4>
                            <Link to="mailto:info@novabookstore"><i className="icon-envelope-alt"></i>info@novabookstore</Link>
                            <ul className={styles.socialMedia}>
                                <li><Link to="#"><img src={`${import.meta.env.BASE_URL}/site-images/facebook.svg`} /></Link></li>
                                <li><Link to="#"><img src={`${import.meta.env.BASE_URL}/site-images/twitter.svg`} /></Link></li>
                                <li><Link to="#"><img src={`${import.meta.env.BASE_URL}/site-images/insta.svg`} /></Link></li>
                                <li><Link to="#"><img src={`${import.meta.env.BASE_URL}/site-images/youtube.svg`} /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;