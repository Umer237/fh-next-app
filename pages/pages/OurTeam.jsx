import React from "react";

const OurTeam = () => {
  return (
    <>
      <div className="OurTeam-Top-Text">
        <h2>OUR TEAM</h2>
        <p>Alone we can do so little; together we can do so much.</p>
      </div>
      <div className="Our-Team-Flex">
        <div>
          <img
            src='https://i.pinimg.com/280x280_RS/bf/f9/10/bff9105c7c733b91f00d5df3f6c965a4.jpg'
            alt="Avatar"
          />
        </div>
        <div className="Our-Team-Text">
          <h3>M Gulxar Ahmad</h3>
          <h4>Creative Director</h4>
          <p>
            It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikelys
            to be found elsewhere.
          </p>
        </div>
      </div>
      <div className="Our-Team-Flex-2">
            <div className="Our-Team-Text-2">
          <h3>Syed Haider Ali</h3>
          <h4>Web Developer</h4>
          <p>
            It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikely
            to be found elsewhere.
          </p>
        </div>
        <div>
          <img
            src='https://i.pinimg.com/280x280_RS/0b/06/60/0b066043d20ec349707ad005bf5d3a71.jpg'
            alt="Avatar"
          />
        </div>
      </div>
      <div className="Our-Team-Flex">
        <div>
          <img
            src='https://i.pinimg.com/280x280_RS/91/96/5d/91965df786a233928966cc673042aa91.jpg'
            alt="Avatar"
          />
        </div>
        <div className="Our-Team-Text">
          <h3>Umer Afzal</h3>
          <h4>Web Developer</h4>
          <p>
            It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikelys
            to be found elsewhere.
          </p>
        </div>
      </div>
      <div className="Our-Team-Btn">
        <button>MEET ALL</button>
      </div>
          {/* <div className="card">
		<div className="info">
			<span clasName="name">Mk Gulzar</span>
			<span className="prof">Creative Director</span>
			<div className="divider"></div>
			<p className="bio">  It is a world class group which offers experience, equipment, and
            one roof fh provides one step solution to all its clients which not </p>
			<button>CONTACT ME</button>
		</div>
		<div className="photo"></div>
	</div> */}
    </>
  );
};

export default OurTeam;
