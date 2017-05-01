import React from 'react';
import {unixTimeToString} from './util.js';

export default class Files extends React.Component{
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render(){
    var data = this.state;
    if(data.type == "folder"){
      return(
      <tbody>
        <tr>
          <td>{data.title}</td>
          <td>{unixTimeToString(data.postDate)}</td>
          <td>{data.type}</td>
          <td>{data.owner}</td>
        </tr>
     </tbody>
    )
    }
    else{
      return(
        <tbody>
        <tr>
          <td>{data.title}</td>
          <td>{unixTimeToString(data.postDate)}</td>
          <td>{data.type}</td>
          <td>{data.owner}</td>
        </tr>
        </tbody>
    )
    }
  }
}
