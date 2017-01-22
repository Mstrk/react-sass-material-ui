import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../SvgIcon';

const isSortable = (prop, sortableKeys, haveData) => sortableKeys.indexOf(prop) !== -1 && haveData;
const normalizeProp = prop => prop.replace(/([A-Z])/g, ' $1');

const DataHeader = ({
  bottom,
  scrollable,
  dataMock,
  excludeKeys,
  headerLabels,
  onIconClick,
  onSortClick,
  ascending,
  sortActive,
  sortableKeys,
  dataLength,
  iconColor,
  hideIcon,
  isAllSelected,
  disableSelectAll
}) => {
  const keys = Object.keys(dataMock).filter((key) => (excludeKeys.indexOf(key)) === -1);

  return (
    <div
      className={
        classnames(
          'data-table-header',
          { bottom },
          { scrollable }
        )
      }
    >
      {!hideIcon &&
        <div
          className={
            classnames(
              'data-table-header-cell-icon',
              {
                [`is-selected-${iconColor}`]: !disableSelectAll,
                'is-selected': isAllSelected && !disableSelectAll,
                'is-disabled': disableSelectAll
              }
            )
          }
        >
          <SvgIcon
            icon={isAllSelected && !disableSelectAll ? 'checkbox-marked' : 'checkbox-blank-outline'}
            onClick={onIconClick}
          />
        </div>
      }
      {
        keys.map((prop, i) => (
          <div
            key={i}
            className={
              classnames(
                'data-table-header-cell',
                {
                  'is-sortable': isSortable(prop, sortableKeys, dataLength),
                  'is-sortable-active': sortActive === i
                }
              )
            }
            onClick={onSortClick.bind(null, prop, i)}
          >
          {sortActive === i && <SvgIcon icon={ascending ? 'arrow-up' : 'arrow-down'} />}
          {headerLabels[i] || normalizeProp(prop)}
          </div>
        ))
      }
    </div>
  );
};

export default DataHeader;
