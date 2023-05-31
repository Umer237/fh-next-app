import React from "react";
import Header from "./Header";
import { AiOutlineMail } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import Footer from "./Footer";
import Link from "next/link";

const contact = () => {
  return (
    <>
      <Header />
      <div className="Contact-Top-Text">
        <h1>CONTACT US</h1>
      </div>

      <div className="Contact-Text">
        <h4>Get In Touch With Us</h4>
      </div>
      <div className="Phone-Address-Mail">
        <div className="Things">
          {" "}
          <div className="Icons">
            <BsTelephone />
          </div>
          <h3>PHONE</h3>
          <h4 className="top-h4">+92 331 444 7077</h4>
          <h4>+92 322 444 7077</h4>
        </div>
        <div className="Things">
          {" "}
          <div className="Icons">
            <TfiLocationPin />
          </div>
          <h3>ADDRESS</h3>
          <h4 className="top-h4">
            {" "}
            88-M Quaid-E-Azam Industrial Estate,Lahore,Pakistan
          </h4>
        </div>
        <div className="Things">
          {" "}
          <div className="Icons">
            <AiOutlineMail />
          </div>
          <h3>MAIL</h3>
          <h4 className="top-h4">info@fhgroupoc.com</h4>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8093.701841300989!2d74.27171522162479!3d31.46966942967934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1685441601906!5m2!1sen!2s"
        width="1890"
        frameBorder='none'
        height="450"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="inputs">
        <input className="input-1" type="text" placeholder="NAME" />
        <br></br>
        <input className="input-1" type="text" placeholder="EMAIL" />
        <br></br>
        <input className="input-1" type="text" placeholder="COMPANY" />
        <br></br>
        <textarea
          className="text-area"
          placeholder="MESSAGE"
          name=""
          id=""
          cols="76"
          rows="9"
        ></textarea>
        <br></br>
      </div>
   
      <div className="contact-us-button">
  <Link href='/pages/ThankYou'>
        <button>SEND</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default contact;
