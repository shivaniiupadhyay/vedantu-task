import React,{Component} from 'react';
import './../styles/common.css';

class Loader extends Component {
  
  render() {
   return (
        <div className="loader-cover">
            <div className = "loader"/>
        </div>
   );
  }
 }
 export default Loader;
