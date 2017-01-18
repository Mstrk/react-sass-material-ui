import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../SvgIcon';

const DataRow = ({
  selected,
  onSelectClick,
  onRowClick,
  disabled,
  hideCheckbox,
  checkboxColor = 'accent',
  children
}) => (
  <tr
    className={
      classnames(
        'selectable-row',
        `is-selected-${checkboxColor}`,
        {
          'is-selected': selected,
          'is-disabled': disabled,
          'is-clickable': hideCheckbox
        }
      )
    }
    onClick={disabled ? noop => noop : onRowClick}
  >
    <td>
      {!hideCheckbox &&
        <span
          className={classnames({ 'checkbox-is-disabled': disabled })}
          onClick={disabled ? noop => noop : onSelectClick}
        >
          <SvgIcon icon={selected ? 'checkbox-marked' : 'checkbox-blank-outline'} />
        </span>
      }
    </td>
    {children}
  </tr>
);

export default DataRow;
