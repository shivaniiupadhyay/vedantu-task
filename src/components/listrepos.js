import React,{Component} from 'react';
import Loader from './loader.js';
import './../styles/common.css';
import moment from 'moment';

class ListRepos extends Component {
  convertDate = date => {
     var repo_updated = new Date(date);
     var timeStamp = Math.round(new Date().getTime());
     var timeStampMonthBack = timeStamp - (30 * 24 * 3600 * 1000);
     var isWithinAMonth = repo_updated >= new Date(timeStampMonthBack).getTime();
     if(isWithinAMonth) return 'Updated ' + moment(date).fromNow()
     else return 'Updated on ' + moment(date).format('D MMM YYYY')
  }
  render() {
   return (
        this.props.repos ? 
        <div className="repo-list">
             {this.props.repos.length !== 0 ? this.props.repos.map((data, i) => {
                 return <div key={i} className="repo-item">
                    <h2>{data.name}</h2>
                    {data.description && <span className="desc">{data.description}</span>}
                    <div className="btm-sec">
                         {data.language && <div><span className={"language-icon " + data.language}></span><span>{data.language}</span></div>}
                         <span>{this.convertDate(data.updated_at)}</span>
                    </div>
                  </div>
             }) : <div> No Repositories found! </div>
             }
        </div>
         : <Loader />
   );
  }
 }
 export default ListRepos;
