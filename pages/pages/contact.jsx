import React from "react";
import Header from "./Header";
import { AiOutlineMail} from 'react-icons/ai';
import { TfiLocationPin} from 'react-icons/tfi';
import { BsTelephone} from 'react-icons/bs';
import Footer from "./Footer";


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
      <div className='Things'> <div className="Icons">
        <BsTelephone/>
        </div>
      <h3>PHONE</h3>
      <h4 className="top-h4">+92 331 444 7077</h4>
      <h4>+92 322 444 7077</h4>
      </div>
      <div className='Things'> <div className="Icons">
        <TfiLocationPin/>
        </div>
        <h3>ADDRESS</h3>
        <h4 className="top-h4"> 88-M Quaid-E-Azam Industrial
Estate,Lahore,Pakistan
</h4>
      </div>
      <div className='Things'> <div className="Icons">
        <AiOutlineMail/>
        </div>
        <h3>MAIL</h3>
        <h4 className="top-h4">info@fhgroupoc.com</h4>
      </div>
    </div>
    <div className="inputs">
      <input className="input-1" type="text" placeholder="NAME" />
      <br></br>
      <input className="input-1" type="text" placeholder="EMAIL" />
      <br></br>
      <input className="input-1" type="text" placeholder="COMPANY" />
      <br></br>
      <textarea className="text-area" placeholder="MESSAGE" name="" id="" cols="76" rows="9"></textarea>
      <br></br>
    </div>
    <div className="contact-us-button">
    <button>SEND</button>
    </div>
    <Footer/>
    </>
  );
};

export default contact;
