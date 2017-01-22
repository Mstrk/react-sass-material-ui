import React from 'react';
import paths from './iconPaths';

export default ({ size, color, icon, onClick }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24" onClick={onClick}>
    <path d={paths[icon]} />
  </svg>
);
