import { Route, Routes } from 'react-router-dom';
import NoStatePage from './pages/week3/NoStatePage';
import HomePage from './pages/default/HomePage';
import YesStatePage from './pages/week3/YesStatePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/week3/no_state" element={<NoStatePage />} />
      <Route path="/week3/yes_state" element={<YesStatePage />} />
    </Routes>
  );
}

export default App;
