
import { TeamItem } from './components/TeamItem/TeamItem';
import { TeamList } from './components/TeamList/TeamList';
import './App.css';
import {HeaderReact} from './components/HeaderReact/HeaderReact';
import Prospercity from './components/Prospercity/Prospercity';
import { ConvertirAMayuscula } from './components/ConvertirAMayuscula/ConvertirAMayuscula';
import React from 'react';

const defaultTeamMembers=[
  
  {
    memberName: 'Luis Alfonso Gómez Trujillo',
    gitHubUrl: 'https://github.com/LuisGomezTrujillo',
    photoUrl: 'https://drive.google.com/uc?id=1ngDLpH7hLFH8dU9jI9BtPlC4cQd4H_Ze'  
  },  

];


function App() {
  
  const TeamMembers=defaultTeamMembers;

  

  return (
    <>
        <HeaderReact/>
        <Prospercity />
        <ConvertirAMayuscula />
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
