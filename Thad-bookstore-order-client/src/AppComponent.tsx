import { FC, useState, useEffect } from "react";
import axios from 'axios';
import { apiUrl } from "./services/utils";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/global.css';
import Home from './components/pages/Home/Home';
import Category from './components/pages/Category/Category';
import Layout from './components/Layout/Layout';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NewReleases from './components/pages/NewReleases/NewReleases';
import BestSeller from './components/pages/BestSeller/BestSeller';
import TrendingBooks from './components/pages/TrendingBooks/TrendingBooks';
import CartPage from './components/pages/CartPage';
import Confirmation from './components/pages/Confirmation';
import DataService from "./services/data";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import '@fotawesome/react-fontawesome'
import { BookItem } from "./types/types";
import { useCategoryContext } from './contexts/CategoryContext'; // Import the custom hook 
import CheckoutPage from "./components/pages/CheckoutPage";
// import AppHeader from "./components/Header/AppHeader";
// import WelcomePage from "./components/pages/Home/WelcomePage"
// import CategoryPage from "./components/pages/Category/CategoryPage";

const AppComponent: FC = () => {
  // const [categories, setCategories] = useState<CategoryItem[]>([]);
  const { categories } = useCategoryContext(); // Use the custom hook to get categories
  const [books, setBooks] = useState<BookItem[]>([]);
  const [allBooks, setAllBooks] = useState<BookItem[]>([]);

  const [categoryName, setCategoryName] = useState('');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");
  const [limit, setLimit] = useState(4);

  const handleCategoryName = (categoryName: string) => {
    console.log("categoryName--" , categoryName);
    if(categoryName == undefined){
      let ctgBooks: BookItem[];
      axios.get(`${apiUrl}/books`)
      .then((result) => {
        ctgBooks = result.data;
        const filterbooks = DataService.getAllBooks(ctgBooks, limit, page, sort);
        setBooks(filterbooks);
      })
    }
    else {
      const category = DataService.getCategoryByName(categories, categoryName);

      console.log("category--" , category);
        if (!category) {
            setBooks(DataService.getAllBooks(books, limit, page, sort));
        } else {
            let ctgBooks: BookItem[];
            axios.get(`${apiUrl}/categories/name/${categoryName}/books`)
               .then((result) => {
                  ctgBooks = result.data;
                  const filterbooks = DataService.getBooksByCategory(ctgBooks, category.categoryId, limit, page, sort);
                  setBooks(filterbooks);
                })
               .catch(console.error);
        }
      setCategoryName(categoryName);
    }
  }

  const handlePage = (page: number) => {

    console.log("page----", page);
    setPage(page);
  }

  const handleSort = (sort: string) => {
    setSort(sort);
  }

  const handleLimit = (limit: number) => {
    setLimit(limit);
  }

  useEffect(() => {
    // axios.get(`${apiUrl}/categories`)
    //   .then((result) => setCategories(result.data))
    //   .catch(console.error);
    
    axios.get(`${apiUrl}/books`)
      .then((result) => {
        setBooks(result.data);
        setAllBooks(result.data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {  
    if (categoryName == '' || categoryName == undefined) {
      let ctgBooks: BookItem[];
      axios.get(`${apiUrl}/books`)
        .then((result) => {
          ctgBooks = result.data;
          const filterbooks = DataService.getAllBooks(ctgBooks, limit, page, sort);
          setBooks(filterbooks);
        })
        .catch(console.error);

    }
    else {
      console.log('categories ----------------- ', categories); 
        console.log('categoryName --------------------', categoryName);
      
        const category = DataService.getCategoryByName(categories, categoryName);
        if (!category) {
          
            let ctgBooks: BookItem[];
            axios.get(`${apiUrl}/books`)
            .then((result) => {
              ctgBooks = result.data;
              const filterbooks = DataService.getAllBooks(ctgBooks, limit, page, sort);
              setBooks(filterbooks);
            })
            .catch(console.error);

        } else {
            // setCategory(category);
            let ctgBooks: BookItem[];
            axios.get(`${apiUrl}/books`)
            .then((result) => {
              ctgBooks = result.data;
              const filterbooks = DataService.getBooksByCategory(ctgBooks, category.categoryId, limit, page, sort);
              setBooks(filterbooks);
            })
            .catch(console.error);

        }  
        
    }
  }, [categories, limit, page, sort]);

  return (
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home books = {allBooks}/>} />
            <Route path="category" element={<Category
              books = {books} page = {page} 
              sort = {sort} limit = {limit} 
              categoryName= {categoryName}
              onPageChange = {handlePage} 
              onLimitChange={handleLimit}
              onSortChange={handleSort} onCategoryNameChange={handleCategoryName}/>} />
            <Route path="category/:ctgName" element={<Category
              books = {books} page = {page} 
              sort = {sort} limit = {limit}
              categoryName= {categoryName}
              onPageChange={handlePage}  
              onLimitChange={handleLimit} 
              onSortChange={handleSort} onCategoryNameChange={handleCategoryName}/>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="new-releases" element={<NewReleases />} />
            <Route path="best-sellers" element={<BestSeller />} />
            <Route path="trending-books" element={<TrendingBooks />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
        </Routes>
      </Router>
  );
};
export default AppComponent;
