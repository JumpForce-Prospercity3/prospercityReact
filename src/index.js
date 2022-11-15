import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import reportWebVitals from './reportWebVitals';
import JumpForce from './components/jumpforce/JumpForce';
import TeamMember from './components/teammember/TeamMember';
import TeamMemberLuisGT from './components/teammemberluisgt/TeamMemberLuisGT';
import TeamMemberSantiago from './components/teammembersantiago/TeamMemberSantiago';
import TeamMemberJeison from './components/teammemberjeison/TeamMemberJeison';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <JumpForce />
    <TeamMember />
    <TeamMember />
    <TeamMember />
    <TeamMemberJeison />
    <TeamMemberSantiago />
    <TeamMemberLuisGT/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
