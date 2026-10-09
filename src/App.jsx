import NavBar from "./components/NavBar";
import Background from "./components/Background";
import Header from "./components/Header";
import About from "./components/About";
import WorkMode from "./components/WorkMode";

function App() {
  return (
    <div className="relative w-screen min-h-screen ">
       
      <Background/>
      
       
     <div className="relative z-10">
      <NavBar />
      <Header />
      <About />
      <WorkMode />
     </div>
    </div>
  );
}

export default App;
