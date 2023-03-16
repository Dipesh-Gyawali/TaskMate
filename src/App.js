import { TaskList } from './components/TaskList';
import { Header } from './components/Header';
import './App.css';
import { Footer } from './components/Footer';


function App() {
    const info = "Random";

  return (
    <div className="App">
        <Header />
        <TaskList info={info} />
        <Footer />
    </div>
  );
}

export default App;
