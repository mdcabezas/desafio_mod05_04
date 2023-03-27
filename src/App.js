import DataProvider from "./context/DataProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <DataProvider>
      <AppRouter />
    </DataProvider>
  );
}

export default App;
