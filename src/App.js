import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <hr></hr>
      <About />
      <hr></hr>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
