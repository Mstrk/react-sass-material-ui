import React, { Component } from 'react'
import { TextField } from '../../src'

class TextFields extends Component {
  state = {
    value1: '',
    value2: 'mstrk',
    value3: '',
    value4: 'Bruno Morgado',
    value5: '',
    value6: 'This is a text sample with multi row disabled. Lorem ipsum dolur, foo, bar, baz.',
    value7: '',
    value8: '',
    value9: '',
    value10: '912 345 678',
    error: false,
    limit: 9,
    min: 3,
    limitError: false,
    limitSuccess: false,
    errorColor: 'orange',
    nameErrMessage: 'No B\'s allowed'
  }

  value1Handler = (value) => {
    const { limit, min } = this.state

    const formatedValue = value.trim()

    if (value.length < min) {
      this.setState({
        value1: formatedValue,
        limitError: true,
        errorColor: 'orange'
      })
    } else if (value.length > limit) {
      this.setState({
        value1: formatedValue,
        limitError: true,
        errorColor: 'red'
      })
    } else {
      this.setState({
        value1: formatedValue,
        limitError: false
      })
    }
  }

  value3Handler = (value) => {
    const formatedValue = value.replace(/[^a-zA-Z ]/g, '')
    const patt = new RegExp('B')
    const error = patt.test(formatedValue)

    this.setState({
      value3: formatedValue,
      error
    })
  }

  value5Handler = (value) => {
    this.setState({ value5: value })
  }

  value7Handler = (value) => {
    this.setState({ value7: value })
  }

  value9Handler = (value) => {
    const formatedValue = value.replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').trim()
    this.setState({ value9: formatedValue })
  }

  render () {
    const {
      limit,
      limitError,
      limitSuccess,
      error,
      nameErrMessage,
      errorColor,
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value10
    } = this.state

    return (
      <div style={{ padding: 'calc(64px + 2em) 2em', maxWidth: '500px' }}>
        <TextField
          value={value1}
          onChange={this.value1Handler}
          label='username'
          hint='ex: jarvis'
          limit={limit}
          limitError={limitError}
          limitSuccess={limitSuccess}
          errorColor={errorColor}
          color='indigo'
          allowClear
        />
        <br />
        <TextField
          value={value2}
          onChange={noop => noop}
          label='username'
          color='indigo'
          disabled
        />
        <br />
        <TextField
          value={value3}
          onChange={this.value3Handler}
          label='name'
          hint='ex: jarvis'
          fixedLabel
          color='indigo'
          error={error}
          helpMessage={nameErrMessage}
        />
        <br />
        <TextField
          value={value4}
          onChange={noop => noop}
          label='name'
          hint='ex: jarvis'
          fixedLabel
          color='indigo'
          disabled
        />
        <br />
        <TextField
          value={value5}
          onChange={this.value5Handler}
          label='text sample'
          hint='ex: Some text'
          multiRow
          color='indigo'
          allowClear
        />
        <br />
        <TextField
          value={value6}
          onChange={noop => noop}
          label='text sample disabled'
          hint='ex: Some text'
          multiRow
          color='indigo'
          disabled
        />
        <br />
        <TextField
          value={value7}
          onChange={this.value7Handler}
          label='text sample fixed label'
          hint='ex: Some text'
          fixedLabel
          multiRow
          color='indigo'
        />
        <br />
        <TextField
          value={value8}
          onChange={noop => noop}
          label='text sample fixed label disabled'
          hint='ex: Some text'
          fixedLabel
          multiRow
          color='indigo'
          disabled
        />
        <br />
        <TextField
          value={value9}
          onChange={this.value9Handler}
          label='phone'
          hint='ex: jarvis'
          icon='phone'
          color='indigo'
          type='phone'
        />
        <br />
        <TextField
          value={value10}
          onChange={noop => noop}
          label='phone'
          hint='ex: jarvis'
          icon='phone'
          color='indigo'
          type='phone'
          disabled
        />
      </div>
    )
  }
}

export default TextFields
