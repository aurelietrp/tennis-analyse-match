import React, { useState } from 'react';

export default function App() {
  const [stats, setStats] = useState({
    firstServe: 0,
    secondServe: 0,
    faults: 0,
    winners: 0,
  });

  const increment = (key) => {
    setStats(prev => ({ ...prev, [key]: prev[key] + 1 }));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', backgroundColor: '#f0f8ff' }}>
      <h1 style={{ color: '#1e90ff' }}>Analyse Match Tennis 🎾</h1>
      <div>
        <button onClick={() => increment('firstServe')}>1er service +1</button>
        <button onClick={() => increment('secondServe')}>2e service +1</button>
        <button onClick={() => increment('faults')}>Faute directe +1</button>
        <button onClick={() => increment('winners')}>Point gagnant +1</button>
      </div>
      <h2>Statistiques :</h2>
      <ul>
        <li>1er Service : {stats.firstServe}</li>
        <li>2e Service : {stats.secondServe}</li>
        <li>Fautes Directes : {stats.faults}</li>
        <li>Points Gagnants : {stats.winners}</li>
      </ul>
    </div>
  );
}