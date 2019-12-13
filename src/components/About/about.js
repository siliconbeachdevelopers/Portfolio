import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
     
     <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/adamsilver.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I’m a Software Engineer specialiazing in Front End Development and design.I create apps and solve problems utilizing Full Stack Development. I work with UX/UI designers to implement stradegies to bring wireframes to life. I harness vision to for see trends in style , design and innovation. That forward thinking and quick on the spot design skills combined with my coding ability offer a unique skill set. I am motivated to become a Senior Engineer with leadership experience. I’m a team player with strong communication and organizational skills. I offer your company my passion to continue to learn and to always be fully invested in what we’re doing.

            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Adam Silver</span><br />
                  <span>360 2nd St.<br />
                    Los Angeles,CA 90012 US
                  </span><br />
                  <span>(747)245-9381</span><br />
                  <span>adamsilver.ca@gmail.com</span>
                 </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://docs.google.com/document/d/1y1_z-XgzuwTIP5LPSJZZzm2yxytXtZX08UEn-lkEWAQ/edit?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
  
    
  
  
      </React.Fragment>
    )
  }
};



