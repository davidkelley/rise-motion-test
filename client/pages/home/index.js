import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Summary from '../../components/Summary';
import s from './styles.css';

const title = 'Dailymotion';

class HomePage extends React.Component {

  static propTypes = {
    feed: PropTypes.array.isRequired
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className="ui container">
          <div className="ui three stackable cards">
            {this.props.feed.map((item, i) => <Summary key={i} data={item}></Summary> )}
          </div>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
