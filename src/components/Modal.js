import React, { Component } from 'react';
import CreateItem from './CreateItem';
import '../styling/style.scss';
class Modal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={this.props.show ? "mymodal display-block" : "mymodal display-none"}>
            <section className="mymodal-main">
              <button className='close-modal' onClick={this.props.onclose} >
                   x
              </button>
                <CreateItem></CreateItem>
            </section>
        </div>
        );
    }
}

export default Modal;