import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='<About />' />
    </Routes>
    </>
  );
}

export default App;
