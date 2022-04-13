import React from 'react';
import '../styling/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faCheck, faTrash } from '@fortawesome/fontawesome-free-solid';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>

        <FontAwesomeIcon className="faicons2" onClick={() => {
            props.deleteItem(item.key)
        }} icon={faTrash} />
        <FontAwesomeIcon icon={faCheck} className="faicons2" onClick={() => {
            props.doneItem(item.key)
        }} />
         <FontAwesomeIcon icon={faEdit} className="faicons2" onClick={() => {

        }} />
        </span>
     </p>
    </div>})

  }

  export default ListItems;