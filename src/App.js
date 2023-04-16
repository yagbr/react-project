import logo from './logo.svg';
import {Routes , Route} from 'react-router-dom';
import './App.css';
import HomePage from './componets/home';
function App() {
  return (
     <Routes>
        <Route path="/" element={<HomePage/>}></Route>
     </Routes>
  );
}

export default App;
