import Resumen from './components/resume'
import Notas from './components/notes'
import Tarea from './components/tasks'
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
          <Tarea/>
        </div>
      </div>
    </>
  );
}

export default App;
