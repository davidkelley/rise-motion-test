import React, { PropTypes } from 'react';
import moment from 'moment';
import cx from 'classnames';
import s from './Card.css';
import $ from 'jquery';

class Card extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      comments_total: PropTypes.integer,
      created_time: PropTypes.integer,
      'owner.avatar_120_url': PropTypes.string,
      'owner.username': PropTypes.string,
      'channel.name': PropTypes.string,
      embed_url: function(props, propName, componentName) {
        if (!/^https?.+/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      }
    })
  };

  created_in_time_ago() {
    return moment(parseInt(this.props.data.created_time) * 1000).fromNow()
  }

  prop(key) {
    return this.props.data[key];
  }

  render() {
    let { comments_total, embed_url, created_time, description, title } = this.props.data;

    return (
      <div className="ui fluid card">
        <div className="content">
          <div className="right floated meta">{this.created_in_time_ago()}</div>
          <img className="ui avatar image" src={this.prop('owner.avatar_120_url')} /> {this.prop('owner.username')}
        </div>
        <div className="image">
          <div id="vid-embed" className="ui embed" ref={(ref) => $(ref).embed()} data-url={embed_url}></div>
        </div>
        <div className="content">
          <div className="ellipsis header">{title}</div>
          <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="extra content">
          <span className="right floated">
            {this.prop('channel.name')}
          </span>
          <span>
            <i className="comment icon"></i>
            {comments_total} comments
          </span>
        </div>
      </div>
    );
  }

}

export default Card;
