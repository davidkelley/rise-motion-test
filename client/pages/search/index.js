import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class SearchPage extends React.Component {

  static propTypes = {
    results: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired
  };

  componentDidMount() {
    document.title = `Searching: ${this.props.query}`;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h2>{this.props.query}</h2>
      </Layout>
    );
  }

}

export default SearchPage;
