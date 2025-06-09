<script setup lang="ts">
import type { VbenFormSchema } from '@vben-core/form-ui';

import { computed, reactive, ref } from 'vue';

import { useVbenForm } from '@vben-core/form-ui';
import { Card, CardContent, CardHeader, CardTitle } from '@vben-core/shadcn-ui';

interface Props {
  // items?: WorkbenchProjectItem[];
  title: string;
  forwardFormSchema?: VbenFormSchema[];
}

defineOptions({
  name: 'GpcForwardForm',
});

const props = withDefaults(defineProps<Props>(), {
  // items: () => [],
  forwardFormSchema: () => [],
});

defineEmits(['click']);
const predictResult = ref('65.3'); // 预测结果的初始值

const [ForwardForm, forwardFormApi] = useVbenForm(
  reactive({
    commonConfig: {
      hideLabel: false,
      hideRequiredMark: false,
      formItemClass: 'col-span-1 mx-2 pb-6',
    },
    schema: computed(() => props.forwardFormSchema),
    handleSubmit: (values: Record<string, any>) => {
      console.log('ForwardForm submitted with values:', values);
      // 在这里处理表单提交逻辑
    },
    resetButtonOptions: {
      content: '清除',
      class: 'h-9 px-4 py-2 inline-flex items-center justify-center',
    },
    submitButtonOptions: {
      content: '预测',
      class: 'h-9 px-4 py-2 inline-flex items-center justify-center',
    },
    layout: 'vertical',
    wrapperClass: 'grid-cols-2 ',
  }),
);
</script>

<template>
  <Card>
    <CardHeader class="py-4">
      <CardTitle class="text-lg">{{ title }}</CardTitle>
    </CardHeader>
    <CardContent class="flex-center flex flex-wrap p-0">
      <ForwardForm />
      <div class="w-full p-4">
        <Card>
          <CardHeader class="py-4">
            <CardTitle>预测结果</CardTitle>
          </CardHeader>
          <CardContent class="flex-center flex flex-wrap p-0">
            <div class="mb-6 text-lg font-medium">
              预测吸附容量： {{ predictResult }} mmol/g
            </div>
          </CardContent>
        </Card>
      </div>
    </CardContent>
  </Card>
</template>
<style scoped lang="scss"></style>
