import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingLogo from './components/LoadingLogo';
import HomePage from './pages/HomePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && <LoadingLogo />}
      <Routes>
        <Route path="/loading" element={<LoadingLogo />} />
        <Route path="/" element={<HomePage isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
    </Router>
  );
}

export default App;