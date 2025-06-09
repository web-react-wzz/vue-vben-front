<script setup lang="ts">
import type { VbenFormSchema } from '@vben-core/form-ui';

import { computed, reactive, ref } from 'vue';

import { useVbenForm } from '@vben-core/form-ui';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  VbenButton,
} from '@vben-core/shadcn-ui';

defineOptions({
  name: 'GpcReverseForm',
});

const props = withDefaults(defineProps<Props>(), {
  // items: () => [],
  title: '',
  reverseFormSchema: () => [],
});

enum Comparison {
  Less = 'less',
  More = 'more',
}

interface Props {
  // items?: WorkbenchProjectItem[];
  title: string;
  reverseFormSchema?: VbenFormSchema[];
}

const generateType = ref<Comparison>(Comparison.Less);

const submitForm = (values: Record<string, any>) => {
  console.log('ReverseForm submitted with values:', values, generateType.value);
};

const [ReverseForm, reverseForwardFormApi] = useVbenForm(
  reactive({
    commonConfig: {
      hideLabel: false,
      hideRequiredMark: false,
      componentProps: {
        class: 'w-full',
      },
      formItemClass: 'col-span-1',
    },
    schema: computed(() => props.reverseFormSchema),
    handleSubmit: submitForm,
    showDefaultActions: false,
    layout: 'horizontal',
    wrapperClass: 'grid-cols-1',
  }),
);

const lessGenerateData = (values: Comparison) => {
  // 这里可以添加生成表格数据的逻辑
  reverseForwardFormApi.validate();
  generateType.value = values;
  reverseForwardFormApi.submitForm();
  // 返回生成的表格数据
  return [];
};

const batchGenerate = async (values: Comparison) => {
  // 这里可以添加批量生成配方的逻辑
  const { valid } = await reverseForwardFormApi.validate();
  if (!valid) {
    console.warn('Form validation failed, cannot batch generate.');
    return;
  }
  generateType.value = values;
  reverseForwardFormApi.submitForm();
};
</script>
<template>
  <Card>
    <CardHeader class="py-4">
      <CardTitle class="text-lg">{{ title }}</CardTitle>
    </CardHeader>
    <CardContent class="p-x-4 flex flex-1 flex-wrap">
      <ReverseForm class="w-full" />
      <div class="flex w-full flex-1 justify-end">
        <VbenButton @click="lessGenerateData(Comparison.Less)">
          少量配方生成
        </VbenButton>
        <VbenButton class="mx-2" @click="batchGenerate(Comparison.More)">
          批量配方生成
        </VbenButton>
      </div>
    </CardContent>
  </Card>
</template>
