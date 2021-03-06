import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SvgIcon from '../SvgIcon'

const DataRow = ({
  item,
  excludeKeys,
  selected,
  onIconClick,
  onRowClick,
  disabled,
  hideIcon,
  checkboxColor = 'accent'
}) => (
  <div
    className={
      classnames(
        'data-table-body-row',
        'selectable-row',
        `is-selected-${checkboxColor}`,
        {
          'is-selected': selected,
          'is-disabled': disabled,
          'is-clickable': hideIcon
        }
      )
    }
    onClick={disabled ? noop => noop : onRowClick}
  >
    {!hideIcon &&
      <div
        className={
          classnames(
            'data-table-body-cell-icon',
            { 'is-disabled': disabled }
          )
        }
      >
        <SvgIcon
          onClick={disabled ? noop => noop : onIconClick}
          icon={selected ? 'checkbox-marked' : 'checkbox-blank-outline'}
        />
      </div>
    }
    {Object.keys(item).map((prop, i) => (
      excludeKeys.indexOf(prop) === -1 ? <div key={i} className='data-table-body-cell'>{item[prop]}</div> : null
    ))}
  </div>
)

DataRow.propTypes = {
  item: PropTypes.object,
  excludeKeys: PropTypes.array,
  selected: PropTypes.bool,
  onIconClick: PropTypes.func,
  onRowClick: PropTypes.func,
  disabled: PropTypes.bool,
  hideIcon: PropTypes.bool,
  checkboxColor: PropTypes.string
}

export default DataRow
