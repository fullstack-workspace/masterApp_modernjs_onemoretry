import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from '@modern-js/runtime/router';
import '@/css/style.css';

export default function PageLayout() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="content-container">
        <Outlet />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
