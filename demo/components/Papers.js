import React from 'react';
import { Paper } from '../../src';

const paperStyles = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '100px',
  marginRight: '20px',
};

const text = 'Paper';

const Papers = () => (
  <div style={{ padding: 'calc(64px + 2em) 2em' }}>
    <Paper zDepth={1} style={paperStyles}>
      <span>{text}</span>
    </Paper>
    <Paper zDepth={5} color='primary' style={paperStyles}>
      <span>{text}</span>
    </Paper>
    <Paper zDepth={10} type='round' style={paperStyles}>
      <span>{text}</span>
    </Paper>
    <Paper zDepth={20} type='circle' color='pink' style={paperStyles}>
      <span>{text}</span>
    </Paper>
  </div>
);

export default Papers;
