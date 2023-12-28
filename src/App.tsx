//import { log } from "@/lib/logger";
import NavBar from "./components/header-nav-bar";
import WorkPage from "./pages/page-work";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-[50rem]">
      <NavBar className="fixed top-[2rem] right-[4rem]" />
      <WorkPage />
    </div>
  );
}

export default App;
