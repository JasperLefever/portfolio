import Navbar from "./components/structure/navbar/Navbar.tsx";
import Footer from "./components/structure/footer/Footer.tsx";
import Alert from "./components/state/Alert.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Alert type={"info"}>Work in progress</Alert>
      <div className="px-2 py-4 flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
