import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class Leagues extends Component {
  state = {
    leagues: []
  }

  componentDidMount() {
    
    fetch("https://api.pandascore.co/ow/leagues?&token=ib5ahXVcsVhUwxLKEggXfrDx9-78AZEYD37rfNGsxeEhQDpM8Ic")
    .then(res => res.json())
    .then((data) => {
      this.setState({ leagues: data })
    })
    .catch(console.log)
  }

  
 render(){
  return (
    <div class="list">
      <center><h1>Leagues List</h1></center>
      
      <div class="card" >
          <div className="avatar">
                        <img src="images/1.png" alt="team1"/>
                      </div>
          <div class="card-body">
            <h5 class="card-title">NetEase Esports X Tournament</h5>
            <h6 class="card-subtitle mb-2 text-muted">ow-netease-esports-x-tournament</h6>
            <p class="card-text">2020-11-23</p>
          </div>
           <Button variant="primary">Details</Button>
          </div>

        <div class="card" >
          <div className="avatar">
                        <img src="images/2.png" alt="team2"/>
                      </div>
          <div class="card-body">
            <h5 class="card-title">Contenders: The Gauntlet</h5>
            <h6 class="card-subtitle mb-2 text-muted">ow-the-gauntlet</h6>
            <p class="card-text">2019-10-06</p>
          </div>
           <Button variant="primary">Details</Button>
          </div>

        <div class="card" >
          <div className="avatar">
                        <img src="images/3.png" alt="team3"/>
                      </div>
          <div class="card-body">
            <h5 class="card-title">Contenders North America</h5>
            <h6 class="card-subtitle mb-2 text-muted">ow-contenders-north-america</h6>
            <p class="card-text">2020-02-03</p>
          </div>
           <Button variant="primary">Details</Button>
          </div>

        <div class="card" >
          <div className="avatar">
                        <img src="images/4.png" alt="team4"/>
                      </div>
          <div class="card-body">
            <h5 class="card-title">Contenders Europe</h5>
            <h6 class="card-subtitle mb-2 text-muted">ow-overwatch-contenders</h6>
            <p class="card-text">2020-02-03</p>
          </div>
          
           <Button variant="primary">Details</Button>
          
        </div>
    </div>
  );
 }
  
}

export default Leagues;



