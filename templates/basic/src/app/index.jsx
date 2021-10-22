/**
 * app/index.jsx
 */
import { Router } from 'solid-app-router';

import { Http } from '@services/http';

import Layout from './Layout/Main';
import AppRouter from './Router';
import styles from './App.module.css';

// Init http service
Http.init();

function App() {
  return (
    <div class={styles.app}>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
