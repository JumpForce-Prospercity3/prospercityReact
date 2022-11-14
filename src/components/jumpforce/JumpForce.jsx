import logo from './logo_jumpforce.png';
import '../../App.css';
import './JumpForce.css';

function JumpForce() {
  return (
    <div className="App">
      <div className="App-JumpForce">
        <img src={logo} className="App-logoJumpForce" alt="logo" />
        <p>
          Aqui los saluda el equipo <a href='https://github.com/JumpForce-Prospercity3' className='MemberName'>JumpForce</a>
        </p>
       
        
      </div>
    </div>
  );
}

export default JumpForce;