import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Activity from './pages/Activity/Activity.jsx';
import Main from './pages/Main/Main';
import Profile from './pages/Profile/Profile.jsx';
import StoryPage from './pages/StoryPage/StoryPage.jsx';
import GetServices from "./api/getServices.js";
import st1 from "./assets/images/story1.png";
import ava from "./assets/images/ava.png";
import ava2 from "./assets/images/ava2.png";
import ava3 from "./assets/images/ava2.png";
import ava4 from "./assets/images/ava2.png";



function App() {

  const [data, setData] = useState(false);

  async function getArray(){
    const array  = await GetServices.getData()
      setData(array.data);
  }
      useEffect(() => {
  getArray()},[])

            if (!data) {
              return <div>Загрузка...</div>;
            }
            return (
    <Router>
      <Routes>
        <Route path="/activity" element={<Activity data = {data}/>} />
        <Route path="/story/:id" element={<StoryPage data = {data.stories}/>}/>
        <Route path="/" element={<Profile data = {data} />} />
        <Route path="/auth" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
