import React from 'react';
import classnames from 'classnames';

const Paper = ({
  zDepth,
  type,
  color = 'white',
  children,
  style,
  className
}) => {
  const depth = zDepth > 0 && zDepth <= 24;

  return (
    <div
     style={style}
     className={
      classnames(
        'paper',
        `bgc-${color}`,
        { [`paper-${type}`]: type },
        { [`z-depth${zDepth}`]: depth },
        className
      )
    }
    >{children}</div>
  );
};

Paper.propTypes = {
  zDepth: React.PropTypes.number,
  type: React.PropTypes.string,
  color: React.PropTypes.string,
  style: React.PropTypes.object
};

export default Paper;

