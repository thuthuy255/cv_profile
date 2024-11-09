import logo from './logo.svg';
import './App.css';
import Page_home from './page/home';
import Page_blog from './page/blog';
import Page_contact from './page/contact';
import Page_portfolio from './page/portfolio';
import Page_service from './page/services';
import Page_about from './page/about';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Page_home />} />
      <Route path="/.blog" element={<Page_blog />} />
      <Route path="/.contact" element={<Page_contact />} />
      <Route path="/.portfolio" element={<Page_portfolio />} />
      <Route path="/.services" element={<Page_service />} />
      <Route path="/.about" element={<Page_about />} />
    </Routes>
    </div>
  );
}

export default App;
