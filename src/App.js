import './App.scss';
import Sidebar from "./layout/sidebar/Sidebar";
import ChatPage from "./pages/ChatPage/ChatPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
      <div className='App--body'>
        <Sidebar />
        {/* <WelcomePage /> */}
        <ChatPage />

      </div>
    </div>
  );
}

export default App;
