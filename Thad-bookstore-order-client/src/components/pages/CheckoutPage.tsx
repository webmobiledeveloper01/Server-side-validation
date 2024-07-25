import "./CheckoutPage.css";
import { isMobilePhone, isCreditCard } from '../../services/validators';
//import { months, sleep, years } from '../utils';
//import { asDollarsAndCents } from "../utils";
import { months, sleep, years } from '../../services/utils';

import { object, string, number, ValidationError } from "yup";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { SelectInput } from "../../components/form/SelectInput"
import { TextInput } from "../../components/form/TextInput"
import { useCart } from "../../contexts/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { asDollarsAndCents } from "../../services/utils";
import { setNavLink } from "../../services/utils";
import {OrderDetails, ServerErrorResponse} from "../../types/types"
import { placeOrder } from "../../services/services";

// Create an interface named FormValues to represent the form values.
interface FormValues {
  name: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
  ccExpiryMonth: number;
  ccExpiryYear: number;
}

// Create a constant named initialValues of type FormValues and set it to an object with the following properties:
const initialValues: FormValues = {
  name: 'Steve',
  address: '123 Main St',
  phone: '4085551212',
  email: 'steve@main.com',
  ccNumber: '4444333322221111',
  ccExpiryMonth: new Date().getMonth() + 1,
  ccExpiryYear: new Date().getFullYear(),
};

// Define yearsArray as an array of years so it is evaluated only once.
// const yearsArray = years();

// Create a constant named validationSchema of type object and define the schema for the form values using the yup library.
const validationSchema = object({

  name: string()
        .required('Please provide a name.')
        .min(4, 'Name must have at least 4 letters.')
        .max(45, 'Name can have at most 45 letters'),
  address: string()
        .required('Please provide an address.')
        .min(4, 'Address must have at least 4 letters.')
        .max(45, 'Address can have at most 45 letters'),
  email: string()
        .required('Please provide an email address.')
        .email('Please provide an valid email address.'),

  ccNumber: string().required('Please provide a credit card number.')
      .test('isCreditCard', 'Please provide a valid credit card number.', value => isCreditCard(value || '')),
  phone: string().required('Please provide a phone number.')
      .test('isMobilePhone', 'Please provide a valid phone number.', value => isMobilePhone(value || '')),

  ccExpiryMonth: number(),

  ccExpiryYear: number(),
});
{/* TODO: Add more validations for these and other fields that need more validation. */}


export default function CheckoutPage() {
  
  const { cart } = useCart()
  const navigate = useNavigate();
  const storageCategoryName = localStorage.getItem('categoryName') || '';

  // Track the checkout status using a state variable.
  const [ checkoutStatus, setCheckoutStatus] = useState<string>("");
  const [serverErrorMessage, setServerErrorMessage] = useState<string>(
    "An unexpected error occurred on the server, please try again."
  );


  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {

    console.log("Submit order");
    await sleep(1000);
    const result = await validationSchema.validate(values, { abortEarly: false }).catch((err) => err);
    if (result instanceof ValidationError) {
        setCheckoutStatus('ERROR');
        actions.setSubmitting(false);
    } else {
      setCheckoutStatus('PENDING');
      const placeOrderResponse: OrderDetails | ServerErrorResponse =
        await placeOrder(cart, {
            name: values.name,
            address: values.address,
            phone: values.phone,
            email: values.email,
            ccNumber: values.ccNumber,
            ccExpiryMonth: values.ccExpiryMonth,
            ccExpiryYear: values.ccExpiryYear,
        });
      if ("error" in placeOrderResponse) {
          setCheckoutStatus("SERVER_ERROR");
          setServerErrorMessage(placeOrderResponse.message);
          console.log("Error placing order", placeOrderResponse);
      } else {
          setCheckoutStatus("OK");
          await sleep(1000);
          navigate("/confirmation");
      }

      // await sleep(1000);
      // setCheckoutStatus('OK');
      // await sleep(1000);
      // navigate('/confirmation');
    }
};

  return (
    <div className="checkout-page hero-area">
      {cart.empty && (<section className="checkout-page-body">
        <div style={{textAlign: "center", fontSize: '30px', padding: '30px'}}>your cart is empty</div>
        <div style={{textAlign: 'center', margin: '20px 0'}}>
            <span className="btn1" onClick={() => { navigate(`/category/${setNavLink(storageCategoryName)}`)}}>Continue shopping</span>
        </div>
      </section>)}

      {!cart.empty && (
        <><section className="checkout-page-body">
          <section className="checkout-page-form-and-details">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnChange={false}
              validateOnBlur={true}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div>
                    <label htmlFor="name">Name:</label>
                    <Field type="text" name="name" />
                  </div>
                  <div>
                    <ErrorMessage className="checkout-field-error" name="name" component="span" />
                  </div>


                  <div>
                    <label htmlFor="address">Address:</label>
                    <Field type="text" name="address" />
                  </div>
                  <div>
                    <ErrorMessage className="checkout-field-error" name="address" component="span" />
                  </div>

                  <TextInput label="Phone" name="phone" />
                  {/* <ErrorMessage className="checkout-field-error" name="phone" component="span"/> */}

                  <TextInput label="Email" name="email" type="email" />
                  {/* <ErrorMessage className="checkout-field-error" name="email" component="span"/> */}

                  <TextInput label="Credit Card" name="ccNumber" />

                  {/* TODO (style): Use a single label for both month and date and put the on the same line. */}
                  {/* TODO (style) For example: Exp Date: [Month] [Year], with space between month/year selectors. */}

                  <div>
                    <label style={{ marginRight: '0.5em' }}>Exp Date:</label>
                    <div style={{ marginRight: '0.5em' }}>
                      <SelectInput label="" name="ccExpiryMonth" options={months()} />
                    </div>
                    <div>
                      <SelectInput label="" name="ccExpiryYear" options={years()} />
                    </div>
                  </div>

                  {/* <div>
              <SelectInput label="Month" name="ccExpiryMonth" options={months()} />
            </div>
            <div>
              <SelectInput label=" Year" name="ccExpiryYear" options={years()} />
            </div> */}

                  {/* TODO (style): The submit button should not take up the entire width of the form. */}
                  {/* TODO (style): The submit button should be styled consistent with your own site. */}
                  <div>
                    <button type="submit" className="button btn1" disabled={isSubmitting || checkoutStatus === 'PENDING'}>
                      {isSubmitting ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Complete Purchase'}
                    </button>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <span style={{ color: 'blue' }}>Your credit card will be charged {asDollarsAndCents(cart.subtotal * 100 + cart.surcharge)}<br />({asDollarsAndCents(cart.subtotal * 100)} + {asDollarsAndCents(cart.surcharge)} shipping)</span>
                  </div>
                </Form>
              )}
            </Formik>
            {/* TODO (style): Fix error message placement so they are nearer to the correct fields. */}
            {/* TODO (style): HINT: Use another <div> and label, input, and error, and use flexbox to style. */}

            {/* TODO: Ensure you include a summary of the charges to describe what is charged when submit button is placed. */}
            {/* <img className="checkoutbg" src={`${import.meta.env.BASE_URL}/site-images/booksale.png`} alt="Book Sale" /> */}
          </section>
          <img className="checkoutbg" src={`${import.meta.env.BASE_URL}/site-images/booksale.png`} alt="Book Sale" />  
        </section>
        {checkoutStatus != '' && (
          <section className="checkoutStatusBox">
            {checkoutStatus === 'ERROR' && <div>Error: Please fix the problems above and try again.</div>}
            {checkoutStatus === 'PENDING' && <div>Processing...</div>}
            {checkoutStatus === 'OK' && <div>Order placed...</div>}
            {checkoutStatus === 'SERVER_ERROR' && serverErrorMessage}
          </section>
        )}</>
      )}
    </div>
  );
};

