import foto from './programmerSantiago.png';
import '../../App.css';
import './TeamMemberSantiago.css';

function TeamMembersantiago() {
  return (
    <div className="team-grid">
      <div className="App-TeamMember">
        <img src={foto} className="App-fotoTeamMember" alt="logo" />    
        <a href='https://github.com/Santy149' className='MemberName'>Santiago Londoño Salgado</a>
     </div>
    </div>
  );
}

export default TeamMembersantiago;