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
      title: '矿渣含量',
      // width: 50,
    },
    {
      field: 'f3',
      title: '粉煤灰含量',
      // width: 50,
    },
    {
      field: 'f4',
      title: '其他矿渣含量',
    },
    {
      field: 'f5',
      title: 'SiO₂含量',
      // width: 50,
    },
    {
      field: 'f6',
      title: 'Na₂O含量',
      // width: 50,
    },
    {
      field: 'f7',
      title: '水胶比',
      // width: 50,
    },
    {
      field: 'f8',
      title: 'CA胶凝材料比',
      // width: 50,
    },
    {
      field: 'f9',
      title: 'FA胶凝材料比',
      // width: 50,
    },
    {
      field: 'f10',
      title: '养护时间 (h)',
      // width: 50,
    },
    {
      field: 'f11',
      title: '养护温度 (°C)',
      // width: 50,
    },
  ];
}
