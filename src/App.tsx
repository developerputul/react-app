import ListGroup from "./components/ListGroup/ListGroup";
import './App.css';

function App(){
  const items = ["Chittagong", "Bandarban", "Dhaka", "Khulna"];

return (
  <div>
    <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
  </div>
);

}

export default App;