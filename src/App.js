import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  );
}

function Info(){
  const title = "This app is still in progress.";
  return(
    <div>
      {title}
      <h1>Inventory System</h1>
      <p>Manage your stuff.</p>
      </div>
  )
}

function AddItem(){
  return(
    <div>
      <label for="text-form">Type somthing: </label>
      <input type="text" id = "text-form"/>
    </div>
  )
}
export default App;
