import logo_react from './logo_react.svg';
import './HeaderReact.css';
import '../../App.css';

function HeaderReact(){
    return (
    <div className="App">
        <header className="App-header">
            <img src={logo_react} className="App-logo" alt="logo" />
            <p>
            
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Aprendiendo REACT en Prospercity
            </a>
        </header>
        </div>
    );
}

export {HeaderReact};