import React, { Component } from 'react';
import { Image, Grid, Item } from 'semantic-ui-react';
import './portfolio.css'


const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      
      <Item.Group>
   
    <Item>
      <div className='myprojects'>
        <h3>My Projects</h3>
      </div>
      <div className='inline'>
      <a href="https://trufan.herokuapp.com/" ><Item.Image className='trufanimage' size='tiny' src='/images/trufan.png' /></a>

      <Item.Content>
        <Item.Header className='lahead'>TruFan App</Item.Header>
        <Item.Meta>
        <a href="https://github.com/siliconbeachdevelopers/Tru-Fan-Project">Git Hub Code</a><br></br> 
          <span className='price'>Sports</span>
          <span className='stay'>Social Media App</span>
        </Item.Meta>
        <Item.Description className="descript">This is a fun social media space for true sports fan to represent their favorte teams post photos.Built with Back-End Frameworks: The MEN Stack (MongoDB, Express, Node.js, EJS.) Completed  in just 7 days. With full create, read, update, delete (CRUD) operations. Styled the application using Style-Components and CSS3 with flexbox layouts.</Item.Description><br></br><br></br>
     
      
      <a href="https://livemusic-app.herokuapp.com/"><Item.Image className='livemusic' size='tiny' src='/images/portfoliopic.png' /></a>
      
      <Item.Content>
      <a href="https://github.com/siliconbeachdevelopers/RockWitChA-Live-Music-App">Git Hub Code</a><br></br> 
      <Item.Header className="lahead">Rock WitCha'</Item.Header>
        <Item.Meta className='stay'>Live Concerts Near You! </Item.Meta>
       
        <Item.Description className='descript'>  Created a React application making API fetch calls.Used React.js to serve the front-end with Javascript methods and functions.
        Served the back-end of the application using Express and Mongoose functions utilizing Firebase and MongoDB database management.
        Styled and created the visual aspects using Semantic UI/CSS, HTML5, Flex-Box, CSS3. </Item.Description>
        </Item.Content><br></br> 
        </Item.Content><br></br>
        </div>
      
    </Item>
   
  
    <Item>
    

      <a href="https://local-la.herokuapp.com/"><Item.Image className='localnew' size='tiny' src='images/localpic.png' /></a>

      <Item.Content>
      <a href="https://github.com/kimtimmy93/project-3-flask">Git Hub Code</a><br></br>
        <Item.Header className="lahead">Local LA</Item.Header>
        <Item.Meta className='stay'>Local Sporting Events </Item.Meta>
        <Item.Description className='descript'> I Worked on a team and completed this MVC app in 7 days. 
        Created a React application making API fetch calls.
        Used React.js to serve the front-end with Javascript methods and functions.
        Served the back-end of the application using Flask and Python3.7 functions utilizing SQLite database management.
        Styled and created the visual aspects using Semantic UI/CSS, HTML5, Flex-Box, CSS3.
        Wireframed and planned UI design of application using Trello.
      </Item.Description>
          
      </Item.Content><br></br>
    </Item> 

   
      <a href="https://siliconbeachdevelopers.github.io/lakers-vs-celtics-game/"><Item.Image className='lakergame' size='tiny' src='images/bball.png' /></a>
      <Item.Content>
      <a href="https://github.com/siliconbeachdevelopers/lakers-vs-celtics-game">Git Hub Code</a><br></br>
      <Item.Header className="lahead">Lakers vs Celtics</Item.Header>
        <Item.Meta className='stay'>Card Game </Item.Meta>
        <Item.Description className='descript'> Coded with HTML5 and CSS3 to create the front-end style.  
          Used Vanilla Javascript to create the game logic that flips cards and renders them. </Item.Description>
        </Item.Content><br></br> 
     
        <Item.Image className='network' size='tiny' src='images/network.png' />
      <Item.Content>
      <Item.Header className="lahead">The Network App</Item.Header>
        <Item.Meta className='stay'>Mobile App </Item.Meta>
        <Item.Description className='descript'> This is a front-end mobile app I designed to be a networking app which incorporates first business but can have social features as well. I have a proprietary feature for the app which sets it apart. This is still being built. </Item.Description>
        </Item.Content> 
 
 

  </Item.Group>
 </section>
 
    )
  }
}