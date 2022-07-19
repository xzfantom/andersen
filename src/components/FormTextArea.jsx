import React from 'react';
import './FormTextarea.css';

class FormTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(e) {
    console.log(e);
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <div className='FormTextarea'>
        <label for={this.props.id}>{this.props.name}</label>
        <textarea
          id={this.props.id}
          placeholder={this.props.name}
          rows='7'
          value={this.props.value}
          onChange={this.handleChanges}>
        </textarea>
      </div>
    )
  }
}

export default FormTextarea;