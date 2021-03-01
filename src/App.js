import CollapsibleTable from "./Compontes/tabelas";
import { SelectedContexts } from "./hooks/SelectedContext";

function App() {
  return (
    <SelectedContexts>
      <div className="App">
        <CollapsibleTable />
      </div>
    </SelectedContexts>
  );
}

export default App;
