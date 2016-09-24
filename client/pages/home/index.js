import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import { html } from './index.md';
import s from './styles.css';

const title = 'Search Dailymotion';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className="ui text container" dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }

}

export default HomePage;
