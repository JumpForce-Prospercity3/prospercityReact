import foto from './programmerJeison.png';
import '../../App.css';
import './TeamMemberJeison.css';

function TeamMember() {
  return (
    <div className="team-grid">
      <div className="App-TeamMember">
        <img src={foto} className="App-fotoTeamMember" alt="logo" />    
        <a href='https://github.com/Jeisonlopez259911' className='MemberName'>Jeison Stiven Lopez Castro</a>
     </div>
    </div>
  );
}

export default TeamMember;