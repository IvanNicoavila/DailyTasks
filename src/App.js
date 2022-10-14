import Resumen from './components/resume'
import Notas from './components/notes'
import Tareas from './components/tasks'
import './App.css';

function App() {
  return (
    <>
      <div className="app">
        <div>
          <Resumen />
          <Notas/>
        </div>
        <div>
          <Tareas/>
        </div>
      </div>
    </>
  );
}

export default App;
