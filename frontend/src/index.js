import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Main from './pages/Main/Main';
import Profile from './pages/Profile/Profile.jsx';
import ava from './assets/images/ava.png';
import ava2 from './assets/images/ava2.png';
import ava3 from './assets/images/ava2.png';
import ava4 from './assets/images/ava2.png';
import st1 from './assets/images/story1.png';
import st2 from './assets/images/story2.png';
import st3 from './assets/images/story3.png';
import st4 from './assets/images/story4.png';


let data={
  login: 'Maximus',
  username: 'Максим Мараканский',
  path: ava, 
  follow: '120',
  followers: '2300',
  premium_followers: '300',
  time: 'с 21:00 по 22:00',
  day: 'Пятница',
  stories: [
    {
      status: 'active',
      path: st1,
      views: 2300,
      likes: 165,
      date: '07.10.23 в 20:00'
    },{
      status: 'active',
      path: st2,
      views: 1750,
      likes: 46,
      date: '06.10.23 в 20:32'
    },
    {
      status: 'active',
      path: st3,
      views: 2608,
      likes: 28,
      date: '08.10.23 в 08:17'
    },
    {
      status: 'active',
      path: st1,
      views: 2300,
      likes: 165,
      date: '07.10.23 в 20:00'
    },{
      status: 'active',
      path: st2,
      views: 1750,
      likes: 46,
      date: '06.10.23 в 20:32'
    },
    {
      status: 'active',
      path: st3,
      views: 2608,
      likes: 28,
      date: '08.10.23 в 08:17'
    },
    {
      status: 'archive',
      path: st4,
      views: 808,
      likes: 65,
      date: '16.10.23 в 19:12'
    },
    {
      status: 'archive',
      path: st3,
      views: 2608,
      likes: 28,
      date: '08.10.23 в 08:17'
    },
    {
      status: 'active',
      path: st1,
      views: 2300,
      likes: 165,
      date: '07.10.23 в 20:00'
    },{
      status: 'active',
      path: st2,
      views: 1750,
      likes: 46,
      date: '06.10.23 в 20:32'
    },
    {
      status: 'active',
      path: st3,
      views: 2608,
      likes: 28,
      date: '08.10.23 в 08:17'
    },
    {
      status: 'active',
      path: st1,
      views: 2300,
      likes: 165,
      date: '07.10.23 в 20:00'
    },{
      status: 'active',
      path: st2,
      views: 1750,
      likes: 46,
      date: '06.10.23 в 20:32'
    },
    {
      status: 'active',
      path: st3,
      views: 2608,
      likes: 28,
      date: '08.10.23 в 08:17'
    },
    {
      status: 'archive',
      path: st4,
      views: 808,
      likes: 65,
      date: '16.10.23 в 19:12'
    },
    {
      status: 'archive',
      path: st3,
      views: 2608,
      likes: 28,
      date: '08.10.23 в 08:17'
    },
    {
      status: 'active',
      path: st1,
      views: 2300,
      likes: 165,
      date: '07.10.23 в 20:00'
    },{
      status: 'active',
      path: st2,
      views: 1750,
      likes: 46,
      date: '06.10.23 в 20:32'
    },
    {
      status: 'active',
      path: st3,
      views: 2608,
      likes: 28,
      date: '08.10.23 в 08:17'
    },
    {
      status: 'active',
      path: st1,
      views: 2300,
      likes: 165,
      date: '07.10.23 в 20:00'
    },{
      status: 'active',
      path: st2,
      views: 1750,
      likes: 46,
      date: '06.10.23 в 20:32'
    },
    {
      status: 'active',
      path: st3,
      views: 2608,
      likes: 28,
      date: '08.10.23 в 08:17'
    },
    {
      status: 'archive',
      path: st4,
      views: 808,
      likes: 65,
      date: '16.10.23 в 19:12'
    },
    {
      status: 'archive',
      path: st3,
      views: 2608,
      likes: 28,
      date: '08.10.23 в 08:17'
    },
    {
      status: 'archive',
      path: st4,
      views: 808,
      likes: 65,
      date: '16.10.23 в 19:12'
    }
  ],
  auditory: [
    {path: ava,
    username: 'Валерий Остроухов',
    views: 750,
    likes: 20,
    status: 'В сети'},
    {path: ava2,
    username: 'Ольга Сафонова',
    views: 1500,
    likes: 157,
    status: 'В сети'},
    {path: ava3,
    username: 'Лариса Петрова',
    views: 400,
    likes: 36 ,
    status: 'Бал(а) недавно'},
    {path: ava4,
    username: 'Марина Решетникова',
    views: 730,
    likes: 103,
    status: 'Бал(а) 8 минут назад'},
  ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Profile data = {data} />      
    
  </React.StrictMode>
);


