import React from 'react';
import "../App.css"

class Footer extends React.Component {
    render() { 
        return <div className="footer row" >
            <div className="contact ">
                    <a href='/' target="_blank" rel="noreferrer" ><i class="fab fa-linkedin"></i> Linkedin </a>|
                    <a  href='https://www.facebook.com/sudish.sharma.9' target="_blank" rel="noreferrer" ><i class="fab fa-facebook-square"></i> Facebook </a>|
                    <a href='mailto:g.c.consultants02gmail.com' target="_blank" rel="noreferrer" > <i class="far fa-envelope"></i> g.c.consultants02gmail.com </a>|
                    <a href='tel:+919795141300' target="_blank" rel="noreferrer" ><i class="fas fa-phone"></i> +91 9795141300 </a>|
                    <a href='tel:+917985806900' target="_blank" rel="noreferrer" ><i class="fas fa-phone"></i> +91 7985806900 </a>
                    <br/>Copyright © 2022 <a href="/">SAHJANAND Consultancy </a>
            </div>
        </div>;
    }
}
 
export default Footer;