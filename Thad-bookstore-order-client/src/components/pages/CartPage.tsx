import CartTable from "../CartTable";
import { useCart } from '../../contexts/CartContext'; // Import the custom hook 
import { useNavigate } from "react-router-dom";
import { setNavLink } from "../../services/utils";

export default function CartPage() {
    const { cart } = useCart();
    const navigate = useNavigate();
    const storageCategoryName = localStorage.getItem('categoryName') || '';
    return (

        cart.numberOfItems == 0 ?
        <div className="cart-page">
            <div style={{textAlign: "center", fontSize: '30px', padding: '30px'}}>your cart is empty</div>
            <div style={{textAlign: 'center', margin: '20px 0'}}>
                <span className="btn1" onClick={() => { navigate(`/category/${setNavLink(storageCategoryName)}`)}}>Continue shopping</span>
            </div>
        </div>
        :
        <div className="cart-page">
            <h3 style={{paddingLeft: '10px'}}>Your Cart</h3>
            <div style={{paddingLeft: '10px'}}>items: { cart.numberOfItems }</div>
            {/* <div style={{padding: '10px 0'}}>
                
            </div> */}
            <div style={{textAlign: 'center', margin: '20px 0'}}>
                <span className="btn1" onClick={() => { navigate(`/category/${setNavLink(storageCategoryName)}`)}}>Continue shopping</span>
                <span className="btn2" onClick={() => { navigate(`/checkout/`);}}>Proceed to checkout</span>
            </div>
            <CartTable />
            <div style={{textAlign: 'center', margin: '20px 0'}}>
                <span className="btn1" onClick={() => { navigate(`/category/${setNavLink(storageCategoryName)}`)}}>Continue shopping</span>
                <span className="btn2" onClick={() => { navigate(`/checkout/`);}}>Proceed to checkout</span>
            </div>
        </div>
    );
}
