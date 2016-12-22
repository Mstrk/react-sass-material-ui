import React, { Component } from 'react';
import classnames from 'classnames';
import SvgIcon from '../SvgIcon';

class TextField extends Component {
  state = {
    value: '',
    focused: !!(this.props.value && this.props.value.length),
    hideLabel: !!(this.props.value && this.props.value.length)
  }

  componentDidMount() {
    const {
      format,
      error = false,
      success = false,
      limitError,
      limitSuccess,
      helpMessage,
      value = ''
    } = this.props;

    this.format = typeof format === 'function' ? format : x => (x);

    this.setState({
      error,
      success,
      limitError,
      limitSuccess,
      helpMessage,
      value: this.format(value)
    }, () => {
      if (this.textarea) {
        const { scrollHeight } = this.textarea;
        this.setState({
          originalTextareaHeight: scrollHeight,
          textareaHeight: scrollHeight
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      error,
      success,
      limitError,
      limitSuccess,
      helpMessage,
    } = nextProps;

    this.setState({
      error,
      success,
      limitError,
      limitSuccess,
      helpMessage
    });
  }

  handleChange = (e) => {
    let { value } = e.target;
    const { originalTextareaHeight } = this.state;

    value = this.format(value);

    if (this.props.multiRow) {
      this.setState({
        value,
        hideLabel: !!value.length,
        textareaHeight: originalTextareaHeight
      }, () => {
        this.setState({ textareaHeight: this.textarea.scrollHeight });
      });
    } else {
      this.setState({
        value,
        hideLabel: !!value.length,
      });
    }

    if (typeof this.props.onChange === 'function') this.props.onChange(e);
  }

  clear = () => {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('input', true, true);

    if (this.props.multiRow) {
      this.textarea.dispatchEvent(event);
      this.textarea.focus();
    } else {
      this.input.dispatchEvent(event);
      this.input.focus();
    }

    this.setState({ value: '' });
  }

  focus = () => {
    this.setState({
      focused: true
    });
  }

  blur = () => {
    if (!this.state.value) {
      this.setState({
        focused: false
      });
    }
  }

  render() {
    const {
      value,
      error,
      success,
      limitError,
      limitSuccess,
      helpMessage,
      focused,
      textareaHeight } = this.state;

    const {
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
      disabled
    } = this.props;

    let { fixedLabel } = this.props;

    if (icon) fixedLabel = true;

    return (
      <div className='text-field-root'>
        {icon &&
          <div
            className={
              classnames(
                'icon-container',
                {
                  [`icon-color-${color}`]: !error && !limitError
                  && !success && !limitSuccess && !disabled,
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
                [`text-field-color-${color}`]: !error && !limitError
                && !success && !limitSuccess && !disabled,
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
          {
            multiRow ? 
            <textarea
              className='text-field-input'
              placeholder={focused && !fixedLabel ? hint : ''}
              value={value}
              ref={(c) => { this.textarea = c; }}
              style={{ height: textareaHeight }}
              onChange={this.handleChange}
              onFocus={this.focus}
              onBlur={this.blur}
            />
            :
            <input
              className='text-field-input'
              placeholder={focused && !fixedLabel ? hint : ''}
              type={type}
              value={value}
              ref={(c) => { this.input = c; }}
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
    );
  }
}

export default TextField;
