import { log } from "@/lib/logger";
import WorkPage from "./pages/page-work";

function App() {
  log.debug("Hello, world!");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <WorkPage />
    </div>
  );
}

export default App;
