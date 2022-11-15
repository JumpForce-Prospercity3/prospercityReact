import {JumpForce} from './components/JumpForce/JumpForce';
import { TeamItem } from './components/TeamItem/TeamItem';
import { TeamList } from './components/TeamList/TeamList';
import './App.css';
import {HeaderReact} from './components/HeaderReact/HeaderReact';
import Prospercity from './components/Prospercity/Prospercity';
import React from 'react';

const defaultTeamMembers=[
  {
    memberName: 'Jeison',
    gitHubUrl: 'https://github.com/JumpForce-Prospercity3/prospercityReact',
    photoUrl: 'https://drive.google.com/uc?id=1zL8XgQYd1Ftjbf1w-LM8Aa0T74pZNLw3'
  },
  {
    memberName: 'Santiago',
    gitHubUrl: 'https://github.com/JumpForce-Prospercity3/prospercityReact',
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
    photoUrl: 'https://drive.google.com/uc?id=1ngDLpH7hLFH8dU9jI9BtPlC4cQd4H_Ze'
  },

];


function App() {
  
  const [TeamMembers, setTeamMembers]=React.useState(defaultTeamMembers);

  

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
        {/*<CreateItem /> */}
    </>
  );
  
}

export default App;
