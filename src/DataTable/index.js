import React, { Component } from 'react';
import classnames from 'classnames';
import DataHeader from './DataHeader';
import DataRow from './DataRow';

class DataTable extends Component {
  state = {
    selectedRows: [],
    ascending: false,
    scrollable: false,
    maxHeight: false
  }

  componentWillMount() {
    this.bindPropsToState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.bindPropsToState(nextProps);
  }

  onChange(data) {
    if (this.props.onSelectedChange) {
      this.props.onSelectedChange(data);
    }
  }

  onRowClick = (index) => {
    const { onRowClick } = this.props;
    const { data } = this.state;
    if (onRowClick) {
      onRowClick(data[index], index);
    }
  }

  onSelectClick = (index) => {
    const { maxSelected, data } = this.state;
    let { selectedRows } = this.state;
    const item = data[index];

    if (this.isSelected(item)) {
      selectedRows.splice(selectedRows.indexOf(item), 1);
    } else if (maxSelected === 1) {
      selectedRows = [item];
    } else if (selectedRows.length >= maxSelected) {
      return;
    } else {
      selectedRows.push(item);
    }

    this.setState({ selectedRows });
    this.onChange(selectedRows);
  }

  onSelectAllRowsClick = () => {
    const { selectedRows, disableSelectAll, data, disabledRows } = this.state;
    const notAllSelected = selectedRows.length !== (data.length - disabledRows.length);
    let newSelectedRows = [];

    if (disableSelectAll) return;

    if (notAllSelected) {
      newSelectedRows = [].concat(data)
        .filter((item) => (disabledRows.indexOf(item) === -1));
    }
    
    this.setState({ selectedRows: newSelectedRows });
    this.onChange(newSelectedRows);
  }

  sort = (prop, headerIndex) => {
    if (!this.isSortable(prop)) return;

    const { data, ascending } = this.state;
    let sorted;

    if (ascending) {
      sorted = data.sort((a, b) => (a[prop] < b[prop]));
    } else {
      sorted = data.sort((a, b) => (a[prop] > b[prop]));
    }

    this.setState({
      data: sorted,
      ascending: !ascending,
      sortActive: headerIndex
    });
  }

  bindPropsToState(props) {
    const {
      data,
      disabledRows = [],
      maxSelected,
      withHeader,
      withFooter,
      maxHeight
    } = props;

    let { disableSelectAll } = props;

    if (maxSelected || !data.length) disableSelectAll = true;

    const headersHeight = withHeader && withFooter ? 112 : 56;
    const maxRows = Math.floor((maxHeight - headersHeight) / 49);
    const roundedMaxHeight = maxHeight ? (maxRows * 49) + headersHeight : false;

    this.setState({
      data,
      disabledRows,
      maxSelected,
      disableSelectAll,
      headersHeight,
      maxHeight: roundedMaxHeight,
      scrollable: data.length > maxRows
    });
  }

  isSortable(prop) {
    const { data } = this.state;
    const { sortableKeys } = this.props;
    return sortableKeys.indexOf(prop) !== -1 && data.length;
  }

  isSelected(item) {
    return this.state.selectedRows.indexOf(item) !== -1;
  }

  isDisabled(item) {
    return this.state.disabledRows.indexOf(item) !== -1;
  }

  render() {
    const {
      withHeader = true,
      withFooter = false,
      dataMock,
      excludeKeys,
      sortableKeys,
      headerLabels,
      checkboxColor = 'accent',
      noDataMessage = 'No data to show',
      onRowClick
    } = this.props;

    const {
      data,
      ascending,
      sortActive,
      selectedRows,
      disabledRows,
      disableSelectAll,
      scrollable,
      maxHeight,
      headersHeight
    } = this.state;

    const isAllSelected = selectedRows.length === (data.length - disabledRows.length);
    const otherProps = maxHeight ? { style: { maxHeight: maxHeight - headersHeight } } : null;
    const headerProps = {
      ascending,
      sortActive,
      scrollable,
      dataMock,
      excludeKeys,
      headerLabels,
      sortableKeys,
      dataLength: data.length,
      iconColor: checkboxColor,
      hideIcon: !!onRowClick,
      isAllSelected,
      disableSelectAll,
      onIconClick: this.onSelectAllRowsClick,
      onSortClick: this.sort
    };

    return (
      <div className='data-table-container'>
        {withHeader && <DataHeader {...headerProps} />} 
        <div
          className={
            classnames(
              'data-table-body',
              { scrollable }
            )
          }
          {...otherProps}
        >
        {data.length ?
          data.map((item, key) => (
            <DataRow
              key={key}
              item={item}
              excludeKeys={excludeKeys}
              selected={this.isSelected(item)}
              disabled={this.isDisabled(item)}
              hideIcon={!!onRowClick}
              checkboxColor={checkboxColor}
              onIconClick={this.onSelectClick.bind(null, key)}
              onRowClick={this.onRowClick.bind(null, key)}
            />
          ))
          :
          <div className='no-data-message'>{noDataMessage}</div>
        }
        </div>
        {withFooter && <DataHeader {...headerProps} bottom />} 
      </div>
    );
  }
}

DataTable.propTypes = {
  data: React.PropTypes.array.isRequired,
  dataMock: React.PropTypes.object.isRequired,
  onSelectedChange: React.PropTypes.func,
  onRowClick: React.PropTypes.func
};

export default DataTable;
