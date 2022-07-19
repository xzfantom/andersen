import React from 'react';
import './FormInput.css';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(e) {
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <div className='FormInput'>
        <label for={this.props.id}>{this.props.name}</label>
        <input
          id={this.props.id}
          placeholder={this.props.name}
          value={this.props.value}
          onChange={this.handleChanges}>
        </input>
      </div>
    )
  }
}

export default FormInput;