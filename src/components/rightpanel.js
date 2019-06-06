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
      repos: null,
      searchString: '',
      language: 'all',
      type: 'all'
    }
  }
  componentDidMount(){
    this.props.getRepos();
  }

  handleSearch = () => {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  static getDerivedStateFromProps(props,state){
    if(state.repos === null && props.simpleReducer.repositories) return {repos: props.simpleReducer.repositories}
    return null
  }

  typeChange = e => {
    this.setState({type: e.target.value})
  }

  languageChange = e => {
    this.setState({language: e.target.value})
  }

  render() {
    let _repos = this.state.repos;
    let search = this.state.searchString.trim().toLowerCase();
    let language = this.state.language
    let type = this.state.type

    if (search.length > 0) {
      _repos = _repos.filter(repo => {
        return repo.name.toLowerCase().match(search);
      });
    }

    if(_repos && language !== 'all'){
      _repos = _repos.filter(r => r.language === language)
    }

    if(_repos && type !== 'all'){
      switch(type){
        case 'private':
          _repos = _repos.filter(r => r.private)
          break
        case 'public':
          _repos = _repos.filter(r => !r.private)
          break
        case 'forks':
          _repos = _repos.filter(r => r.fork)
          break
        case 'archived':
          _repos = _repos.filter(r => r.archived)
          break
        case 'mirrors':
          _repos = _repos.filter(r => r.mirror_url)
          break
        default:
          _repos = this.state.repos
          break
      }
    }
    console.log(_repos)
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
              <input 
               type="search" 
               placeholder="Find a repository..."
               onChange={this.handleSearch}
               value={this.state.searchString}
               ref="search"
               />
              <div>
              <button className="btn">Type: 
                <select className="btn" onChange={this.typeChange}>
                  <option value="all">All</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="forks">Forks</option>
                  <option value="archived">Archived</option>
                  <option value="mirrors">Mirrors</option>
                </select>
              </button>
              <button className="btn">Language: 
                <select className="btn" onChange={this.languageChange}>
                  <option value="all">All</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="PHP">PHP</option>
                </select>
              </button>
              <button className="btn new"><svg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg> New </button>
              </div>
            </div>
            {this.state.currTab === 'repo' ? <ListRepos repos={_repos}/> : <div>Dummy Data</div>}
        </div>
   );
  }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);
