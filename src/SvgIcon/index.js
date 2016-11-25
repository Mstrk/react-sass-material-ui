import React from 'react';
import paths from './iconPaths';

export default ({ size, color, icon }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24">
    <path d={paths[icon]} />
  </svg>
);
