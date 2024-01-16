import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navbar, Sidebar, Footer } from '../components/index';

interface Prices {
  Kartacze: number;
  Babka: number;
  Kiszka: number;
}

const SettingsPricesPage: React.FC = () => {
  const [data, setData] = useState<Prices | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/prices');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const pageTitle = 'Ustawienia - Ceny';
  return (
    <main>
      <Navbar pageTitle={pageTitle} />
      <div>
        {loading ? (
          <div>Ładuję...</div>
        ) : data ? (
          <div>
            <h1>Data:</h1>
            <p>ID: {data.Kartacze}</p>
          </div>
        ) : (
          <div>Dane z bazy danych są niedostępne</div>
        )}
      </div>
      <Sidebar />
      <Footer />
    </main>
  );
};

export default SettingsPricesPage;
