import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Widget from './Components/Widget';
import './scss/index.scss';

function App() {
  return (
    <div className="app">
      {/*  header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widget */}
        <Widget />
      </div>
    </div>
  );
}

export default App;
