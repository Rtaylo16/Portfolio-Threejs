import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../App.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="form">
            <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="form-name" value="contact" />

                <div className="form-item">
                    <label className="p2 form-title" htmlFor="name">Name</label>
                    <input className="p2 form-field" id="name" name="name" type="text" required placeholder="Please Enter Your Name" />
                    <p className="p form-status">*required</p>
                </div>

                <div className="form-item">
                    <label className="p2 form-title" htmlFor="email">Email</label>
                    <input className="p2 form-field" id="email" name="email" type="email" required placeholder="Please enter your Email." />
                    <p className="p form-status">*required</p>
                </div>

                <div className="form-item">
                    <label className="p2 form-title" htmlFor="phone">Phone</label>
                    <input className="p2 form-field" id="phone" name="phone" type="text" placeholder="Would you like to add a phone number?" />
                    <p className="p form-status">optional</p>
                </div>

                <div className="form-item">
                    <label className="p2 form-title" htmlFor="company">Company</label>
                    <input className="p2 form-field" id="company" name="company" type="text" required placeholder="What is the name of your company?" />
                    <p className="p form-status">*required</p>
                </div>

                <div className="form-item">
                    <label className="p2 form-title" htmlFor="message">Message</label>
                    <textarea className="p2 form-field" name="message" id="message" required placeholder="Please enter a message here." style={{ height: '40px', overflowY: 'hidden' }}></textarea>
                    <p className="p form-status">*required</p>
                </div>

                <div className="form-submit">
                    <input className="submit-form-btn" type="submit" value="Click to send your message" />
                </div>
            </form>
        </div>
    );
}

export default ContactForm;