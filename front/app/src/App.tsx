import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ExhausterCard } from './components/ExhausterCard/ExhausterCard';

function App() {
  const bearingExample = [{bearingName: "№1 п-к", bearingTemperature: 40, bearingVibration: 2323}, {bearingName: "№2 п-к", bearingTemperature: -11, bearingVibration: 1356}, {bearingName: "№3 п-к", bearingTemperature: 32, bearingVibration: 9011},{bearingName: "№4 п-к", bearingTemperature: 10, bearingVibration: 883}]
  const obj = {exhausterName: 'Эксгаустер №124', exhausterStatus: 'working', rotorName: "Ротор №202", rotorReplacementDate: "22/05/2022", rotorWorkingDate: "6 дней", rotorEstimatedFailureDate: "2 дня", bearingsInfo: bearingExample}
  return (
    <div className="app app_container">
      <ExhausterCard exhausterItem={obj}></ExhausterCard>
    </div>
  );
}

export default App;
