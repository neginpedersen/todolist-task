import React, { Component } from "react";
import ToDoList from './components/ToDoList';
import Modal from './components/Modal';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let toDoItems = [
  {
    name: 'Click on the create to create task',
    subtitle:'you can write subtitle',
    notes: 'notes notes notes',
    subask: 'subtask',
    priority: true,
    completed: false
  },
  {
    name: 'Click on the pen to edit task',
    completetd: false,
    priority: true,
    completed: false
  },
  {
    name: 'Click trash to remove task',
    completed: false,
    priority: false
  },
  {
    name: "Click on it to mark as complete",
    completed: false,
    priority: false
  },
  {
    name: "Click on the clock to mark as priority",
    completed: false,
    priority: false
  }

];

const Color='red';

if (localStorage.getItem("toDoItems") === null || localStorage.getItem("toDoItems") ===  undefined) {
   localStorage.setItem('toDoItems', toDoItems);
   console.log('3');
 }
else if (localStorage.getItem("toDoItems")==true) {
   toDoItems =JSON.parse(localStorage.getItem("toDoItems"));
   console.log('4');

}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems:toDoItems,
      showmodal:false,
      doolColor:Color
    };
    this.HandleModalclose=this.HandleModalclose.bind(this);
    this.Onshowmodal=this.Onshowmodal.bind(this);
  }

  createItem(itemtitle,itemsubtitle,itemnotes,subtask) {
    this.state.toDoItems.unshift({
      name: itemtitle,
      subtitle: itemsubtitle,
      notes: itemnotes,
      subtask: subtask,
      completed: false,
      priority: false
    });
    this.setState({
      toDoItems: this.state.toDoItems
    });
    localStorage.setItem('toDoItems', JSON.stringify(this.state.toDoItems));

  }

  findItem(item) {
    return this.state.toDoItems.filter((element) => element.name === item)[0];
  }

  toggleComplete(item) {
    let selectedItem = this.findItem(item);
    selectedItem.completed = !selectedItem.completed;
    this.setState({ toDoItems: this.state.toDoItems });
  }

  togglePriority(item) {
    let selectedItem = this.findItem(item);
    selectedItem.priority = !selectedItem.priority;
    this.setState({ toDoItems: this.state.toDoItems });
  }

  saveItem(oldItem, newItemname,newItemsubtilte,newItemnotes ) {
    let selectedItem = this.findItem(oldItem);
    selectedItem.name = newItemname;
    selectedItem.subtitle = newItemsubtilte;
    selectedItem.notes = newItemnotes;

    this.setState({ toDoItems: this.state.toDoItems });
    localStorage.setItem('toDoItems', JSON.stringify(this.state.toDoItems));
  }

  deleteItem(item) {
    let index = this.state.toDoItems.map(element => element.name).indexOf(item);
    this.state.toDoItems.splice(index, 1);
    this.setState({ toDoItems: this.state.toDoItems });
    localStorage.setItem('toDoItems', JSON.stringify(this.state.toDoItems));

  }
  HandleModalclose() {
    this.setState({showmodal:false});
    console.log('closed modal');
  }
  Onshowmodal(){
    this.setState({showmodal:true});
    console.log('show clicked');
  }

  render() {
    return (
      <div className="to-do-app">
        <div className="to-do-app-header">

          <div className='plus-cont main-color-2'>
          <FontAwesomeIcon icon={faPlus} onClick={this.Onshowmodal} />
          <p>Add to do</p>
          </div>
        </div>
        <Modal show={this.state.showmodal} onclose={this.HandleModalclose}  createItem={this.createItem.bind(this)} toDoItems={this.state.toDoItems} ></Modal>
        <div className='to-do-app-main'>
        <ToDoList toDoItems={this.state.toDoItems} deleteItem={this.deleteItem.bind(this)} saveItem={this.saveItem.bind(this)} togglePriority={this.togglePriority.bind(this)} toggleComplete={this.toggleComplete.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
