import React from 'react';
import Page1 from './pages/page1';
import BarChart from './components/charts/BarChart';
import PieChart from './components/charts/PieChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Page1 />
      <BarChart />
      <PieChart />
    </div>
  );
}

export default App;
