import Navbar from "./components/structure/navbar/Navbar.tsx";
import Footer from "./components/structure/footer/Footer.tsx";
import Alert from "./components/state/Alert.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <Alert type={"info"}>Work in progress</Alert>
      <div className="flex flex-col px-2 py-4 gap-5 m-auto max-w-4xl">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center align-middle gap-2">
            <h1 className="text-lg font-bold">Hya, I'm Jasper</h1>
            <p className="text-5xl font-extrabold accent-color">Full stack</p>
            <p className="text-5xl font-extrabold accent-color ">Developer</p>
            <a className="underline underline-offset-4 font-bold text-sm">
              Connect with me
            </a>
          </div>
          <div className="flex justify-center align-middle">
            <img
              src="https://avatars.githubusercontent.com/u/33233024?v=4"
              alt="Jasper Lefever"
              className="w-48 rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5 ">
            <p className="accent-color text-3xl font-extrabold">about</p>
            <div className="border flex-grow"></div>
          </div>
          <p className="text-lg max-w-3xl m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque, nunc eget aliquet tristique, sapien nisl ultricies
            libero, nec vehicula nisl nunc vel dolor. Quisque vel nisl vel
            libero consectetur fermentum. Nullam scelerisque, nunc eget aliquet
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5 ">
            <p className="accent-color text-3xl font-extrabold">skills</p>
            <div className="border flex-grow"></div>
          </div>
          <p className="text-lg max-w-3xl m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque, nunc eget aliquet tristique, sapien nisl ultricies
            libero, nec vehicula nisl nunc vel dolor. Quisque vel nisl vel
            libero consectetur fermentum. Nullam scelerisque, nunc eget aliquet
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5 ">
            <p className="accent-color text-3xl font-extrabold">languages</p>
            <div className="border flex-grow"></div>
          </div>
          <p className="text-lg max-w-3xl m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque, nunc eget aliquet tristique, sapien nisl ultricies
            libero, nec vehicula nisl nunc vel dolor. Quisque vel nisl vel
            libero consectetur fermentum. Nullam scelerisque, nunc eget aliquet
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5 ">
            <p className="accent-color text-3xl font-extrabold">projects</p>
            <div className="border flex-grow"></div>
          </div>
          <p className="text-lg max-w-3xl m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque, nunc eget aliquet tristique, sapien nisl ultricies
            libero, nec vehicula nisl nunc vel dolor. Quisque vel nisl vel
            libero consectetur fermentum. Nullam scelerisque, nunc eget aliquet
          </p>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <p className="accent-color text-3xl font-extrabold">
              connect with me
            </p>
            <div className="border flex-grow"></div>
          </div>
          <p className="text-lg max-w-3xl m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque, nunc eget aliquet tristique, sapien nisl ultricies
            libero, nec vehicula nisl nunc vel dolor. Quisque vel nisl vel
            libero consectetur fermentum. Nullam scelerisque, nunc eget aliquet
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
