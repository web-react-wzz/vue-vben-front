<script lang="ts" setup>
import type { VbenFormSchema } from '@vben/common-ui';

import { computed } from 'vue';

import {
  SolidMaterialDataShow,
  SolidMaterialForwardForm,
  SolidMaterialReverseForm,
} from '@vben/common-ui';
import { useUserStore } from '@vben/stores';

import { message } from 'ant-design-vue';

import { z } from '#/adapter/form';

defineOptions({
  name: 'SolidMaterial',
  // components: {
  //   'a-tabs': Tabs,
  //   'a-tab-pane': Tabs.TabPane,
  // },
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
      label: 'amine loading',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'flyAsh',
      label: 'support pore diameter',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'otherSlag',
      label: 'support pore volume',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'sio2',
      label: 'support BET surface area',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'Na2O',
      label: 'CO2 concentration',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'waterCementRatio',
      label: 'adsorption temperature',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'caRatio',
      label: 'relative humidity (RH)',
      rules: z.string().min(1, { message: '最少输入1个字符' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'faRatio',
      label: 'type of support',
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
      label: '吸附容量',
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
        <SolidMaterialForwardForm
          title="吸附容量预测"
          :forward-form-schema="forwardSchema"
        />
        <SolidMaterialReverseForm
          title="生成配方视图"
          :reverse-form-schema="reverseFormSchema"
          class="mt-8"
        />
      </div>
      <div class="w-full lg:w-2/3">
        <SolidMaterialDataShow />
      </div>
    </div>
  </div>
</template>
