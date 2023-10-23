import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Componets/Funzione';
import ImageComponent from './Componets/Classe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent bottone="Benvenuto"/>
        <ImageComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYHeXekPRDAfS3eTGwrlNUnY9KXUqoAmNFg&usqp=CAU"  alt="spooky"/>
        <ImageComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHTJaxczX-MGOBmCzhwRKFeluDrfChfG-Tg&usqp=CAU"  alt="spazio"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
