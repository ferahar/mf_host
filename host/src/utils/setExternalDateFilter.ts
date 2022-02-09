import { DateFilterItem } from '../typings';
import { GridApi } from 'ag-grid-community';
import { formatDateToAgGrid } from './formatDateToAgGrid';

const setExternalDateFilter = (dateFilter: DateFilterItem | null, gridApi: GridApi) => {
  const currentFilterModel = gridApi?.getFilterModel();

  if (dateFilter) {
    const [dateFrom, dateTo] = dateFilter;

    if (dateFrom && dateTo) {
      gridApi?.setFilterModel({
        ...currentFilterModel,
        date: {
          filterType: 'date',
          type: 'inRange',
          dateFrom: formatDateToAgGrid(dateFrom),
          dateTo: formatDateToAgGrid(dateTo),
        },
      });
    } else if (dateFrom) {
      gridApi?.setFilterModel({
        ...currentFilterModel,
        date: {
          filterType: 'date',
          type: 'inRange',
          dateFrom: formatDateToAgGrid(dateFrom),
          dateTo: formatDateToAgGrid(new Date()),
        },
      });
    } else if (dateTo) {
      gridApi?.setFilterModel({
        ...currentFilterModel,
        date: {
          filterType: 'date',
          type: 'inRange',
          dateFrom: formatDateToAgGrid(new Date(0)),
          dateTo: formatDateToAgGrid(dateTo),
        },
      });
    }
  } else {
    gridApi?.setFilterModel({
      ...currentFilterModel,
      date: {
        type: 'equals',
      },
    });
  }

  gridApi?.onFilterChanged();
};

export default setExternalDateFilter;
