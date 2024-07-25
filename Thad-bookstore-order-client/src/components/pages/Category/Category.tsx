import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookItem } from "../../../types/types";
import DataService from "../../../services/data";
import styles from "./Category.module.css";
import { useNavigate } from "react-router-dom";
import { setNavLink } from "../../../services/utils";
import ProductCard from "../../ProductCard/ProductCard";
import { DataProps } from "../../../types/types";
import { useCategoryContext } from '../../../contexts/CategoryContext'; // Import the custom hook

const Category= (props: DataProps) => {

    const { categories } = useCategoryContext(); // Use the custom hook to get categories 
    const { books, page, sort, limit, onPageChange, onLimitChange, onSortChange, onCategoryNameChange } = props;
    const { ctgName } = useParams();
    // const [category, setCategory] = useState<CategoryItem | null>(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log("categoryName -- ",  ctgName);
        onCategoryNameChange(ctgName);
    }, [ctgName]);

    const onhandlePageChange = (page:number) => {
        onPageChange(page);
    }

    const onhandleLimitChange = (limit: number) => {
        onLimitChange(limit);
    }

    const onhandleSortChange = (sort: string) => {
        onSortChange(sort);
    }

    const getCountBooksByCategory = (data: BookItem[] ,categoryId: number): number => {
        return DataService.getCountBooksByCategory(data, categoryId);
    }

    const countPages = (count: number): number => {
        // if (!category) {
            return Math.ceil(DataService.getAllBooks(books).length / count) + 1;
        // } else {
        //     return Math.ceil(DataService.getBooksByCategory(books, category.categoryId, count, page, sort).length / count) + 1;
        // }
    }

    return (
        <section>
            <div className="container">
                {
                    <ul className={styles.catList}>
                        {categories.map((category) => (
                            <li key={category.categoryId}
                                onClick={() => {
                                    navigate(`/category/${setNavLink(category.name)}`);
                                }}
                            >
                                <span>{category.name} <b>({getCountBooksByCategory(books, category.categoryId)})</b></span>
                            </li>
                        ))}
                    </ul>
                }

                <div className={styles.headingBlock}>
                    <h2>{"All"}</h2>
                    <ul>
                        <li><span>Show: <b>
                            <input type="number" value={limit} onChange={(e) => {
                                if (+e.target.value < 4) {
                                    return;
                                }
                                //setLimit(+e.target.value);
                                onhandleLimitChange(+e.target.value);  
                            }}
                                step={4}
                            />
                        </b></span></li>
                        <li><span>Sort by:
                            {sort === "asc" ? <b
                                onClick={() => {
                                    //setSort("desc");
                                    onhandleSortChange("desc");
                                }}
                            > Alphabetically</b> : <b
                                onClick={() => {
                                   // setSort("asc");
                                   onhandleSortChange("asc");
                                }}
                            > Reverse Alphabetically</b>}
                        </span></li>
                    </ul>
                </div>
                <div className={styles.pro_items}>
                    {books.map((book) => (
                        <ProductCard key={book.bookId} item={book} />
                    ))}
                </div>
                <div className={styles.pagination}>
                    <span>Page No.:</span>
                    <ul>
                        {Array.from({ length: countPages(limit) }, (_, i) => i + 1).map((item) => (
                            <li key={item}
                                className={page === item ? styles.active : ""}
                                onClick={() => {
                                    //setPage(item);
                                    onhandlePageChange(item);
                                }}
                            >{item}</li>
                        ))}

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Category;