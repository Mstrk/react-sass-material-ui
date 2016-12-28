import React, { Component } from 'react';
import { TextField } from '../../src';

class TextFields extends Component {

  state = {
    error: false,
    limit: 9,
    min: 3,
    limitError: false,
    limitSuccess: false,
    errorColor: 'orange',
    nameErrMessage: 'No B\'s allowed'
  }

  formatValue = value => (value.replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').trim())
  
  formatUsername = value => (value.trim())

  formatName = value => (value.replace(/[^a-zA-Z ]/g, ''))
  
  errorHandler = (e) => {
    const { value } = e.target;
    const { limit, min } = this.state;

    if (value.length < min) {
      this.setState({
        limitError: true,
        errorColor: 'orange'
      });
    } else if (value.length > limit) {
      this.setState({
        limitError: true,
        errorColor: 'red'
      });
    } else {
      this.setState({ limitError: false });
    }
  }

  nameErrorHandler = (e) => {
    const { value } = e.target;
    const patt = new RegExp('B');
    const error = patt.test(value);

    this.setState({ error });
  }

  render() {
    const { limit, limitError, limitSuccess, error, nameErrMessage, errorColor } = this.state;
    return (
      <div style={{ padding: 'calc(64px + 2em) 2em', maxWidth: '500px' }}>
        <TextField
          label='username'
          hint='ex: jarvis'
          limit={limit}
          limitError={limitError}
          limitSuccess={limitSuccess}
          onChange={this.errorHandler}
          errorColor={errorColor}
          color='indigo'
          format={this.formatUsername}
          allowClear
        />
        <br />
        <TextField
          label='username'
          hint='ex: jarvis'
          color='indigo'
          value='mstrk'
          disabled
        />
        <br />
        <TextField
          label='name'
          hint='ex: jarvis'
          fixedLabel
          color='indigo'
          error={error}
          format={this.formatName}
          onChange={this.nameErrorHandler}
          helpMessage={nameErrMessage}
        />
        <br />
        <TextField
          label='name'
          hint='ex: jarvis'
          fixedLabel
          color='indigo'
          value='Bruno Morgado'
          disabled
        />
        <br />
        <TextField
          label='text sample'
          hint='ex: Some text'
          multiRow
          color='indigo'
          allowClear
        />
        <br />
        <TextField
          label='text sample disabled'
          hint='ex: Some text'
          multiRow
          color='indigo'
          value={'This is a text sample with multi row disabled. Lorem ipsum dolur, foo, bar, baz.'}
          disabled
        />
        <br />
        <TextField
          label='text sample fixed label'
          hint='ex: Some text'
          fixedLabel
          multiRow
          color='indigo'
        />
        <br />
        <TextField
          label='text sample fixed label disabled'
          hint='ex: Some text'
          fixedLabel
          multiRow
          color='indigo'
          disabled
        />
        <br />
        <TextField
          label='phone'
          hint='ex: jarvis'
          icon='phone'
          color='indigo'
          type='phone'
          format={this.formatValue}
        />
        <br />
        <TextField
          label='phone'
          hint='ex: jarvis'
          icon='phone'
          color='indigo'
          type='phone'
          value='912345678'
          format={this.formatValue}
          disabled
        />
      </div>
    );
  }
}

export default TextFields;
