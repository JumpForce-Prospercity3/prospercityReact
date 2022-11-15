import foto from './fotoPedro.png';
import '../../App.css';
import './TeamMemberPedro.css';

function TeamMemberPedro() {
  return (
    <div className="team-grid">
      <div className="App-TeamMember">
        <img src={foto} className="App-fotoTeamMember" alt="logo" />    
        <a href='https://github.com/Pedro' className='MemberName'>Pedro</a>
     </div>
    </div>
  );
}

export default TeamMemberPedro;