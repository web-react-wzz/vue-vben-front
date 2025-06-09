import type { VxeTableGridOptions } from '../adapter/vxe-table';

export function useColumns(): VxeTableGridOptions['columns'] {
  return [
    {
      align: 'left',
      field: 'f1',
      fixed: 'left',
      title: '序号',
      width: 40,
      // treeNode: true,
      // width: 50,
    },
    {
      // cellRender: { name: 'CellTag' },
      field: 'f2',
      title: 'amine loading',
      // width: 50,
    },
    {
      field: 'f3',
      title: 'support pore diameter',
      // width: 50,
    },
    {
      field: 'f4',
      title: 'support pore volume',
    },
    {
      field: 'f5',
      title: 'BET surface',
      // width: 50,
    },
    {
      field: 'f6',
      title: 'CO2 concentration',
      // width: 50,
    },
    {
      field: 'f7',
      title: 'adsorption temperature',
      // width: 50,
    },
    {
      field: 'f8',
      title: 'relative humidity (RH)',
      // width: 50,
    },
    {
      field: 'f9',
      title: 'type of support',
      // width: 50,
    },
  ];
}
