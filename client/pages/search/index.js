import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Summary from '../../components/Summary';
import s from './styles.css';

class SearchPage extends React.Component {

  static propTypes = {
    results: PropTypes.array.isRequired
  };

  componentDidMount() {
    document.title = `Searching`;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className="ui container">
          <div className="ui three stackable cards">
            {this.props.results.map((item, i) => <Summary key={i} data={item}></Summary> )}
          </div>
        </div>
      </Layout>
    );
  }

}

export default SearchPage;
