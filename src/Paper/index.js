import React from 'react';
import classnames from 'classnames';

const Paper = ({
  zDepth,
  type,
  children,
  style
}) => {
  const depth = zDepth > 0 && zDepth <= 5;

  return (
    <div
     style={style}
     className={
      classnames(
        'paper',
        { [`paper-${type}`]: type },
        { [`z-depth${zDepth}`]: depth }
      )
    }
    >{children}</div>
  );
};

Paper.propTypes = {
  zDepth: React.PropTypes.number,
  type: React.PropTypes.string,
  style: React.PropTypes.object
};

export default Paper;

