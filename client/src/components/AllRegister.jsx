

import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import './Register.css'

// AllRegister component definition
const AllRegister = () => {
    // Retrieve the 'category' from the URL parameters
    let { category } = useParams();  

    // Determine the initial form values based on the category
    const getInitialValues = () => {
        if (category === 'employee') {
            return {
                name: '',
                employeeId: '',
                securityQuestion: '',
                email: '',
                mobileNumber: ''
            };
        } else if (category === 'parent') {
            return {
                name: '',
                studentName: '',
                mobileNumber: ''
            };
        }
        return {};  // Default case, should not happen in theory
    };

    // Handle form submission
    const handleSubmit = (values) => {
        console.log(values);  // Log values or send to a server
    };

    // Render the appropriate form fields based on the category
    const renderFormFields = () => {
        if (category === 'employee') {
            return (
                <>
                    <Field name="name" type="text" placeholder="Name" className="form-field" />
                    <Field name="employeeId" type="text" placeholder="Employee ID" className="form-field" />
                    <Field name="securityQuestion" type="text" placeholder="Security Question" className="form-field" />
                    <Field name="email" type="email" placeholder="E-Mail (Personal/Organisation)" className="form-field" />
                    <Field name="mobileNumber" type="text" placeholder="Mobile Number" className="form-field" />
                </>
            );
        } else if (category === 'parent') {
            return (
                <>
                    <Field name="name" type="text" placeholder="Name" className="form-field" />
                    <Field name="studentName" type="text" placeholder="Parent/Guardian of" className="form-field" />
                    <Field name="mobileNumber" type="text" placeholder="Mobile Number" className="form-field" />
                </>
            );
        }
        return null;  // Handle invalid category case
    };

    // Render the complete form component
    return (
        <div className="all-register-container">
            <div className="form-container">
                <h1 className="form-title">Register as {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <Formik
                    initialValues={getInitialValues()}
                    onSubmit={handleSubmit}
                >
                    {formik => (
                        <Form>
                            {renderFormFields()}
                            <button type="submit" className="submit-button">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AllRegister;
