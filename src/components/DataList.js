import React from 'react';
import DataCard from './DataCard';

class DataList extends React.Component {
  render() {
    return(
      <main>
      <ul className="app-list"> {this.props.data.map ((item, index)=> {
        return (<li className="app-elements" key={index}>
            <DataCard 
            item={item}
            />
        </li>);
        })}
      </ul>
      </main>
   
    )
  }
}



export default DataList;