package business.order;

import api.ApiException;
import business.book.Book;
import business.book.BookDao;
import business.cart.ShoppingCart;
import business.customer.CustomerForm;

import java.time.DateTimeException;
import java.time.YearMonth;
import java.util.Date;

public class DefaultOrderService implements OrderService {

	private BookDao bookDao;

	public void setBookDao(BookDao bookDao) {
		this.bookDao = bookDao;
	}

	@Override
	public OrderDetails getOrderDetails(long orderId) {
		// NOTE: THIS METHOD PROVIDED NEXT PROJECT
		return null;
	}

	@Override
    public long placeOrder(CustomerForm customerForm, ShoppingCart cart) {

		validateCustomer(customerForm);
		validateCart(cart);

		// NOTE: MORE CODE PROVIDED NEXT PROJECT

		return -1;
	}


	private void validateCustomer(CustomerForm customerForm) {

    	String name = customerForm.getName();
		String address = customerForm.getAddress();
		String phone = customerForm.getPhone();
		String email = customerForm.getEmail();
		String ccNumber = customerForm.getCcNumber();
		String ccExpiryMonth = 	customerForm.getCcExpiryMonth();
		String ccExpiryYear = customerForm.getCcExpiryYear();

		if (name == null || name.equals("") || name.length() > 45 || name.length() < 4) {
			//throw new ApiException.InvalidParameter("Invalid name field");
			throw new ApiException.ValidationFailure(name, "Invalid name field");
		}

		if (address == null || address.equals("") || address.length() > 45 || address.length() < 4) {
			//throw new ApiException.InvalidParameter("Invalid name field");
			throw new ApiException.ValidationFailure(address, "Invalid address field");
		}

		if (phone == null || phone.equals("")) {
			//throw new ApiException.InvalidParameter("Invalid name field");
			throw new ApiException.ValidationFailure(phone, "Invalid phone number field");
		}
		String normalPhone = phone.replace("[^0-9]", "");
		if (normalPhone.length() != 10) {
			throw new ApiException.ValidationFailure(normalPhone, "Invalid phone number field");
		}

		if (email == null || email.equals("") || email.contains(" ") || !email.contains("@") || email.endsWith(".")) {
			//throw new ApiException.InvalidParameter("Invalid name field");
			throw new ApiException.ValidationFailure(email, "Invalid email field");
		}

		if (ccNumber == null || ccNumber.equals("")) {
			//throw new ApiException.InvalidParameter("Invalid name field");
			throw new ApiException.ValidationFailure(ccNumber, "Invalid card number field");
		}
		String normalCcNumber = ccNumber.replace("[^0-9]", "");
		if (normalCcNumber.length() < 14 || normalCcNumber.length() > 16) {
			throw new ApiException.ValidationFailure(normalCcNumber, "Invalid card number field");
		}

		if (expiryDateIsInvalid(customerForm.getCcExpiryMonth(), customerForm.getCcExpiryYear())) {
			//throw new ApiException.InvalidParameter("Invalid expiry date");
			throw new ApiException.ValidationFailure("Please enter a valid expiration date.");
		}
	}

	private boolean expiryDateIsInvalid(String ccExpiryMonth, String ccExpiryYear) {

		// TODO: return true when the provided month/year is before the current month/yeaR
		// HINT: Use Integer.parseInt and the YearMonth class
		// Get the current year and month
		YearMonth currentYearMonth = YearMonth.now();
		// Extract the year and month
		int currentYear = currentYearMonth.getYear();
		int currentMonth = currentYearMonth.getMonthValue();

        return Integer.parseInt(ccExpiryYear) < currentYear || Integer.parseInt(ccExpiryMonth) < currentMonth;

    }

	private void validateCart(ShoppingCart cart) {

		if (cart.getItems().size() <= 0) {
			//throw new ApiException.InvalidParameter("Cart is empty.");
			throw new ApiException.ValidationFailure("Cart is empty.");
		}

		cart.getItems().forEach(item-> {
			if (item.getQuantity() < 0 || item.getQuantity() > 99) {
				//throw new ApiException.InvalidParameter("Invalid quantity");
				throw new ApiException.ValidationFailure("Invalid quantity");
			}
			Book databaseBook = bookDao.findByBookId(item.getBookId());
			// TODO: complete the required validations
			if (item.getBookForm().getPrice() != databaseBook.price()) {
				throw new ApiException.ValidationFailure("Invalid price");
			}
			if (item.getBookForm().getCategoryId() != databaseBook.categoryId()) {
				throw new ApiException.ValidationFailure("Invalid category");
			}
		});
	}

}
