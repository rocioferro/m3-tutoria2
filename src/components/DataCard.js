import React from 'react';

class DataCard extends React.Component {
  render(){
    const {item} = this.props;
    return(
      <div className="card">
        <h2 className="card-name">{item.name}</h2>
        <p className="card-email">{item.email}</p>
        <ul className="card-password-list">{item.passwords.map((pass, i)=>{return(<li className="card-password"   key={i}>{pass}</li>)})} </ul>
        <p className="card-iban">{item.bank.iban}</p>
        <p className="card-pin">{item.bank.pin}</p>
      </div>
    )
  }
}




export default DataCard;