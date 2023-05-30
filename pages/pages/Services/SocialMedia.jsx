import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const SocialMedia = () => {
  return (
    <>
    <Header/>
      <div className="Social-Electronic-Media-Top-Text">
        <h2>SOCIAL & ELECTRONIC MEDIA</h2>
      </div>
      <div className="Social-Electronic-Media-Flex">
      <div className="Social-Electronic-Media-Text">
        <h2>SOCIAL & ELECTRONIC MEDIA</h2>
        <h5>Social Media maintenance</h5>
        <h4>
          FH is an expert in maintaining a successful presence of your brand on
          all Social media platforms. We connect, interact, share and engage on
          all SM platforms Facebook, Instagram, Twitter, YouTube etc to drive
          traffic and attract attention.
        </h4>
        <h5>Website Development & Maintenance</h5>
        <h4>
          FH is an expert in maintaining a successful presence of your brand on
          all Social media platforms. We connect, interact, share and engage on
          all SM platforms Facebook, Instagram, Twitter, YouTube etc to drive
          traffic and attract attention.
        </h4>
        <h5>Media Planning & Buying</h5>
        <h4>
          FH makes media plans keeping in view the online and offline channels
          according to the target audience and goals of the business thereby
          effectively choosing the right media to run campaigns on.
        </h4>
        <h5>Multimedia Presentations</h5>
        <h4>
          FH uses a combination of text, images and sound to spread your Brand
          message and draws customer attention and conversion rate is higher. A
          testimonial video not only reinforces the message of a good service
          but also gives more credibility to the business.
        </h4>
      </div>
      <div className="Social-Electronic-Media-img">
        <img src="https://www.salesforce.com/content/dam/blogs/nl/mar2021/social-media-marketing-succes-meten.jpg" alt="" />
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default SocialMedia;
