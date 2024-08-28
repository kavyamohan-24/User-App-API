import logo from './logo.svg';
import './App.css';
import AddUsers from './components/AddUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchUsers from './components/SearchUsers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddUsers/>}/>
      <Route path="/search" element={<SearchUsers/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
