import { Route, Routes } from 'react-router-dom';
import NoStatePage from './pages/week3/NoStatePage';
import HomePage from './pages/default/HomePage';
import YesStatePage from './pages/week3/YesStatePage';
import ControlledPage from './pages/week4/ControlledPage';
import UnControlledPage from './pages/week4/UnControlledPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/week3/no_state" element={<NoStatePage />} />
      <Route path="/week3/yes_state" element={<YesStatePage />} />
      <Route path="/week4/controlled" element={<ControlledPage />} />
      <Route path="/week4/uncontrolled" element={<UnControlledPage />} />
    </Routes>
  );
}

export default App;
