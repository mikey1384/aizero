import './styles.css';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAlignJustify } from '@fortawesome/pro-solid-svg-icons/faAlignJustify';
import App from './containers/App';

library.add(faAlignJustify);

const rootElement = document.getElementById('root');
const root = rootElement
  ? ReactDOM.createRoot(rootElement)
  : ReactDOM.createRoot(document.createElement('div'));

root.render(
  <BrowserRouter>
    <ErrorBoundary componentPath="AppContext">
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);
