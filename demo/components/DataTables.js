import React, { Component } from 'react';
import {
  Paper,
  DataTable
} from '../../src';

const fakeData = [
  {
    id: '21',
    camelCased: '4500-12122222222222',
    header2: '2103522222222222222',
    header3: 'content 23222222222',
    header4: 'content 24222222222'
  },
  {
    id: '22',
    camelCased: 'content 31',
    header2: 'content 32',
    header3: 'content 33',
    header4: 'content 34'
  },
  {
    id: '23',
    camelCased: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '24',
    camelCased: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '25',
    camelCased: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '21',
    camelCased: '4500-121',
    header2: '21035',
    header3: 'content 23',
    header4: 'content 24'
  },
  {
    id: '22',
    camelCased: 'content 31',
    header2: 'content 32',
    header3: 'content 33',
    header4: 'content 34'
  },
  {
    id: '23',
    camelCased: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '24',
    camelCased: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '25',
    camelCased: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  }
];

class DataTables extends Component {
  state = {
    data: fakeData
  }

  render() {
    return (
      <div style={{ padding: 'calc(64px + 2em) 2em' }}>
        <Paper
          zDepth={2}
          style={{ width: '100%' }}
        >
          <DataTable
            maxHeight={450}
            headerLabels={[null, 'label header']}
            excludeKeys={['id', 'header3']}
            sortableKeys={['camelCased', 'header2']}
            data={this.state.data}
            dataMock={{
              id: '',
              camelCased: '',
              header2: '',
              header3: '',
              header4: ''
            }}
            noDataMessage='Add a new item'
            disabledRows={[this.state.data[1]]}
          />
        </Paper>
      </div>
    );
  }
}

export default DataTables;
