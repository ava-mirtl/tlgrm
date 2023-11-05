import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Activity from './pages/Activity/Activity.jsx';
import Main from './pages/Main/Main';
import Profile from './pages/Profile/Profile.jsx';
import Story from './components/Story.jsx';
import GetServices from "./api/getServices.js";



function App() {  
  
  const [data, setData] = useState(false);
  

  async function getArray(){
    const array  = GetServices.getData()
    setData(array)
  }
      useEffect(() => {
  getArray()},[])
  
            if (!data) {
              return <div>Загрузка...</div>;
            } 
            return (
    <Router>
      <Profile data = {data} />      
      <Story data={data.stories}/>
      <Activity />
      <Main/>
    </Router>
  );
}

export default App;
