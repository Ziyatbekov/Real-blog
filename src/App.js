import './App.css';
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import CreatePost from './pages/CreatePost/CreatePost';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPAge/RegisterPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path='/posts/:id' element={<SinglePostPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
