import axios, { AxiosResponse } from 'axios'; 
import { CategoryItem, ShoppingCart, CustomerForm, OrderDetails, ServerErrorResponse } from '../types/types'; 

const apiUrl = 
  `${location.protocol}//${location.hostname}:` + 
  `${location.port === '5173' ? '8080' : location.port}` + 
  `${import.meta.env.BASE_URL}/api`

export const fetchCategories = async (): Promise<CategoryItem[]> => { 
  const response = await axios.get(`${apiUrl}/categories`); 
  return response.data as CategoryItem[]; 
};

// add a method fetchBooksByCategoryName that takes a categoryName and requests book items
export async function placeOrder(
  cart: ShoppingCart,
  customerForm: CustomerForm
): Promise<OrderDetails | ServerErrorResponse> {
  const order = { cart: cart, customerForm: customerForm };
  console.log(JSON.stringify(order));
  try {
      const response: AxiosResponse<OrderDetails> = await axios.post(
          `${apiUrl}/orders`,
          order,
          {
              withCredentials: true,
              headers: {
              "Content-Type": "application/json",
          },
      }

  );

  return response.data;
  } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
          // Handle non-200 status codes
          const serverErrorResponse: ServerErrorResponse = error.response.data;
          return serverErrorResponse;
      } else {
          // Handle unexpected errors
          throw new Error("An unexpected error occurred");
      }
  }

}
