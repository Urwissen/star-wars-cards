import './App.css';
import {Header} from "./components/Header.js"
import {Main} from "./components/Main.js"
import {Footer} from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main className='main'>
        <Main />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
