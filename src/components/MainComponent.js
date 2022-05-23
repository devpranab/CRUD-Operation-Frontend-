import { Routes, Route } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import { UserProvider } from '../userContext/userContext';
import Delete from './crud/Delete';

function MainComponent() {
  return (
    <div className="App">
   <h2>CRUD Operation using React(Frontend)</h2>
   <UserProvider>
   <Routes>
        <Route path="/delete/:id" element={<Delete />}/>
        <Route path="/" element={<Home />}/>
    </Routes>
    </UserProvider>
    </div>
  );
}

export default MainComponent;