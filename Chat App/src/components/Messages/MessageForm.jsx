import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MessageForm extends Component{
  render(){
    return (
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input type="text" className="form-control" ref="text" placeholder="Please type a message.." />
        </form>
      </div>
    );
  }

  handleOnSubmit(e) {
      e.preventDefault();

      console.log("ok");

      this.props.emit('messageAdded', {
        timeStamp: Date.now(),
        text: this.refs.text.value.trim(),
        user: this.props.user.name
      });

      // Clean form
      this.refs.text.value = '';
  }

}

export default MessageForm
