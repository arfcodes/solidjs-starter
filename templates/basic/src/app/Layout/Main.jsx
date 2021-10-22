/**
 * app/Layout/Main.js
 */
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="root">
      <Header />
      <main className="main">
        <div className="content">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
