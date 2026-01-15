import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LearningPath from './pages/LearningPath';
import Resources from './pages/Resources';
import LessonView from './pages/LessonView';
import Trending from './pages/Trending';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/lesson/:id" element={<LessonView />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
