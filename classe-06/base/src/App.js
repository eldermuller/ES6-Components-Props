import UserCard from './components/UserCard';
import './App.css';
import MarioHisashi from './assets/mario-hisashi.png';
import KelvinCosta from './assets/kelvin-costa.png';
import CharlesSantos from './assets/charles-santos.png';
import AnnaBia from './assets/anna-bia.png';

const users = [
  {
    id: 1,
    name: 'Kelvin Costa',
    userName: '@costa',
    followers: 140,
    following: 207,
    avatar: KelvinCosta
  },
  {
    id: 2,
    name: 'Charles Santos',
    userName: '@charles.santos',
    followers: 302,
    following: 419,
    avatar: CharlesSantos
  },
  {
    id: 3,
    name: 'Anna Bia',
    userName: '@anab',
    followers: 842,
    following: 150,
    avatar: AnnaBia
  },
  {
    id: 4,
    name: 'Mario Hisashi',
    userName: '@hisashi',
    followers: 28,
    following: 17,
    avatar: MarioHisashi
  }
];

function App() {
  return (
    <div className="container">
      {users.map((user) => (
        <UserCard
          key={user.id}
          avatar={user.avatar}
          userName={user.userName}
          name={user.name}
          followers={user.followers}
          following={user.following}
        />
      ))}
    </div>
  );
}

export default App;
