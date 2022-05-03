import React from 'react';
import '../styling/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faCheck, faTrash, faWindowClose, faClock, faBell } from '@fortawesome/fontawesome-free-solid';

class ToDoListItem extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        editing: false

      };
    }

    renderName() {
      const itemStyle = {
        'text-decoration': this.props.completed ? 'line-through' : 'none',
        cursor: 'pointer',
        'color': this.props.priority ? 'red' : '#1E394B'
      };

      if(this.state.editing) {
        return (
            <form className='edittodo' onSubmit={this.onSaveClick.bind(this)}>
              <label>Todo Name:
              <input type="text" ref="editInputname" defaultValue={this.props.name} /> </label>
              <label>Todo SubTitle:
              <input type="text" ref="editInputsubtitle" defaultValue={this.props.subtitle} /> </label>
              <label>Todo Notes:
              <input type="text" ref="editInputnotes" defaultValue={this.props.notes} /> </label>
            </form>
        );
      }

      return (
      <div className='todo-item-itself' style={itemStyle} onClick={this.props.toggleComplete.bind(this, this.props.name)}>
              <div className='flex-row'>
                    <span class='task-title'>{this.props.name}</span>
              </div>
              <div class='divider'> </div>
              <div>{this.props.subtitle}</div>
              <div>{this.props.notes}</div>
              <div style={itemStyle} onClick={this.props.toggleComplete.bind(this, this.props.name)}>{this.props.subtask}</div>

        </div>
      );
    }

    renderButtons() {
      if (this.state.editing) {
        return (
          <span>
          <FontAwesomeIcon icon={faCheck} onClick={this.onSaveClick.bind(this)} />
          <FontAwesomeIcon icon={faWindowClose} onClick={this.onCancelClick.bind(this)} />
          </span>
        );
      }

      return (
        <span>
          <FontAwesomeIcon className="faicons2" icon={faEdit} onClick={this.onEditClick.bind(this)} />
          <FontAwesomeIcon className="faicons2" onClick={this.props.deleteItem.bind(this, this.props.name)} icon={faTrash} />
        </span>
      );
    }



    onEditClick() {
      this.setState({ editing: true });
    }

    onCancelClick() {
      this.setState({ editing: false });
    }

    onSaveClick(e) {
      e.preventDefault();
      this.props.saveItem(this.props.name, this.refs.editInputname.value, this.refs.editInputsubtitle.value, this.refs.editInputnotes.value  );
      this.setState({ editing: false });
    }

    render() {
      return (
        <div className="to-do-item">
                <FontAwesomeIcon className="priority" icon={faBell} onClick={this.props.togglePriority.bind(this, this.props.name)} />

                {this.renderName()}

                <div className="actions">
                {this.renderButtons()}
                </div>


        </div>
      );
    }
  }


  export default ToDoListItem;