import React, {useState} from "react";
import Header from "./Header";
import Image from "next/image";
import Footer from "./Footer";

const about = () => {
  const [input, setInput] = useState('ENTER YOUR EMAIL')
const handleOnChange = () => {
  setInput('')
}

  return (
    <>
      <Header />
      <div className="About-Us-Top-Text">
        <h1>ABOUT US</h1>
      </div>
      <div className="About-Us-Things">
        <Image src="/img/Aboutus.png" width={1131} height={625}></Image>
        <div>
          <input type="text" value={input}/>
          <button onClick={handleOnChange}>SEND</button>
        </div>
        <div>
          <p>
            It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikely
            to be found elsewhere.
          </p>
        </div>
      </div>
      <br />
      <br />
      <Footer/>
    </>
  );
};

export default about;
