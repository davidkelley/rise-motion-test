import React, { PropTypes } from 'react';
import moment from 'moment';
import cx from 'classnames';
import Link from '../Link';
import s from './Summary.css';

class Summary extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      created_time: PropTypes.integer,
      'owner.avatar_120_url': PropTypes.string,
      'owner.username': PropTypes.string,
      'channel.name': PropTypes.string,
    })
  };

  prop(key) {
    return this.props.data[key];
  }

  created_in_time_ago() {
    try {
      return moment(parseInt(this.props.data.created_time) * 1000).fromNow()
    } catch(e) {
      'Unknown';
    }
  }

  render() {
    let { id, title } = this.props.data;
    var ago = this.created_in_time_ago();

    return (
      <Link to={`/video/${id}`} className="ui card">
        <div className="content">
          <div className="right floated meta">{ago}</div>
          <img className="ui avatar image" src={this.prop('owner.avatar_120_url')} /> {this.prop('owner.username')}
        </div>
        <div className="content">
          <div className={`${s.ellipsis} header`}>{title}</div>
          <div className="meta">{this.prop('channel.name')}</div>
        </div>
      </Link>
    );
  }

}

export default Summary;
