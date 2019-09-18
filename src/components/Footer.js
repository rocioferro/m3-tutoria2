import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    }
    this.updateClock=this.updateClock.bind(this);
    setInterval(this.updateClock, 1000)
  }
  updateClock() {
    const newDate = new Date()
    const hh = newDate.getHours();
    const mm = newDate.getMinutes();
    const ss = newDate.getSeconds(); 
    const newTime = hh + ':' + mm + ':' + ss;
    
    this.setState({
      time: newTime,
    })
      
    
  }
  render() {
    return(
      <footer>
        <p>loh() {this.state.time} </p>
      </footer>
    )
  }
}


export default Footer;