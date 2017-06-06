import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SvgIcon from '../SvgIcon'

class TextField extends Component {
  state = {
    focused: !!(this.props.value && this.props.value.length)
  }

  componentDidMount () {
    if (this.textarea) {
      const { scrollHeight } = this.textarea
      this.setState({
        originalTextareaHeight: scrollHeight,
        textareaHeight: scrollHeight
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { multiRow } = nextProps
    const { originalTextareaHeight } = this.state

    if (multiRow) {
      this.setState({
        textareaHeight: originalTextareaHeight
      }, () => {
        this.setState({ textareaHeight: this.textarea.scrollHeight })
      })
    }
  }

  handleChange = (event) => {
    const { value } = event.target
    this.props.onChange(value, event)
  }

  clear = () => {
    this.props.onChange('')

    if (this.props.multiRow) {
      this.textarea.focus()
    } else {
      this.input.focus()
    }
  }

  focus = () => {
    this.setState({
      focused: true
    })
  }

  blur = () => {
    if (!this.props.value) {
      this.setState({
        focused: false
      })
    }
  }

  render () {
    const {
      focused,
      textareaHeight } = this.state

    const {
      value,
      label = 'label',
      hint,
      multiRow,
      color = 'primary',
      errorColor = 'red',
      successColor = 'green',
      limit,
      icon,
      type = 'text',
      allowClear,
      disabled,
      error,
      success,
      limitError,
      limitSuccess,
      helpMessage
    } = this.props

    let { fixedLabel } = this.props

    if (icon) fixedLabel = true

    return (
      <div className='text-field-root'>
        {icon &&
          <div
            className={
              classnames(
                'icon-container',
                {
                  [`icon-color-${color}`]: !error && !limitError &&
                  !success && !limitSuccess && !disabled,
                  [`icon-color-${errorColor}`]: (error || limitError) && !disabled,
                  [`icon-color-${successColor}`]: (success || limitSuccess) && !disabled,
                  focused
                }
              )
            }
          >
            <SvgIcon icon={icon} />
          </div>
        }

        <div
          className={
            classnames(
              'text-field',
              {
                [`text-field-color-${color}`]: !error && !limitError &&
                !success && !limitSuccess && !disabled,
                [`text-field-color-${errorColor}`]: (error || limitError) && !disabled,
                [`text-field-color-${successColor}`]: (success || limitSuccess) && !disabled,
                'text-field-label-is-fixed': fixedLabel,
                'text-field-have-icon': !!icon,
                'text-field-is-disabled': disabled,
                focused
              }
            )
          }
        >
          <span
            className={
              classnames(
                {
                  'text-field-label': !fixedLabel,
                  'text-field-label-fixed': fixedLabel,
                  'hide-label': fixedLabel && value.length
                }
              )
            }
          >{label}</span>
          {
            allowClear && focused && !!value.length &&
            <div
              className='clear'
              onClick={this.clear}
            >
              <SvgIcon icon='close-circle' />
            </div>
          }
          {multiRow
            ? <textarea
              className='text-field-input'
              placeholder={focused && !fixedLabel ? hint : ''}
              value={value}
              ref={node => { this.textarea = node }}
              style={{ height: textareaHeight }}
              onChange={this.handleChange}
              onFocus={this.focus}
              onBlur={this.blur}
            />
            : <input
              className='text-field-input'
              placeholder={focused && !fixedLabel ? hint : ''}
              type={type}
              value={value}
              ref={node => { this.input = node }}
              onChange={this.handleChange}
              onFocus={this.focus}
              onBlur={this.blur}
            />
          }
        </div>
        <div className='text-field-help'>
          {(error || success) && helpMessage &&
            <div
              className={
                classnames(`help-message-${errorColor}`)
              }
            >
              {helpMessage}
            </div>}
          {limit &&
            <div
              className={
                classnames(
                  'limit',
                  {
                    [`limit-${errorColor}`]: limitError && focused && !disabled,
                    [`limit-${successColor}`]: limitSuccess && focused && !disabled
                  }
                )
              }
            >{`${value.length}/${limit}`}</div>
          }
        </div>
      </div>
    )
  }
}

TextField.propTypes = {
  allowClear: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorColor: PropTypes.string,
  helpMessage: PropTypes.string,
  hint: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  limit: PropTypes.number,
  limitError: PropTypes.bool,
  limitSuccess: PropTypes.bool,
  multiRow: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  success: PropTypes.bool,
  successColor: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  fixedLabel: PropTypes.bool
}

export default TextField
