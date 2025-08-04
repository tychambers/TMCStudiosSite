import '../styles/about.css'
import '../styles/styles.css'
import phone from "../assets/phone.ico"
import mail from "../assets/mail.ico"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hupf6jt', 'template_7p0ignn', form.current, {
        publicKey: 'GcA8FvBQDFtuloP9y',
        })
        .then(
        () => {
            console.log('SUCCESS!');
            alert('Message sent successfully!');
        },
        (error) => {
            console.log('FAILED...', error.text);
            alert(`Failed to send message: ${error.text}`);
        },
        );
    };




    return (
    <div>
        <div className='navbar-space' />
        <div className='contact-page-new'>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='form-title outfit-bold-black'>Request a Quote</div>
                    <div className='form-subtitle'>All Entries With <span style={{ color: 'red'}}>*</span> Are Required</div>
                    <label className='form-label-text' for="fname">Name</label><br/>
                    <input type="text" id="name" name="name"/><br/>
                    <label className='form-label-text' for="phone">Phone <span style={{ color: 'red'}}>*</span></label><br/>
                    <input type="text" id="phone" name="phone"/><br/>
                    <label  className='form-label-text' for="email">Email <span style={{ color: 'red'}}>*</span></label><br/>
                    <input type="text" id="email" name="email"/><br/>
                    <label className='form-label-text' for="info">How Can We Help You Today? <span style={{ color: 'red'}}>*</span></label><br/>
                    <textarea type="text" id="info" name="info"></textarea>
                    <button className='submit-button form-label-text'>Submit</button>
                </form>
            </div>
            <div className='contact-title bungee-green'>Contact Us!</div>
            <div className='contact-subtitle playwrite-fr-moderne-thin-black'>We Respond to Inquires Within 48 hours!</div>
            <div className='title-divider-black-two'></div>
            <div className='phone-button'><button><img className='images' src={phone} /></button></div>
            <div className='email-button'><button><img className='images' src={mail} /></button></div>
            <div className='phone-number schibsted-grotesk-test'>(404) 889-5777</div>
            <div className='email-address schibsted-grotesk-test'>tylerm.chambers92@gmail.com</div>
        </div>
        <div className="footer">
                Copyright TMCStudios LLC | Site Design by Tyler Chambers
        </div>
    </div>
    );
}

export default Contact;