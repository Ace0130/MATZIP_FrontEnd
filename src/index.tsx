import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './app';
import ReactHelmet from './components/helmet';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ReactHelmet
        keywords="kangnam_university MATZIP"
        description="강남대학교 맛집추천"
        title="MATZIP anywhere"
        faviconURL="https://web.kangnam.ac.kr/common/plugin/syworks.design.library/template/portal/images/sub/introd/mascot01.png"
      />
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
