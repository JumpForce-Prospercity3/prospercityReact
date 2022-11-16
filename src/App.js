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
    photoUrl: 'https://drive.google.com/uc?id=1OdCgof7erO9UnBMugD8oE1o_OLJyMx9p'
  }, 
  {
    memberName: 'Santiago Londoño Salgado',
    gitHubUrl: 'https://github.com/Santy149',
    photoUrl: 'https://drive.google.com/uc?id=1Aab9RCtUiQ_kT8Q8z4Lb79mnVtizkCCH'
  }, 
  {
    memberName: 'Carlos Alberto Orozco Ospina',
    gitHubUrl: 'https://github.com/charlie1978',
    photoUrl: 'https://avatars.githubusercontent.com/u/41816057?v=4'
  },
  {
    memberName: 'Juan José Cardona Ramírez',
    gitHubUrl: 'https://github.com/juanirmao',
    photoUrl: 'https://drive.google.com/uc?id=1hE1qK9BOn-4vcJvI1bZlCZh-1YpNYe-d' 
  }, 
  {
    memberName: 'Luis Alfonso Gómez Trujillo',
    gitHubUrl: 'https://github.com/LuisGomezTrujillo',
    photoUrl: 'https://drive.google.com/uc?id=1ngDLpH7hLFH8dU9jI9BtPlC4cQd4H_Ze'  
  },
  {
    memberName: 'Alex',
    gitHubUrl: 'https://github.com/JumpForce-Prospercity3/prospercityReact',
    photoUrl: 'https://drive.google.com/uc?id=1zL8XgQYd1Ftjbf1w-LM8Aa0T74pZNLw3'
  }

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
