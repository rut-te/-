//import './App.css'
import Home from './components/js/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import DefaultPage from './components/js/DefaultPage.jsx';
import UserInfo from './components/js/UserInfo.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultPage string={"Corona Management System😷"} />} />
          <Route path="/home"  >
            <Route index element={<Home />} />
            <Route path=":userId" element={<UserInfo />} />
          </Route>
        <Route path="*" element={<DefaultPage string={"oops the page you want arn't found😚"} />} /> 
      </Routes >
    </>
  )
}

export default App
