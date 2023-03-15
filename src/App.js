import { TaskList } from './components/TaskList';
import { Header } from './components/Header';
import './App.css';


function App() {
    const info = "Random";

  return (
    <>
        <Header />
        <TaskList info={info} />
    </>
  );
}

export default App;
