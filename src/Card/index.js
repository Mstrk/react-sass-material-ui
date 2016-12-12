import React, { Component } from 'react';
import classnames from 'classnames';
import Paper from '../Paper';
import Button from '../Button';

class Card extends Component {
  state = {
    extendHeight: 0,
    extendContentHeight: 0
  }

  componentDidMount() {
    if (this.refs.extend) {
      const { offsetHeight } = this.refs.extend;
      this.setState({ extendContentHeight: offsetHeight + 40 });
    }
  }

  handleExtendClick = () => {
    const { extendHeight, extendContentHeight } = this.state;
    const newHeight = extendHeight > 0 ? 0 : extendContentHeight;
    this.setState({ extendHeight: newHeight });
  }

  render() {
    const {
      img,
      actions,
      small,
      actionsDivider,
      children,
      extendableContent,
      style } = this.props;

    const { extendHeight } = this.state;

    return (
      <Paper
        className={
          classnames(
            'card',
            { 'card-small': small }
          )
        }
        zDepth={2}
        style={style}
      >
        { img ?
          <div
            style={img.parentStyle}
            className={
              classnames(
                'card-img',
                { 'limited-height': img.parentStyle && img.parentStyle.maxHeight }
              )
            }
          >
            <img
              style={img.childImgStyle}
              role='presentation'
              src={img.src}
            />
            {img.caption && <span style={img.childCaptionStyle}>{img.caption}</span>}
          </div>
          : null
        }

        <div className='card-content-wrapper'>
          <div
            className='card-content'
          >
          {children}
          </div>

          { actions ?
            <div
              className={
                classnames(
                  'card-actions',
                  { 'card-divider': actionsDivider }
                )
              }
            >
              {actions}
              { extendableContent ?
                <Button
                  type='icon'
                  icon='chevron-up'
                  color='black'
                  className={
                    classnames(
                      'extend-anchor',
                      { open: extendHeight }
                    )
                  }
                  onClick={this.handleExtendClick}
                />
              : null
              }
            </div>
            : null
          }
          { extendableContent ?
            <div
              style={{ height: `${extendHeight}px` }}
              className={
                classnames(
                  'extend',
                  { open: extendHeight }
                )
              }
            >
              <div className='extend-wrapper'>
                {React.cloneElement(extendableContent, {
                  ref: 'extend'
                })}
              </div>
            </div>
            : null
          }
        </div>
      </Paper>
    );
  }
}

export default Card;
