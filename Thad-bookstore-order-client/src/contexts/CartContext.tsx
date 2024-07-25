import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { BookItem, ShoppingCart } from '../types/types';
// import { ShoppingCart } from '../models/ShoppingCart';

// Define action types
type Action =
  | { type: 'ADD_BOOK'; book: BookItem }
  | { type: 'REMOVE_BOOK'; book: BookItem }
  | { type: 'UPDATE_QUANTITY'; book: BookItem; quantity: number }
  | { type: 'CLEAR_CART' };

  

// Define the initial state
const initialState: ShoppingCart = new ShoppingCart();

const storageKey = 'cart';

// Create the reducer function

const cartReducer = (state: ShoppingCart, action: Action): ShoppingCart => {
  switch (action.type) {
    case 'ADD_BOOK':
      console.log('Add----');
      state.addBook(action.book);
      localStorage.setItem('cart', JSON.stringify(Object.assign(new ShoppingCart(), { ...state })));
      return Object.assign(new ShoppingCart(), { ...state });
    case 'REMOVE_BOOK':
      console.log('REMOVE----');
      state.removeBook(action.book);
      localStorage.setItem('cart', JSON.stringify(Object.assign(new ShoppingCart(), { ...state })));
      return Object.assign(new ShoppingCart(), { ...state });
    case 'UPDATE_QUANTITY':
      console.log('UPDATE----');
      state.update(action.book, action.quantity);
      localStorage.setItem('cart', JSON.stringify(Object.assign(new ShoppingCart(), { ...state })));
      return Object.assign(new ShoppingCart(), { ...state });
    case 'CLEAR_CART':
      console.log('CLEAR----');
      state.clear();
      localStorage.setItem('cart', JSON.stringify(Object.assign(new ShoppingCart(), { ...state })));
      return Object.assign(new ShoppingCart(), { ...state });
    default:
      return state;
  }
};

// Create context
interface CartContextType {
  cart: ShoppingCart;
  dispatch: React.Dispatch<Action>;
}

const CartContext = createContext<CartContextType>({ cart: initialState, dispatch: () => null });

// Create provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  
  const [cart, dispatch] = useReducer(cartReducer, initialState,
    (initialCartState): ShoppingCart => {
    try {
        const storageValue = localStorage.getItem(storageKey);
        console.log('storageValue -- ', storageValue);
        if(storageValue !='' && storageValue != null) {
          console.log('storageValue -- ', storageValue);
          //const storedCart = new ShoppingCart();
          const storedCart = JSON.parse(localStorage.getItem(storageKey) || '[]');
          console.log('storedCart -- ', storedCart);
        
          return Object.assign(new ShoppingCart(), { ...storedCart });
        }
        return initialCartState;
        
      } catch (error) {
        console.log('Error parsing cart', error);
        return initialCartState;
      }
    }
  );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create custom hook to use shopping cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


  
