import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../SvgIcon';

const DataRow = ({
  selected,
  onSelectClick,
  disabled,
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
          'is-disabled': disabled
        }
      )
    }
  >
    <td>
      <span
        className={classnames({ 'checkbox-is-disabled': disabled })}
        onClick={onSelectClick}
      >
        <SvgIcon icon={selected ? 'checkbox-marked' : 'checkbox-blank-outline'} />
      </span>
    </td>
    {children}
  </tr>
);

export default DataRow;
