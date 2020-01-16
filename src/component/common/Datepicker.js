import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

class Datepicker extends Component {

  state = {
    date: new Date(),
  }

  onChangeDate = date => {
    var {
      onChange
    } = this.props;

    this.setState({ date })
    onChange(this.state.date); // return value to parent
  }

  render() {

    return (
      <div>
        <DateTimePicker
          onChange={this.onChangeDate}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default Datepicker;