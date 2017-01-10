import React from 'react';
import classnames from 'classnames';
import Paper from '../Paper';

const AppBar = ({
  color = 'primary',
  zDepth = 4,
  contentLeft,
  contentRight,
  contentCenter,
  title
}) => (
  <div
     className={
      classnames(
        'appBar',
        { [`z-depth${zDepth}`]: zDepth }
      )
    }
  > 
    <Paper
      color={color}
      className='appBar-container'
    >
      {contentLeft && <div className='left-content'>{contentLeft}</div>}
      {title && <div className='title'>{title}</div>}
      {<div className='center-content'>{contentCenter}</div>}
      {contentRight && <div className='right-content'>{contentRight}</div>}
    </Paper>
  </div>
);

AppBar.propTypes = {
  color: React.PropTypes.string,
  zDepth: React.PropTypes.number
};

export default AppBar;
