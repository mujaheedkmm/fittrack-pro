
import React from 'react';

export default function App() {
  return (
    <div style={{background:'#0f172a',minHeight:'100vh',color:'white',padding:'40px'}}>
      <h1 style={{fontSize:'42px'}}>Fitness Pro</h1>
      <p>Premium Fitness Dashboard</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',marginTop:'30px'}}>
        <div style={{background:'#1e293b',padding:'20px',borderRadius:'20px'}}>
          <h2>Workout Tracker</h2>
        </div>

        <div style={{background:'#1e293b',padding:'20px',borderRadius:'20px'}}>
          <h2>Diet Planner</h2>
        </div>

        <div style={{background:'#1e293b',padding:'20px',borderRadius:'20px'}}>
          <h2>Todo List</h2>
        </div>
      </div>
    </div>
  );
}
