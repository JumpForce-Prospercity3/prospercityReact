import {JumpForce} from './components/JumpForce/JumpForce';
import { TeamItem } from './components/TeamItem/TeamItem';
import { TeamList } from './components/TeamList/TeamList';
import './App.css';
import {HeaderReact} from './components/HeaderReact/HeaderReact';
import Prospercity from './components/Prospercity/Prospercity';
import React from 'react';

const defaultTeamMembers=[
  {
    memberName: 'Jeison Stiven Lopez Castro',
    gitHubUrl: 'https://github.com/Jeisonlopez259911',
    photoUrl: 'https://drive.google.com/uc?id=1zL8XgQYd1Ftjbf1w-LM8Aa0T74pZNLw3'
  },
  {
    memberName: 'Santiago Londoño Salgado',
    gitHubUrl: 'https://github.com/Santy149',
    photoUrl: 'https://drive.google.com/uc?id=1zL8XgQYd1Ftjbf1w-LM8Aa0T74pZNLw3'
  },
  {
    memberName: 'Carlos',
    gitHubUrl: 'https://github.com/JumpForce-Prospercity3/prospercityReact',
    photoUrl: 'https://drive.google.com/uc?id=1zL8XgQYd1Ftjbf1w-LM8Aa0T74pZNLw3'
  },
  {
    memberName: 'Alex',
    gitHubUrl: 'https://github.com/JumpForce-Prospercity3/prospercityReact',
    photoUrl: 'https://drive.google.com/uc?id=1zL8XgQYd1Ftjbf1w-LM8Aa0T74pZNLw3'
  },
  {
    memberName: 'Jose',
    gitHubUrl: 'https://github.com/JumpForce-Prospercity3/prospercityReact',
    photoUrl: 'https://drive.google.com/uc?id=1zL8XgQYd1Ftjbf1w-LM8Aa0T74pZNLw3'
  },
  {
    memberName: 'Luis Alfonso Gómez Trujillo',
    gitHubUrl: 'https://github.com/LuisGomezTrujillo',
    photoUrl: 'https://drive.google.com/uc?id=1QWJTEXnWP6TEBke6c2ikUYI58nKzuzUb'  
  },

];


function App() {
  
  const TeamMembers=defaultTeamMembers;

  

  return (
    <>
        <HeaderReact/>
        <Prospercity />
        <JumpForce /> 
        <TeamList>
          {
            TeamMembers.map(TeamMember=>(
              <TeamItem key={TeamMember.memberName} memberName={TeamMember.memberName} gitHubUrl={TeamMember.gitHubUrl} photoUrl={TeamMember.photoUrl}/>
            )
          )};          
        </TeamList>
        
    </>
  );
  
}

export default App;
