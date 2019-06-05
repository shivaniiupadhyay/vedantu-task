import React,{Component} from 'react';
import './../styles/rightpanel.css';
import { thisTypeAnnotation } from '@babel/types';

class RightPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      currTab: 'repo'
    }
  }
  componentWillMount(){
    fetch('https://api.github.com/users/supreetsingh247/repos', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => this.setState({data}))
    .catch(err => console.log(err))
  }
  render() {
   return (
        <div className="rightpanel">
            <div className="headerList">
              <nav>
                <div>Overview</div>
                <div>Repositories</div>
                <div>Projects</div>
                <div>Stars</div>
                <div>Followers</div>
                <div>Following</div>
              </nav>
            </div>
            <div className="subHeader">
              <input type="search" />
              <div>
              <button className="btn">Type</button>
              <button className="btn">Language</button>
              <button className="btn">New</button>
              </div>
            </div>
            {this.state.currTab === 'repo' ?
            <div>Repo</div>
            : <div>Dummy Data</div>
            }
        </div>
   );
  }
 }
 export default RightPanel;
