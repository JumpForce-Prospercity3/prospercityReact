import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import reportWebVitals from './reportWebVitals';
import JumpForce from './components/jumpforce/JumpForce';
import TeamMember from './components/teammember/TeamMember';
import TeamMemberLuisGT from './components/teammemberluisgt/TeamMemberLuisGT';
import TeamMemberGerman from './components/teammembergerman/TeamMemberGerman';
import TeamMemberPedro from './components/teammemberPedro/TeamMemberPedro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <JumpForce />
    <TeamMemberGerman />
    <TeamMemberPedro />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMemberLuisGT/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
