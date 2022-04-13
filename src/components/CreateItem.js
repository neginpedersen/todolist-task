import React from 'react';
import '../styling/style.scss';


class CreateItem extends React.Component {
  constructor(props){
    super(props);
     let priority = true;
     this.newItemInput = React.createRef();
     this.newItemsubTitle = React.createRef();
     this.newItemnotes = React.createRef();
     this.newItemsubtask = React.createRef();
    }

  handleCreate(e) {
      e.preventDefault();

      if (!this.newItemInput.current.value) {
        alert('Please enter a task name.');
        return;
      } else if (this.props.toDoItems.map(element => element.name).indexOf(this.newItemInput.current.value) != -1) {
        alert('This one already exists.');
        this.newItemInput.current.value = '';
        this.newItemsubTitle.current.value = '';
        this.newItemnotes.current.value = '';
        this.newItemsubtask.current.value = '';
        return;
      }

      this.props.createItem(this.newItemInput.current.value,this.newItemsubTitle.current.value,this.newItemnotes.current.value,this.newItemsubtask.current.value);
      this.newItemInput.current.value = '';
      this.newItemsubTitle.current.value = '';
      this.newItemnotes.current.value = '';
      this.newItemsubtask.current.value = '';

    }

    render() {
      return (
        <div className="create-new">
          <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="New Task" ref={this.newItemInput} />
            <input type="text" placeholder="subTitle" ref={this.newItemsubTitle} />
            <input type="text" placeholder="Notes" ref={this.newItemnotes} />
            <input type="text" placeholder="subTask" ref={this.newItemsubtask} />
            <button>Create</button>
          </form>
        </div>
      );
    }
  }


  export default CreateItem;