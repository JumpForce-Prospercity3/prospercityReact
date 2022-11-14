import logo from './prosper.png';
import '../../App.css';

function Header() {
  return (
    <div className="App">
      <header className="App-Prospercity">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='p-Prospercity'>
          Bienvenid@ a Prospercity
        </p>
        
      </header>
    </div>
  );
}

export default Header;
