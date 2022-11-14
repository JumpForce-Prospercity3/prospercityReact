import logo from './logo_jumpforce.png';
import '../../App.css';
import './JumpForce.css';

function JumpForce() {
  return (
    <div className="App">
      <header className="App-JumpForce">
        <img src={logo} className="App-logoJumpForce" alt="logo" />
        <p>
          Aqui los saluda el equipo JumpForce
        </p>
        <nav>
          <ul>
            <li>
              <a href='https://github.com/Jeisonlopez259911'>Jeison Stiven</a>
            </li>
            <li>
            <a href='https://github.com/LuisGomezTrujillo'>Luis Alfonso Gómez Trujillo</a>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
        
      </header>
    </div>
  );
}

export default JumpForce;