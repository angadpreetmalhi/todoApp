import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ListCom from './ListCom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


function App() {
  const [item,setItem]=useState("Add an Item");
  const [newItem,setNewItem]=useState([]);
  const itemEvent=(event)=>{
  setItem(event.target.value)
  }
  const listOfItems =()=>{
  setNewItem((preValue)=>{
  return[...preValue,item];
  });
  setItem("");
  };
  return (
  <>
    <div className="main_div">
      <div className="center_div">
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type="text" value={item}
      placeholder="Add an Item" onChange={itemEvent}/>
      <Button className="newBtn" onClick={listOfItems}>
      <AddIcon/>
      </Button>
      <br/>
      <ol>
      {
      newItem.map((val)=>{ return <ListCom text={val}/>;})
      }
      </ol>
      </div>
    </div>
    </>
  );
}

export default App;
