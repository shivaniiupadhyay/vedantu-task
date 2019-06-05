import React,{Component} from 'react';
import LeftPanel from './leftpanel.js'
import RightPanel from './rightpanel.js'
import './../styles/gitclone.css';

class GitClone extends Component {
  
  render() {
   return (
        <div className="gitclone">
            <LeftPanel />
            <RightPanel />
        </div>
   );
  }
 }
 export default GitClone;
