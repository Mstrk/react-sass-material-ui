/*eslint no-undef:0*/
import React from 'react';
import { mount } from 'enzyme';
import { DataTable, DataRow } from '../src';

describe('<DataTable />', () => {
  const fakeData = [
    {
      id: '21',
      header1: 'content 23',
      header2: 'content 24',
      header3: 'content 42'
    },
    {
      id: '22',
      header1: 'content 31',
      header2: 'content 32',
      header3: 'content 42'
    },
    {
      id: '23',
      header1: 'content 51',
      header2: 'content 52',
      header3: 'content 62'
    }
  ];

  const mockFn = jest.fn();

  const dataTable = mount(
    <DataTable
      headerLabels={[null, 'label header']}
      excludeKeys={['id', 'header3']}
      sortableKeys={['header1', 'header2']}
      data={fakeData}
      disabledRows={[fakeData[1]]}
      maxSelected={1}
      checkboxColor='blue'
      onSelectedChange={mockFn}
    />
  );

  it('should have root class data-table', () => {
    expect(dataTable.find('.data-table')).toHaveLength(1);
  });

  it('should set selected on click but not for disabled ones', () => {
    const row1 = dataTable.find(DataRow).at(0);
    const row2 = dataTable.find(DataRow).at(1);
    row1.find('span').simulate('click');
    row2.find('span').simulate('click');
    expect(dataTable.state().selectedRows).toHaveLength(1);
  });

  it('sould have called onSelectedChange callback', () => {
    expect(mockFn).toBeCalled();
  });

  it('should replace the selected item on other item click', () => {
    expect(dataTable.state().selectedRows).toHaveLength(1);
    expect(dataTable.state().selectedRows[0] === fakeData[1]).toEqual(false);
    dataTable.setProps({ disabledRows: undefined });
    const row2 = dataTable.find(DataRow).at(1);
    row2.find('span').simulate('click');
    expect(dataTable.state().selectedRows[0] === fakeData[1]).toEqual(true);
  });

  it('should deselect the item if selected and clicked', () => {
    expect(dataTable.state().selectedRows).toHaveLength(1);
    const row2 = dataTable.find(DataRow).at(1);
    row2.find('span').simulate('click');
    expect(dataTable.state().selectedRows).toHaveLength(0);
  });

  it('should have both rows selected and prevent third row selection', () => {
    expect(dataTable.state().selectedRows).toHaveLength(0);
    dataTable.setProps({ maxSelected: 2 });
    const row1 = dataTable.find(DataRow).at(0);
    const row2 = dataTable.find(DataRow).at(1);
    const row3 = dataTable.find(DataRow).at(2);
    row1.find('span').simulate('click');
    row2.find('span').simulate('click');
    row3.find('span').simulate('click');
    expect(dataTable.state().selectedRows).toHaveLength(2);
  });

  it('should toggle ascending on sortable header click', () => {
    expect(dataTable.state().ascending).toEqual(false);
    const selectAll = dataTable.find('.is-sortable').at(0);
    selectAll.simulate('click');
    expect(dataTable.state().ascending).toEqual(true);
    selectAll.simulate('click');
    expect(dataTable.state().ascending).toEqual(false);
  });

  it('should have tfoot and not thead', () => {
    expect(dataTable.find('thead')).toHaveLength(1);
    dataTable.setProps({ withHeader: false, withFooter: true });
    expect(dataTable.find('thead')).toHaveLength(0);
    expect(dataTable.find('tfoot')).toHaveLength(1);
  });

  it('should select all rows and deselect all rows', () => {
    expect(dataTable.state().selectedRows).toHaveLength(2);
    dataTable.setProps({ maxSelected: undefined });
    const selectAllCheckbox = dataTable.find('.is-all-selected-blue');
    selectAllCheckbox.simulate('click');
    expect(dataTable.state().selectedRows).toHaveLength(fakeData.length);
    selectAllCheckbox.simulate('click');
    expect(dataTable.state().selectedRows).toHaveLength(0);
  });
});
