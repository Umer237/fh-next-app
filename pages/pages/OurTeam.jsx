import React from "react";
// import {Link} from "react-dom"
import Image from "next/image";

const OurTeam = () => {
  return (
    <>
       <div className="OurTeam-Top-Text">
        <h2>OUR TEAM</h2>
        <p>Alone we can do so little; together we can do so much.</p>
      </div>
      <div className="First-Section">
        <div>
          <img
            src="https://scontent.fisb11-1.fna.fbcdn.net/v/t1.18169-9/25616_356268093172_1992921_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=9mOSZ2ujXzIAX9J5rWk&_nc_ht=scontent.fisb11-1.fna&oh=00_AfD3KEh1QQJhN51N50GJm_BNthR2bGQFtEBY922xOI1RLQ&oe=6496C048"
            alt=""
          />
        </div>
        <div className="Text-Area">
          <h2>M Gulxar Ahmad</h2>
          <h3>Creative Director</h3>
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
      <div className="Second-Section">
      <div className="Second-Section-Member-1">
        <div>
            <img src="https://scontent.fisb11-1.fna.fbcdn.net/v/t39.30808-6/347292518_1352463331984906_8970976841859751078_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ivOmcTsIASAAX_mTa2H&_nc_ht=scontent.fisb11-1.fna&oh=00_AfDNzXd165lnJvsmHlbLGX_4bhu1yHCRzJErCDkDcBIW_Q&oe=64738A1D" alt="" />
        </div>
        <div className="Text-Area-2">
            <h2>Umer Afzal</h2>
            <h3>Developer</h3>
            <p>It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikely
            to be found elsewhere.</p>
        </div>
      </div>
      <div className="Second-Section-Member-2">
        <div>
            <img src="https://i.pinimg.com/280x280_RS/0b/06/60/0b066043d20ec349707ad005bf5d3a71.jpg" alt="" />
        </div>
        <div className="Text-Area-3">
            <h2>Syed Ali Haider</h2>
            <h3>Developer</h3>
            <p>It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikely
            to be found elsewhere.</p>
        </div>
      </div>
      </div>
      <div className="Third-Section">
      <div className="Third-Section-Member-1">  
      <div className="Text-Area-4">
            <h2>Assad Ullah</h2>
            <h3>Graphisc Designer</h3>
            <p>It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikely
            to be found elsewhere.</p>
        </div>
        <div>
            <Image 
            src='/img/Asad.JPG' width={600} height={480}>

            </Image>
        </div>
      </div>
      <div className="Third-Section-Member-2">  
      <div className="Text-Area-5">
            <h2>Bilal Saeed</h2>
            <h3>Animator</h3>
            <p>It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikely
            to be found elsewhere.</p>
        </div>
        <div>
            <img src="https://scontent.fisb11-1.fna.fbcdn.net/v/t39.30808-6/347292518_1352463331984906_8970976841859751078_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ivOmcTsIASAAX_mTa2H&_nc_ht=scontent.fisb11-1.fna&oh=00_AfDNzXd165lnJvsmHlbLGX_4bhu1yHCRzJErCDkDcBIW_Q&oe=64738A1D" alt="" />
        </div>
      </div>
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
