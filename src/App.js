import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';
import Language from './Components/Language/Language';
import Test from './Components/Test/Test';
import NavPage from './Pages/NavPage/NavPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavPage/>} />
        <Route path='/lang/:id' element={<Language />} />
        <Route path='/quizes' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
