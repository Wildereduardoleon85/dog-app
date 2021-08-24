import React from 'react';
import './footer.scss';
import {sendMail} from '../../../utils/utils';

const Footer = () => {
    return (
        <section className="footer">
            <div>
                <a  
                    href="https://www.linkedin.com/in/wildereduardoleon/" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="#!" onClick={sendMail}><i className="far fa-envelope"></i></a>
                <a 
                    href="https://github.com/Wildereduardoleon85"
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <p>Created By Wilder León</p>
        </section>
    )
}

export default Footer
