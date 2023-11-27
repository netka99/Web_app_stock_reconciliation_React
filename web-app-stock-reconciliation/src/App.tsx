import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components/index';
import {
  HomePage,
  SalePage,
  SummaryPage,
  GraphsPage,
  SettingsPage,
  // SettingsPricesPage,
  // SettingsShopsPage,
} from './pages/index';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="sprzedaz" element={<SalePage />} />
        <Route path="zestawienie" element={<SummaryPage />} />
        <Route path="wykresy" element={<GraphsPage />} />
        <Route path="ustawienia" element={<SettingsPage />} />
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
