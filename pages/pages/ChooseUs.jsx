import React from "react";
import Link from "next/link";

const Chooseus = () => {
  return (
    <>
    <div className="BG-Choose-Us">
      <div className="Choose-Us-Flex">
        <div className="Choose-Us-Text">
          <h2>Why Choose Us ?</h2>
          <p>
            When looking for a one stop Solution FH is the name to go for, you
            name it and we got the required services one is looking
            for.Insightful, bright and full of brimming ideas that one needs at
            the start of any venture. Once you start working with FH there will
            be no need to look elsewhere.When looking for a one stop Solution FH
            is the name to go for,
          </p>
          <Link href='/pages/contact'>
          <button>GET IN TOUCH</button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Chooseus;
