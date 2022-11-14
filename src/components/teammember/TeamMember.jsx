import foto from './programmer.png';
import '../../App.css';
import './TeamMember.css';

function TeamMember() {
  return (
    <div className="team-grid">
      <div className="App-TeamMember">
        <img src={foto} className="App-fotoTeamMember" alt="logo" />    
        <a href='https://github.com/JumpForce-Prospercity3/prospercityReact' className='MemberName'>Integrante del Equipo</a>
     </div>
    </div>
  );
}

export default TeamMember;