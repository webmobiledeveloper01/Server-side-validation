import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface TextInputProps {
    label: string;
    name: string;
    type?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, name, type = 'text' }) => {
    return (
        <>
        <div>
            <label htmlFor={name}>{label}:</label>
            <Field type={type} name={name} />
        </div>
        <div>
            <ErrorMessage className="checkout-field-error" name={name} component="span" />
        </div>
        
        </>

    );
};

export default TextInput;