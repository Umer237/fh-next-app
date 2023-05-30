import React from "react";
import Header from "../Header";
import Image from "next/image";
import Footer from "../Footer";

const BrandStrategy = () => {
  return (
    <>
      <Header />
      <div className="Brand-Strategy-Top-Text">
        <h2>BRAND STRATEGY</h2>
      </div>
      <div className="Brand-Strategy-Flex">
      <div className="Brand-Strategy-Text">
        <h2>BRAND STRATEGY</h2>
        <h4>
          FH Group Knows what the market wants and uses both traditional and
          Growth Marketing techniques to launch and then sustain the brand in
          the eyes of the consumer. Our focus is on using traditional, digital
          and non-digital channels to convert and retain consumers. FH aims not
          only to attract but convert, engage, and retain users through online
          marketing channels, like search, email and social media. We use
          data-driven strategy to support and improve your Brands growth,
          revenue, and the most important factor client satisfaction.
        </h4>
        <h4>
          We make custom digital marketing plans just for you based on your
          Brand goals . Our tailor-made content positions your business as the
          best solution for potential customers.
        </h4>
        <h4>
          Our tactics include SEO, Content Marketing, Marketing, Social Media
          Marketing, Print and electronic Media advertisement, Video Production,
          Website Design Event Management, Outdoor marketing and Public
          Relations
        </h4>
        <h4>
          Our dedicated team of digital marketing professionals include SEO
          experts, Content strategist, Copywriters, Graphic designer, Web
          developers, Social media specialist, Photographers & Videographers.
        </h4>
        <h4>
          Our clients have achieved exponential and optimum revenue growth. So
          be bright and choose right FH is your doorway to success.
        </h4>
      </div>
      <div>
        <Image  src='/img/Chess.png' width={600} height={750}>
        </Image>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default BrandStrategy;
