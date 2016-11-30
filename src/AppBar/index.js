import React from 'react';
import Paper from '../Paper';
import Button from '../Button';

const AppBar = ({
  color = 'primary',
  zDepth,
  iconLeft,
  iconRight,
  title
}) => (
  <div className='appBar'> 
    <Paper
      color={color}
      zDepth={zDepth}
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
      <div className='right-content'>
        {
          iconRight ?
          <Button
            type='icon'
            size={iconRight.size || 'l'}
            color={iconRight.color}
            icon={iconRight.name || 'dots-vertical'}
          />
          : null
        }
      </div>
    </Paper>
  </div>
);

AppBar.propTypes = {
  color: React.PropTypes.string,
  zDepth: React.PropTypes.number,
  iconLeft: React.PropTypes.object,
  iconRight: React.PropTypes.object
};

export default AppBar;
