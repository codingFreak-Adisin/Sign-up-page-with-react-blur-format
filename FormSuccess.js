import React from 'react';
import './Form.css';

const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <h1 className='form-success'>We have received your request!</h1>
            <img className='form-img-2' src='https://www.lemonjar.com.my/wp-content/uploads/2020/07/75_smile.gif' alt='success-image' />
            <div className="link">
                <a href="https://commutify-redirected-page-hackathon.netlify.app/" alt="link">Click here to go ahead</a>
            </div>
            <div className="link-go-ahead">
                <p><b>Click on that link To go ahead. We have received your request.We will<br />
                       store all your data in our Database We would happy to see you in </b></p>
            </div>
        </div>
    );
};

export default FormSuccess;