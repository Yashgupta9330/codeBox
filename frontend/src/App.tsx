import { Routes, Route } from "react-router-dom";
import CodeLayout from './components/CodeLayout';
import Home from './pages/Home';
import Interview from './pages/Interview/Interview';
import ProblemLists from "./pages/Problems/ProblemLists";
import Login from "./pages/login";
import { StrictModeProvider } from '@/context/StrictModeContext';
import Timer from './components/Timer';

function App() {
  return (
    <StrictModeProvider>
      <main className="w-full h-full min-h-screen flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<ProblemLists />} />
          <Route path="/code/:slug" element={<CodeLayout />} />
          <Route path="/interview/:id" element={<Interview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/timer" element={<Timer startTime={0} endTime={45} />} />
        </Routes>
      </main>
    </StrictModeProvider>
  );
}

export default App;