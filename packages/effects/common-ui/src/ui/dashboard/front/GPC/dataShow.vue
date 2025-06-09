<script setup lang="ts">
import type { VxeTableGridOptions } from '../adapter/vxe-table';

import { ref } from 'vue';

import { Card, VbenButton } from '@vben-core/shadcn-ui';

import { Tabs } from 'ant-design-vue';

import { useVbenVxeGrid } from '../adapter/vxe-table';
import Bar from '../chart/Bar.vue';
import { useColumns } from './tableColumn';

defineOptions({
  name: 'GPCDataShow',
  components: {
    'a-tabs': Tabs,
    'a-tab-pane': Tabs.TabPane,
  },
});
enum TabsValue {
  ChartView = 'chartView',
  TableView = 'tableView',
}
const gpcActiveTab = ref<TabsValue>(TabsValue.TableView);
const tabs = ref([
  {
    label: '配方看板',
    value: TabsValue.TableView,
  },
  {
    label: '配方视图',
    value: TabsValue.ChartView,
  },
]);

const [Grid, gridApi] = useVbenVxeGrid({
  gridOptions: {
    columns: useColumns(),
    border: true,
    gridClass: 'gpc-table-wrapper',
    headerCellClassName: 'gpc-table-header-cell',
    // height: 'auto',
    keepSource: true,
    pagerConfig: {
      pageSize: 100,
      pageSizes: [3, 20, 100, 500, 1000, 5000, 10_000, 50_000, 100_000],
    },
    proxyConfig: {
      enabled: true,
      form: true,
      response: {
        result: 'data',
        total: 'total',
      },
      ajax: {
        query: async (_params: any) => {
          const res = await getTableList();
          console.log('Table data fetched:', res);
          return await getTableList();
        },
      },
    },
    rowConfig: {
      keyField: 'id',
    },
    exportConfig: {
      type: 'xlsx',
      filename: '配方看板数据',
    },
    toolbarConfig: {
      // custom: true,
      export: true,
      // refresh: { code: 'query' },
      // zoom: true,
    },
  } as VxeTableGridOptions,
});

const chartDataList = ref([
  {
    title: '第一季度销售数据',
    xAxisData: ['1月', '2月', '3月'],
    yAxisMax: 5000,
    series: [
      {
        name: '产品A',
        data: [1200, 1800, 1500],
      },
      {
        name: '产品B',
        data: [1500, 1600, 1800],
      },
    ],
  },
  {
    title: '第二季度销售数据',
    xAxisData: ['4月', '5月', '6月'],
    yAxisMax: 6000,
    series: [
      {
        name: '产品A',
        data: [2200, 2800, 2500],
      },
      {
        name: '产品B',
        data: [2500, 2600, 2800],
      },
    ],
  },
  {
    title: '第三年度用户增长',
    xAxisData: ['2019', '2020', '2021', '2022', '2023'],
    yAxisMax: 10_000,
    series: [
      {
        name: '注册用户',
        data: [3000, 5000, 7000, 8500, 9500],
      },
    ],
  },
  {
    title: '第四年度用户增长',
    xAxisData: ['2019', '2020', '2021', '2022', '2023'],
    yAxisMax: 10_000,
    series: [
      {
        name: '注册用户',
        data: [3000, 5000, 7000, 8500, 9500],
      },
    ],
  },
  {
    title: '第五年度用户增长',
    xAxisData: ['2019', '2020', '2021', '2022', '2023'],
    yAxisMax: 10_000,
    series: [
      {
        name: '注册用户',
        data: [3000, 5000, 7000, 8500, 9500],
      },
    ],
  },
  {
    title: '第六年度用户增长',
    xAxisData: ['2019', '2020', '2021', '2022', '2023'],
    yAxisMax: 10_000,
    series: [
      {
        name: '注册用户',
        data: [3000, 5000, 7000, 8500, 9500],
      },
    ],
  },
  {
    title: '第七年度用户增长',
    xAxisData: ['2019', '2020', '2021', '2022', '2023'],
    yAxisMax: 10_000,
    series: [
      {
        name: '注册用户',
        data: [3000, 5000, 7000, 8500, 9500],
      },
    ],
  },
  {
    title: '第八年度用户增长',
    xAxisData: ['2019', '2020', '2021', '2022', '2023'],
    yAxisMax: 10_000,
    series: [
      {
        name: '注册用户',
        data: [3000, 5000, 7000, 8500, 9500],
      },
    ],
  },
  {
    title: '第九年度用户增长',
    xAxisData: ['2019', '2020', '2021', '2022', '2023'],
    yAxisMax: 10_000,
    series: [
      {
        name: '注册用户',
        data: [3000, 5000, 7000, 8500, 9500],
      },
    ],
  },
  {
    title: '第十年度用户增长',
    xAxisData: ['2019', '2020', '2021', '2022', '2023'],
    yAxisMax: 10_000,
    series: [
      {
        name: '注册用户',
        data: [3000, 5000, 7000, 8500, 9500],
      },
    ],
  },
]);

function onRefresh() {
  gridApi.query();
}

function getTableList() {
  // Simulate an API call to fetch table data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            f1: 10,
            f2: 100,
            f3: 10,
            f4: 1000,
            f5: 100,
            f6: 100,
            f7: 100,
            f8: 100,
            f9: 100,
            f10: 199,
            f11: 100,
          },
          { id: 2, f1: 20, f2: 200 },
          { id: 3, f1: 30, f2: 300 },
          { id: 4, f1: 40, f2: 400 },
        ],
        total: 4,
      });
    }, 1000);
  });
}

function updateGpcTab(value: TabsValue) {
  gpcActiveTab.value = value;
  console.log('GPC tab changed to:', value);
}
</script>
<template>
  <Card class="w-full p-2">
    <a-tabs
      class="gpc-tabs-wrapper"
      v-model:active-key="gpcActiveTab"
      @change="updateGpcTab(gpcActiveTab)"
    >
      <a-tab-pane
        class="login-tabs-pane-wrapper"
        v-for="tab in tabs"
        :key="tab.value"
        :tab="tab.label"
      >
        <div v-if="tab.value === TabsValue.TableView">
          <Grid class="mygrid-style">
            <template #toolbar-tools>
              <!-- <VbenButton class="mr-2" @click="() => gridApi.query()">
                刷新
              </VbenButton> -->
              <VbenButton @click="() => gridApi.exportData()">
                导出
              </VbenButton>
            </template>
          </Grid>
        </div>
        <div
          class="grid grid-cols-2"
          v-else-if="tab.value === TabsValue.ChartView"
        >
          <Bar
            v-for="(chartData, index) in chartDataList"
            :key="index"
            class="col-span-1 mx-2 mb-4"
            :title="chartData.title"
            :x-axis-data="chartData.xAxisData"
            :y-axis-max="chartData.yAxisMax"
            :series="chartData.series"
          />
        </div>
      </a-tab-pane>
    </a-tabs>
  </Card>
</template>
<style lang="scss" scoped>
:deep(.mygrid-style) {
  .gpc-table-header-cell {
    background-color: hsl(214, 54%, 97%);
  }
}
.gpc-tabs-wrapper {
  max-height: 88vh;
  overflow-y: auto;
}
</style>
