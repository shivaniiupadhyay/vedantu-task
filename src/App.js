import React,{Component} from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import GitClone from './components'

import './styles/App.css';

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }
  render() {
   return (
    <div className="App">
        <GitClone />
      </div>
   );
  }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(App);
