import { log } from "@/lib/logger";

function App() {
  log.debug("Hello, world!");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      Hello, world
    </div>
  );
}

export default App;
