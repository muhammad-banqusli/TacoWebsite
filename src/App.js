import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Home, About, Contact, Hours, Layout } from './components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='hours' element={<Hours />} />
      </Route>
    </Routes>
  );
}

export default App;
