import './App.css';

// import BadgeNew from './pages/BadgeNew';
import Navbar from "./components/Navbar";
import DashBoard from './pages/DashBoard';

function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <BadgeNew /> */}
      <DashBoard />
    </div>
  );
}

export default App;
