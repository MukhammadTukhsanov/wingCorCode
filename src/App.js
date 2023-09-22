import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Team from './components/Team';

function App() {
  return (
    <>
    <Routes>
      <Route path={"/"} element={<About />} />
      <Route path={"/team"} element={<Team />} />
    </Routes>
    </>
  );
}

export default App;
