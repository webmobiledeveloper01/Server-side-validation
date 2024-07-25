import "./CartTable.css";

import { BookItem, ShoppingCartItem } from "../types/types";

import { bookImagePrefix, asDollarsAndCents } from "../services/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMinusCircle } from "@fortawesome/free-solid-svg-icons/faMinusCircle";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { useCart } from '../contexts/CartContext'; // Import the custom hook 
import { getSlug } from "../services/utils";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function CartTable() {

   // Use the custom hook to get cart 
  const { cart, dispatch } = useCart();
  console.log(cart.numberOfItems);

  const handleAddToCart = (item: BookItem) => {
    dispatch({ type: 'ADD_BOOK', book: item });
  };
  
  const handleRemoveToCart = (item: BookItem) => {
    dispatch({ type: 'REMOVE_BOOK', book: item });
  };

  const handleClearToCart = () => {
    dispatch({ type: 'CLEAR_CART'});
  };

  const cartBookQuantity = (item: ShoppingCartItem) => (
    <div className="cart-book-quantity">
      <button className="icon-button inc-button" onClick={() => {handleAddToCart(item.book);}}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
      <span className="quantity">{item.quantity}</span>&nbsp;
      <button className="icon-button dec-button" onClick={() => {handleRemoveToCart(item.book);}}>
        <FontAwesomeIcon icon={faMinusCircle} />
      </button>
    </div>
  );

  const cartBookImage = (book: BookItem) => (
    <div className="cart-book-image">
      <img
        className="cart"
        src={`${bookImagePrefix}${bookImageFileName(book)}`}
        alt={book.title}
      />
    </div>
  );

  const bookImageFileName = function(book: BookItem):string {
    return `${getSlug(book.title)}.gif`;
  };

  const cartTableRows = cart.items.map((item) => (
  <>
    <li className="grid-book-row" key={item.book.title}>
      {cartBookImage(item.book)}
      <div className="cart-book-title">{item.book.title}</div>
      <div className="cart-book-price">{asDollarsAndCents(item.book.price*100)}</div>
      {cartBookQuantity(item)}
      <div className="cart-book-subtotal">
        {asDollarsAndCents(item.book.price * item.quantity * 100)}
      </div>
    </li>
    <div className="line-sep"></div>
  </>
  ));

  return (
      
    <div className="cart-table">
      <div className="cart-clear-icon">
        <FontAwesomeIcon icon={faXmark} style={{cursor:"pointer"}} title="Clear Cart" onClick={() => {handleClearToCart();}}/>
      </div>
      <ul className="cart2">
        <li className="table-heading">
          <div className="heading-book">Book</div>
          <div className="heading-price">Price</div>
          <div className="heading-quantity">Quantity</div>
          <div className="heading-subtotal">Amount</div>
        </li>
        {cartTableRows}
        <li className="grid-book-row">
          <div className="cart-book-image"></div>
          <div className="cart-book-title"></div>
          <div className="cart-book-price"></div>
          <div>Total</div>
          <div className="cart-book-total">
            {asDollarsAndCents(cart.subtotal * 100)}
          </div>
        </li>
      </ul>
    </div>
    
  );
}






export default CartTable;
