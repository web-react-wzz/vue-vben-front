<script lang="ts" setup>
import type { VbenFormSchema } from '@vben/common-ui';

import { computed } from 'vue';

import { GPCDataShow, GpcForwardForm, GPCReverseForm } from '@vben/common-ui';
import { useUserStore } from '@vben/stores';

import { message, Tabs } from 'ant-design-vue';

import { z } from '#/adapter/form';

defineOptions({
  name: 'GPC',
  components: {
    'a-tabs': Tabs,
    'a-tab-pane': Tabs.TabPane,
  },
});

// enum TabsValue {
//   ChartView = 'chartView',
//   TableView = 'tableView',
// }

const userStore = useUserStore();

function onSubmit(values: Record<string, any>) {
  message.success({
    content: `form values: ${JSON.stringify(values)}`,
  });
}

// const gpcActiveTab = ref<TabsValue>(TabsValue.TableView);

const forwardSchema = computed((): VbenFormSchema[] => {
  return [
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'slag',
      label: '矿渣含量',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'flyAsh',
      label: '粉煤灰含量',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'otherSlag',
      label: '其他矿渣含量',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'sio2',
      label: 'SiO₂含量',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'Na2O',
      label: 'Na₂O含量',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'waterCementRatio',
      label: '水胶比',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'caRatio',
      label: 'CA胶凝材料比',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'faRatio',
      label: 'FA胶凝材料比',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'conserveTime',
      label: '养护时间 (h)',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'conserveTemperature',
      label: '养护温度 (°C)',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
  ];
});

const reverseFormSchema = computed((): VbenFormSchema[] => {
  return [
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'compressStrength',
      label: '抗压强度',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
  ];
});

// const tabs = ref([
//   {
//     label: '配方看板',
//     value: TabsValue.TableView,
//   },
//   {
//     label: '配方视图',
//     value: TabsValue.ChartView,
//   },
// ]);

// const router = useRouter();

// function updateGpcTab(value: TabsValue) {
//   gpcActiveTab.value = value;
//   console.log('GPC tab changed to:', value);
// }
</script>

<template>
  <div class="p-1">
    <div class="flex w-full flex-col lg:flex-row">
      <div class="mx-2 lg:w-1/3">
        <GpcForwardForm
          title="抗压强度预测"
          :forward-form-schema="forwardSchema"
        />
        <GPCReverseForm
          title="生成配方视图"
          :reverse-form-schema="reverseFormSchema"
          class="mt-2"
        />
      </div>
      <div class="w-full lg:w-2/3">
        <GPCDataShow />
      </div>
    </div>
  </div>
</template>
