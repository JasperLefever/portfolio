import Navbar from "./components/navbar/Navbar.tsx";
import Loading from "./components/state/Loading.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-2">
        <Loading />
      </div>
    </>
  );
}

export default App;
