import React from 'react';
import classnames from 'classnames';
import Paper from '../Paper';
import Button from '../Button';

const AppBar = ({
  color = 'primary',
  zDepth = 4,
  iconLeft,
  contentRight,
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
      <div className='left-content'>
        {
          iconLeft ?
          <Button
            type='icon'
            size={iconLeft.size || 'l'}
            color={iconLeft.color}
            icon={iconLeft.name || 'menu'}
          />
          : null
        }
      </div>
      <div className='title'>{title}</div>
      {contentRight && <div className='right-content'>{contentRight}</div>}
    </Paper>
  </div>
);

AppBar.propTypes = {
  color: React.PropTypes.string,
  zDepth: React.PropTypes.number,
  iconLeft: React.PropTypes.object
};

export default AppBar;
