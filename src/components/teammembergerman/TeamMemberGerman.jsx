import foto from './fotoGerman.png';
import '../../App.css';
import './TeamMemberGerman.css';

function TeamMemberGerman() {
  return (
    <div className="team-grid">
      <div className="App-TeamMember">
        <img src={foto} className="App-fotoTeamMember" alt="logo" />    
        <a href='https://github.com/German' className='MemberName'>German</a>
     </div>
    </div>
  );
}

export default TeamMemberGerman;