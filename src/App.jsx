import { Routes, Route } from 'react-router-dom';
import Create from './Create';
import Dashboard from './Dashboard';

function App() {
  

  

  return (
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
