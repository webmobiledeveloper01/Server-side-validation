import { FC, CSSProperties, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Slider from "react-slick";
import ProductCard from "../../ProductCard/ProductCard";
import { ReactSVG } from "react-svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BookProps } from "../../../types/types";

interface SampleArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
const SampleNextArrow = (props: SampleArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ReactSVG src={`${import.meta.env.BASE_URL}/site-images/next.svg`} className='fa-solid fa-arrow-right' />
        </div>
    );
};

const SamplePrevArrow = (props: SampleArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ReactSVG src={`${import.meta.env.BASE_URL}/site-images/prev.svg`} className='fa-solid fa-arrow-left' />
        </div>
    );
};

const Rate: FC<{ rate: number }> = ({ rate }) => {
    return (
        <div className={styles.rating}>
            {[...Array(rate)].map((_, i) => (
                <img src={`${import.meta.env.BASE_URL}/site-images/star-rate.svg`} alt="Star Rate" key={i} />
            ))}
        </div>
    );
}

const Home = (props: BookProps) => {
    const { books } = props;
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settings2 = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.bannerSection}>
                <div className={styles.bgBlock}></div>
                <div className="container">
                    <div className={styles.bannerSlider}>
                        <div className={styles.bannerLeftButton}>
                            <span className="btn">Explore Books</span>
                        </div>
                        <div className={styles.bannerRightImg}>
                            <div className="imgSlider">
                                <Slider {...settings}>
                                    <img src={`${import.meta.env.BASE_URL}/site-images/bannerimg.png`} alt="Banner Image" />
                                    <img src={`${import.meta.env.BASE_URL}/site-images/bannerimg.png`} alt="Banner Image" />
                                    <img src={`${import.meta.env.BASE_URL}/site-images/bannerimg.png`} alt="Banner Image" />
                                    <img src={`${import.meta.env.BASE_URL}/site-images/bannerimg.png`} alt="Banner Image" />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="content-padding">
                <div className="container">
                    <div className="outerRow">
                        <div className="col-half">
                            <img src={`${import.meta.env.BASE_URL}/site-images/sale.png`} alt="Sale" />
                        </div>
                        <div className="col-half">
                            <img src={`${import.meta.env.BASE_URL}/site-images/booksale.png`} alt="Book Sale" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className={styles.headingBlock}>
                        <h2>New Arrivals</h2>
                        <ul>
                            <li><Link to="#">On Sale</Link></li>
                            <li><Link to="#">Featured</Link></li>
                            <li><Link to="#">Most Viewed</Link></li>
                        </ul>
                    </div>
                    <div >
                        <Slider {...settings2} className={styles.pro_items_slider}>
                            {books.map((item) => (
                                <ProductCard item={item} key={item.bookId} />
                            ))}
                        </Slider>
                    </div>
                    <h2>Best Sellers</h2>
                    <Slider {...settings2} className={styles.pro_items_slider}>
                        {books.map((item) => (
                            <ProductCard item={item} key={item.bookId} />
                        ))}
                    </Slider>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className={styles.infoBlock}>
                        <div className={styles.iconText}>
                            <img src={`${import.meta.env.BASE_URL}/site-images/a.png`} alt="Free Delivery" />
                            <span><b>Free Delivery</b> Orders over $100</span>
                        </div>
                        <div className={styles.iconText}>
                            <img src={`${import.meta.env.BASE_URL}/site-images/b.png`} alt="Secure Payment" />
                            <span><b>Secure Payment</b> 100% Secure Payment</span>
                        </div>
                        <div className={styles.iconText}>
                            <img src={`${import.meta.env.BASE_URL}/site-images/c.png`} alt="Money Back Guarantee" />
                            <span><b>Money Back Guarantee</b> Within 30 Days</span>
                        </div>
                        <div className={styles.iconText}>
                            <img src={`${import.meta.env.BASE_URL}/site-images/d.png`} alt="24/7 Support" />
                            <span><b>24/7 Support</b> Within 1 Business Day</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonialSection content-padding">
                <div className="container">
                    <h2>Testimonial</h2>
                    <h3>Subheading to introduce testimonials</h3>
                    <div className={styles.testimonials}>
                        <div className={styles.testimonialItem}>
                            <h4>"A terrific piece of praise"</h4>
                            <Rate rate={4} />
                            <div className={styles.clientInfo}>
                                <img src={`${import.meta.env.BASE_URL}/site-images/avatar.png`} alt="Avatar" />
                                <div>
                                    <h5>Name</h5>
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.testimonialItem}>
                            <h4>"A terrific piece of praise"</h4>
                            <Rate rate={5} />
                            <div className={styles.clientInfo}>
                                <img src={`${import.meta.env.BASE_URL}/site-images/avatar.png`} alt="Avatar" />
                                <div>
                                    <h5>Name</h5>
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.testimonialItem}>
                            <h4>"A terrific piece of praise"</h4>
                            <Rate rate={5} />
                            <div className={styles.clientInfo}>
                                <img src={`${import.meta.env.BASE_URL}/site-images/avatar.png`} alt="Avatar" />
                                <div>
                                    <h5>Name</h5>
                                    <p>Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
