
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RightColomn from "./components/RightColomn"
import LeftColomn from "./components/LeftColomn";


function App() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative p-3 ml-[60px] sm:ml-[80px] ">
        <div className="p-2">
          <Navbar />
        </div>
      <div className='grid xl:grid-cols-3 grid-cols-1 w-full'>
        <div className="col-span-2"><LeftColomn /></div>
        <div className="w-full"><RightColomn /></div>
      </div>
      </div>
    </main>
  );
}

export default App;
