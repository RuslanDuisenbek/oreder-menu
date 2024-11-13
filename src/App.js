import './App.css';
import Sidebar from './component/Sidebar/Sidebar'
import Feed from'./component/Feed/Feed'
import RightSidebar from './component/RightSidebar/RightSidebar'
import './tail.css'

function App() {
  return (
    <div className="App flex flex-row w-full space-x-4">
     <Sidebar className="flex-1 bg-blue-500 p-4"/>
      <Feed className="flex-1 bg-gray-500 p-4" />
      <RightSidebar className="flex-1 bg-green-500 p-4"/>

    </div>
  );
}

export default App;
