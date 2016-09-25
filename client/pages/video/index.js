import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Summary from '../../components/Summary';
import s from './styles.css';

class VideoPage extends React.Component {

  static propTypes = {
    video: PropTypes.object,
    related: PropTypes.array.isRequired
  };

  componentDidMount() {
    document.title = this.props.video.title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className="ui container">
          <Card data={this.props.video}></Card>
          <h3 className="ui header">Related Videos</h3>
          <div className="ui three stackable cards">
            {this.props.related.map((item, i) => <Summary key={i} data={item}></Summary> )}
          </div>
        </div>
      </Layout>
    );
  }

}

export default VideoPage;
