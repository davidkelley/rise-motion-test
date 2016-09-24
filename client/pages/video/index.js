import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class VideoPage extends React.Component {

  static propTypes = {
    video: PropTypes.shape({
      title: PropTypes.string,
      url: function(props, propName, componentName) {
        if (!/^https?.+/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      }
    })
  };

  componentDidMount() {
    document.title = this.props.video.title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>{this.props.id}</h1>
      </Layout>
    );
  }

}

export default VideoPage;
