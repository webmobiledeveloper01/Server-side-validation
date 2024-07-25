import ReactDOM from 'react-dom/client';
import AppComponent from './AppComponent';
import { CategoryProvider } from './contexts/CategoryContext';
import { CartProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <CartProvider>
      <CategoryProvider>
          <AppComponent/>
      </CategoryProvider>
    </CartProvider>
  // </React.StrictMode>
);

