import foto from './LuisGT.png';
import '../../App.css';
import './TeamMemberLuisGT.css';

function TeamMemberLuisGT() {
  return (
    <div className="team-grid">
      <div className="App-TeamMemberLuisGT">
        <img src={foto} className="App-fotoTeamMemberLuisGT" alt="logo" />    
        <a href='https://github.com/LuisGomezTrujillo' className='MemberNameLuisGT'>Luis Alfonso Gómez Trujillo</a>
     </div>
    </div>
  );
}

export default TeamMemberLuisGT;