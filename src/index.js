import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import reportWebVitals from './reportWebVitals';
import JumpForce from './components/jumpforce/JumpForce';
import { TeamItem } from './components/TeamItem/TeamItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <JumpForce />
    <TeamItem  memberName='Integrante Equipo' memberUrl='https://github.com/JumpForce-Prospercity3/prospercityReact' photoUrl='https://drive.google.com/uc?id=1zL8XgQYd1Ftjbf1w-LM8Aa0T74pZNLw3' />
    <TeamItem  memberName='Luis Alfonso Gómez Trujillo' memberUrl='https://github.com/LuisGomezTrujillo' photoUrl="https://drive.google.com/uc?id=1ngDLpH7hLFH8dU9jI9BtPlC4cQd4H_Ze"/>
    <TeamItem  memberName='Integrante Equipo' memberUrl='https://github.com/JumpForce-Prospercity3/prospercityReact' photoUrl='https://drive.google.com/uc?id=1zL8XgQYd1Ftjbf1w-LM8Aa0T74pZNLw3' />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//https://drive.google.com/file/d/1ngDLpH7hLFH8dU9jI9BtPlC4cQd4H_Ze/view?usp=share_link