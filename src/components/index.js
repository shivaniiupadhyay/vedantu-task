import React,{Component} from 'react';
import LeftPanel from './leftpanel.js'
import RightPanel from './rightpanel.js'
import Loader from './loader.js';

import './../styles/gitclone.css';

import { connect } from 'react-redux';
import { getBasicInfo } from './../actions';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  getBasicInfo: () => dispatch(getBasicInfo())
})

class GitClone extends Component {
  componentWillMount(){
    this.props.getBasicInfo()
  }
  render() {
   if(this.props.simpleReducer.info)
   return (
        <div className="gitclone">
            <LeftPanel data={this.props.simpleReducer.info}/>
            <RightPanel />
        </div>
   )
   else
   return <Loader/>
  }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(GitClone);
