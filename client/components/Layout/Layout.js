import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from '../Header';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div ref={node => (this.root = node)}>
        <Header />
        <main>
          <div {...this.props} className={cx(s.content, this.props.className)} />
        </main>
      </div>
    );
  }
}

export default Layout;
