import React, { Component } from 'react'
import { Paper, DataTable } from '../../src'

import fakeData from '../dummyData/fakeTableData'

class DataTables extends Component {
  state = {
    data: fakeData
  }

  render () {
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
    )
  }
}

export default DataTables
