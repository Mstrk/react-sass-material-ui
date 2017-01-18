import React, { Component } from 'react';
import {
  Paper,
  DataTable,
  Button
} from '../../src';

const fakeData = [
  {
    id: '21',
    header1: '4500-121',
    header2: '21035',
    header3: 'content 23',
    header4: 'content 24'
  },
  {
    id: '22',
    header1: 'content 31',
    header2: 'content 32',
    header3: 'content 33',
    header4: 'content 34'
  },
  {
    id: '23',
    header1: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '24',
    header1: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '25',
    header1: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '21',
    header1: '4500-121',
    header2: '21035',
    header3: 'content 23',
    header4: 'content 24'
  },
  {
    id: '22',
    header1: 'content 31',
    header2: 'content 32',
    header3: 'content 33',
    header4: 'content 34'
  },
  {
    id: '23',
    header1: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '24',
    header1: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  },
  {
    id: '25',
    header1: 'content 11',
    header2: 'content 12',
    header3: 'content 13',
    header4: 'content 14'
  }
];

class DataTables extends Component {
  state = {
    itemsSelected: false
  }

  setItemsSelected = (data) => {
    this.setState({ itemsSelected: data[0] });
  }

  render() {
    const { itemsSelected } = this.state;
    
    return (
      <div style={{ padding: 'calc(64px + 2em) 2em' }}>
        <Paper
          zDepth={2}
          style={{ width: '100%' }}
        >
          <div className='data-table-super-header'>
            {!!itemsSelected &&
              <span>{itemsSelected.header1} -- {itemsSelected.header2}$</span>
            }
            <span className='right'>
              {!!itemsSelected &&
                <Button type='icon' size='l' icon='arrow-right' color='accent' />
              }
            </span>
          </div>
          <DataTable
            headerLabels={[null, 'label header']}
            excludeKeys={['id', 'header3']}
            sortableKeys={['header1', 'header2']}
            data={fakeData}
            dataMock={{
              id: '',
              header1: '',
              header2: '',
              header3: '',
              header4: ''
            }}
            noDataMessage='Add a new item'
            disabledRows={[fakeData[1]]}
            withHeader={false}
            withFooter
            maxSelected={1}
            onSelectedChange={this.setItemsSelected}
          />
        </Paper>
      </div>
    );
  }
}

export default DataTables;
