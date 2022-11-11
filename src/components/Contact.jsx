import React, {useRef} from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
 import { Button, Form} from "react-bootstrap";

 import {useForm} from "react-hook-form";

export default function Contact() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const form = useRef();

  const sendEmail = (data, e) =>{
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY 
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    );
    // clears the form after the message is sent
    e.target.reset();
  };
  return (
    <div className="form-body">
      <div className="someText">
        <h3>Let's talk</h3>
        <p>I'm available for <em>Job</em> opportunities where I can learn, build and grow.
        Feel free to contact me and I will get back to you as soon as I can.</p>
      </div>
        <div className="form">
          <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="full_Name" className="label">Full Name</Form.Label>
              <Form.Control 
                type="text" 
                id="full_Name" 
                placeholder="Your Full Name" 
                {...register("full_Name", {required: true})} 
                className={`'' ${errors.full_Name ? 'form-control' : ''}`}/>
                {errors.full_Name && <span>Please enter your full name...</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email" className="label">Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email"
                {...register("email", {required: true})}
                className={`'' ${errors.email ? 'form-control' : ''}`}/>
              {errors.email && <span>Please enter your email address...</span>}
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label htmlFor="message" className="label">Your Message</Form.Label>
              <Form.Control 
                type="text" as="textarea" rows={6} 
                placeholder="Send a message" 
                {...register("message", {required:true})}
                className={`'' ${errors.message ? 'form-control' : ''}`}/>
                {errors.message && <span>Plese enter your message...</span>}
            </Form.Group>
            <div>
              <Button variant="primary" size="lg" type="submit" style={{color: "#fff", margin: "10px 0"}}>
                Send Message
              </Button>
            </div>
          </Form>
        </div>
    </div>
  )
}
