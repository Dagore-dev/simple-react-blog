import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

 import Navbar from './Components/Navbar';
 import Home from './Views/Home';
 import Create from './Views/Create';
 import BlogDetails from './Views/BlogDetails';
 import NotFound from './Views/NotFound';


function App() {
  return (
    <Router>
      
      <Navbar/>

      <Routes>

        <Route path={'/'} element={<Home />}/>
        
        <Route path={'/create'} element={<Create />}/>
        
        <Route path={'/blog/:id'} element={<BlogDetails />}/>
        
        <Route path={'*'} element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
