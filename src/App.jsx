import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingLogo from './components/LoadingLogo';

import HomePage from './pages/HomePage';
import RedCockadedWoodpecker from './pages/RedCockadedWoodpecker';

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && <LoadingLogo />}
      <Routes>
        <Route path="/loading" element={<LoadingLogo />} />
        <Route path="/" element={<HomePage isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="/red-cockaded-woodpecker" element={<RedCockadedWoodpecker />} />
      </Routes>
    </Router>
  );
}

export default App;