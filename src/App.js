import './App.scss';
import Sidebar from "./layout/sidebar/Sidebar";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
      <div className='App--body'>
        <Sidebar />
        <WelcomePage />

      </div>
    </div>
  );
}

export default App;
