import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Please contact me either by phone or email. I am available anytime. Feel free to reach out and call if your interested in knowing more about me. Thank you for taking the time to view my portfolio! I hope to be working for a great company soon where we can make some amazing products together! Talk to you soon!  
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form action method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" defaultValue size={35} id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Adam Silver<br />
                360 2nd St. <br />
                Los Angeles, CA 90012 US<br></br>
                <span>Gmail</span><br></br>
               <a>adamsilver.ca@gmail.com</a><br></br>
                <span>My LinkedIn</span><br></br>
               <a>linkedin.com/in/adamsilver-ca</a><br></br>
                <span>My GitHub</span>
                <a> github.com/siliconbeachdevelopers</a><br></br>
                <span>(747)245-9381</span>

              </p>
            </div>
           
          </aside>
        </div>
      </section> {/* Contact Section End*/}
   


      </React.Fragment>

);
}
}