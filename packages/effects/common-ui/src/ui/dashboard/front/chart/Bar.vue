<script lang="ts" setup>
import type { EChartsOption, EchartsUIType } from '@vben/plugins/echarts';

import { onMounted, ref, watch } from 'vue';

import { EchartsUI, useEcharts } from '@vben/plugins/echarts';

interface Props {
  // 基础配置
  title?: string;
  titleColor?: string;
  titleFontSize?: number;
  // 数据配置
  series: EChartsOption['series'];
  xAxisData: string[];
  yAxisMax?: number;
  // 样式配置
  grid?: EChartsOption['grid'];
  colors?: string[];
  barMaxWidth?: number;
  // 坐标轴配置
  showXAxis?: boolean;
  showYAxis?: boolean;
  yAxisSplitNumber?: number;
  // 工具提示
  showTooltip?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '示例标题',
  titleColor: '#155eff',
  titleFontSize: 16,
  yAxisMax: undefined, // 不设置默认值，由ECharts自动计算
  grid: () => ({
    bottom: '5%',
    containLabel: true,
    left: '1%',
    right: '1%',
    // top: props.title ? '15%' : '5%'
  }),
  colors: () => ['#165DFF', '#14C9C9', '#F7BA1E'],
  barMaxWidth: 80,
  showXAxis: true,
  showYAxis: true,
  yAxisSplitNumber: 4,
  showTooltip: true,
});

const chartRef = ref<EchartsUIType>();
const { renderEcharts } = useEcharts(chartRef);

const renderChart = () => {
  const options: EChartsOption = {
    grid: props.grid,
    title: {
      text: props.title,
      textStyle: {
        color: props.titleColor,
        fontSize: props.titleFontSize,
      },
      // top: '2%',
      show: !!props.title,
    },
    tooltip: props.showTooltip
      ? {
          axisPointer: {
            lineStyle: {
              width: 1,
            },
          },
          trigger: 'axis',
        }
      : undefined,
    xAxis: props.showXAxis
      ? {
          data: props.xAxisData,
          type: 'category',
          // axisLabel: {
          //   interval: 0,
          //   rotate: props.xAxisData.length > 10 ? 45 : 0
          // }
        }
      : undefined,
    yAxis: props.showYAxis
      ? {
          type: 'value',
          max: props.yAxisMax,
          splitNumber: props.yAxisSplitNumber,
        }
      : undefined,
    series: Array.isArray(props.series)
      ? props.series.map((s: any, index: number) => ({
          barMaxWidth: props.barMaxWidth,
          type: 'bar',
          itemStyle: {
            color: props.colors[index % props.colors.length],
          },
          ...s,
        }))
      : [],
  };
  renderEcharts(options);
};

onMounted(renderChart);

watch(
  () => [
    props.series,
    props.title,
    props.xAxisData,
    props.yAxisMax,
    props.grid,
    props.colors,
  ],
  renderChart,
  { deep: true },
);
</script>

<template>
  <div class="custom-chart-wrapper">
    <EchartsUI ref="chartRef" height="200px" />
  </div>
</template>
<style lang="scss" scoped>
.custom-chart-wrapper {
  height: 200px !important;
  border: 1px solid #e6edff;
  box-sizing: border-box;
  padding: 10px;
  // border: 1px solid hsl(0, 87%, 50%);
  border-radius: 4px;
}
</style>
