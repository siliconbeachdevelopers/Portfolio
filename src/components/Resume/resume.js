import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
    
      <section id="resume">
          <div>
          <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>General Assembly-LA</h3>
                <p className="info">Software Engineering Immersive Certificate <span>•</span> <em className="date">Sept-Dec 2019</em></p>
                <p>
                 The SEI program is a well-rounded technical foundation
                 into the software development environment and the basics of computing, networks, and data structures. Discovered the skills to build applications that meet user needs, model data, develop wireframes, and work collaboratively through version control.

                I Obtained Fluency in Multiple Frameworks and Stacks.
                I Learned to build applications from the ground up using key programming languages and frameworks. Also to apply essential object-oriented programming concepts, write high-quality JavaScript, and leverage JS libraries like React to build a dynamic front-end. Incorporate functionality from third-party APIs and add complexity and nuance with Python, Django, and more.

                Beyond “Full-Stack Development”
                I discovered how to effectively communicate and collaborate with development teams to carry out projects from concept to completion. I Worked on a team in Git and GitHub while executing software engineering projects in an Agile development workflow.
                </p>
            </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Chemeketa Community College</h3>
                <p className="info">Computer Science Major <span>•</span> <em className="date">  </em></p>
                <p>
                Chemeketa's Computer Science program is the study of solving problems with algorithms—it is the standard background for those who wish to become software developers or research new computation-based technologies. The computer science program at Chemeketa is designed to provide a foundation in computer programming as well as a foundation in the science of computation that prepares students for Junior level work at a four-year university.
                </p>
              </div>
              <div className="row item">
              <div className="twelve columns">
                <h3>Harvest Bible University</h3>
                <p className="info">Associates of Ministry<span>•</span> <em className="date">  </em>2016-2018</p>
                <p>
                Associate of Ministry
                The Associate of Ministry degree is a two-year college degree that provides basic training in the Bible, theology, character, and ministry. It is designed to equip a Christian to walk with God and serve Him effectively in a local church.
         
          
                </p>
                </div>
              </div>

            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
     
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>  
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Personal Fitness Trainer</h3>
                <p className="info">Optimist Fitness<span>•</span> <em className="date">Dec 2016 - Dec 2018</em></p>
                <p>
                Lead clients through exercise routines.
                Evaluate client fitness level and skillset to plan reachable goals.
                Monitor client through strength training and weightlifting.
                Counsel and educate clients on diet, nutrition, and exercise.
                Create a workout plan tailored to client needs.
                </p>
              </div>
            </div> {/* item end */}
            
           
            <div className="row item">
              <div className="twelve columns">
                <h3>Audio Engineer</h3>
                <p className="info">Freelance <span>•</span> <em className="date">July 2009 - Oct 2016</em></p>
                <p>
                Recorded various independent artists.I mixed down and mastered audio tracks.
                Software used Pro Tools, Cubase, Garage Band, FruitiLoops, Magix Studio.
                Produced using Akia 2000 MPC, Tritan, Korg and Mackie Equipment.

.


                </p>
              </div>
            </div> {/* item end */}
            
            
          </div> {/* main-col end */}
        </div> {/* End Work */}
  
        {/* Skills
      ----------------------------------------------- */}
         <section id="skills">
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Front End Develpment, JavaScript, React, ChromeDevTools, JQuery, Python 3.7, Algorithms,
               Express.js, Node.js, MongoDB, Mongoose, RESTful API , Flask, Google Firebase, Git, GitHub
                PostgressSQL, Postman, Visual Studio Code, UX/UI Design, HTML5, CSS3, Flex-Box, React-Bootstrap, Semantic UI, Flex-Box, Styled-Components, Materialize, React Storybook/component libraries, Trello, SQLite, MySQL, Heroku, Mocha,              Chai, Reading Documentation, Adobe XD.

            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>JavaScript</em></li>
                <li><span className="bar-expand illustrator" /><em>CSS3</em></li>
                <li><span className="bar-expand wordpress" /><em>Python 3.7</em></li>
                <li><span className="bar-expand css" /><em>React.js</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>Flask</em></li>
              </ul>
              
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
        {/* Resume Section End*/}
        </section>
      </div>
      
        .... 
      </section>
      
      </React.Fragment>
    );
  }
}