import React, { Component } from 'react';

class Teams extends Component {
  state = {
    teams: []
  }

  componentDidMount() {
    
    fetch("https://api.pandascore.co/ow/teams?&token=ib5ahXVcsVhUwxLKEggXfrDx9-78AZEYD37rfNGsxeEhQDpM8Ic")
    .then(res => res.json())
    .then((data) => {
      this.setState({ teams: data })
    })
    .catch(console.log)
  }

  render(){
    return (
      <div class="list">
        <center><h1>Teams List</h1></center>
      
        <div class="card">
            <div className="avatar">
                          <img src="images/t1.png" alt="league1"/>
                        </div>
            <div class="card-body">
              <h5 class="card-title">QARA</h5>
              <h6 class="card-subtitle mb-2 text-muted">qara</h6>
              <p class="card-text">qara</p>
            </div>
          </div>

          <div class="card">
            <div className="avatar">
                          <img src="images/t2.png" alt="league2"/>
                        </div>
            <div class="card-body">
              <h5 class="card-title">DarkMode NA</h5>
              <h6 class="card-subtitle mb-2 text-muted">darkmode-na</h6>
              <p class="card-text">darkmode-na</p>
            </div>
          </div>

          <div class="card">
            <div className="avatar">
                          <img src="images/t3.png" alt="league3"/>
                        </div>
            <div class="card-body">
              <h5 class="card-title">Noble NA</h5>
              <h6 class="card-subtitle mb-2 text-muted">noble-ow</h6>
              <p class="card-text">noble-ow</p>
            </div>
          </div>

          <div class="card">
            <div className="avatar">
                          <img src="images/t5.png" alt="league5"/>
                        </div>
            <div class="card-body">
              <h5 class="card-title">American Tornado</h5>
              <h6 class="card-subtitle mb-2 text-muted">american-tornado</h6>
              <p class="card-text">american-tornado</p>
            </div>
          </div>

          <div class="card">
            <div className="avatar">
                          <img src="images/t4.png" alt="league4"/>
                        </div>
            <div class="card-body">
              <h5 class="card-title">Obey Alliance</h5>
              <h6 class="card-subtitle mb-2 text-muted">obey-alliance</h6>
              <p class="card-text">obey-alliance</p>
            </div>
          </div>
      </div>
    );
   }
    
  }
  
  export default Teams;