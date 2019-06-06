import React,{Component} from 'react';
import './../styles/rightpanel.css';
import ListRepos from './listrepos.js'
import { connect } from 'react-redux';
import { getRepos } from './../actions';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  getRepos: () => dispatch(getRepos())
})

class RightPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      currTab: 'repo',
      repos: null
    }
  }
  componentDidMount(){
    this.props.getRepos();
  }

  handleSearch = key => {

  }

  static getDerivedStateFromProps(props, state){
    console.log(props,state)
  }

  render() {
   return (
        <div className="rightpanel">
            <div className="headerList">
              <nav>
                <div className={this.state.currTab === 'ovrvw' ? 'tab-active' : 'tab-inactive'} onClick={() => this.setState({currTab: 'ovrvw'})}>Overview</div>
                <div className={this.state.currTab === 'repo' ? 'tab-active' : 'tab-inactive'} onClick={() => this.setState({currTab: 'repo'})}>Repositories{this.props.simpleReducer.repositories && <span className="count">{this.props.simpleReducer.repositories.length}</span>}</div>
                <div className={this.state.currTab === 'star' ? 'tab-active' : 'tab-inactive'} onClick={() => this.setState({currTab: 'star'})}>Stars<span className="count">5</span></div>
                <div className={this.state.currTab === 'flwrs' ? 'tab-active' : 'tab-inactive'} onClick={() => this.setState({currTab: 'flwrs'})}>Followers<span className="count">2</span></div>
                <div className={this.state.currTab === 'flwng' ? 'tab-active' : 'tab-inactive'} onClick={() => this.setState({currTab: 'flwng'})}>Following<span className="count">2</span></div>
              </nav>
            </div>
            <div className="subHeader">
              <input type="search" placeholder="Find a repository..." onChange={this.handleSearch}/>
              <div>
              <button className="btn">Type: All </button>
              <button className="btn">Language: All </button>
              <button className="btn new"><svg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg> New </button>
              </div>
            </div>
            {this.state.currTab === 'repo' ? <ListRepos repos={this.state.repos}/> : <div>Dummy Data</div>}
        </div>
   );
  }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);
