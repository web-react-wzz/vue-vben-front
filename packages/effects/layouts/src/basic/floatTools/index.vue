<script lang="ts" setup>
import type { TippyProps } from '@vben/common-ui';

import { reactive } from 'vue';

import { Tippy, useVbenModal } from '@vben/common-ui';
import { MdiPhone, MdiWrite } from '@vben/icons';

import { useVbenForm, z } from '@vben-core/form-ui';

import { message } from 'ant-design-vue';

const tippyProps = reactive<TippyProps>({
  animation: 'shift-away',
  arrow: true,
  content: '联系电话<br>15171068403',
  followCursor: false,
  hideOnClick: false,
  inertia: true,
  duration: 0,
  maxWidth: 'none',
  placement: 'left',
  theme: 'light',
  trigger: 'mouseenter focusin',
  offset: [0, 20],
});

function onSubmit(values: Record<string, any>) {
  message.loading({
    content: '正在提交中...',
    duration: 0,
    key: 'is-form-submitting',
  });
  setTimeout(() => {
    modalApi.close();
    message.success({
      content: `提交成功：${JSON.stringify(values)}`,
      duration: 2,
      key: 'is-form-submitting',
    });
  }, 3000);
}

const [Form, formApi] = useVbenForm({
  handleSubmit: onSubmit,
  layout: 'vertical',
  commonConfig: {
    colon: true,
  },
  schema: [
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'f1',
      label: '1.您的单位：（学校/科研机构/企业等）',
      rules: z.string().min(1, { message: '请输入' }),
    },
    {
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '材料研发',
            value: '1',
          },
          {
            label: '设备开发',
            value: '2',
          },
          {
            label: '集成',
            value: '3',
          },
          {
            label: '政策制定',
            value: '4',
          },
          {
            label: '管理人员',
            value: '5',
          },
        ],
      },
      fieldName: 'f2',
      label: '2.您的岗位',
      rules: z.string().min(1, { message: '请选择' }),
    },
    {
      component: 'CheckboxGroup',
      componentProps: {
        name: 'cname',
        options: [
          {
            label: '烟气碳捕集',
            value: '1',
          },
          {
            label: '空气碳捕集',
            value: '2',
          },
          {
            label: '室内/建筑碳捕集',
            value: '3',
          },
          {
            label: '封存矿化',
            value: '4',
          },
          {
            label: '碳利用',
            value: '5',
          },
        ],
      },
      fieldName: 'f3',
      label: '3.您重点关注的领域',
      rules: z.array(z.string()).min(1, { message: '请选择至少一项' }),
    },
    {
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '电力行业',
            value: '1',
          },
          {
            label: '石油化工',
            value: '2',
          },
          {
            label: '钢铁水泥',
            value: '3',
          },
          {
            label: '科研机构',
            value: '4',
          },
          {
            label: '政策制定',
            value: '5',
          },
          {
            label: '其他',
            value: '6',
          },
        ],
      },
      fieldName: 'f4',
      label: '4.您的从业领域',
      rules: z.string().min(1, { message: '请选择' }),
    },
    {
      component: 'CheckboxGroup',
      componentProps: {
        name: 'cname',
        options: [
          {
            label: '液胺',
            value: '1',
          },
          {
            label: '金属有机框架(MOFs)',
            value: '2',
          },
          {
            label: '沸石分子筛',
            value: '3',
          },
          {
            label: '胺基固体吸附剂',
            value: '4',
          },
          {
            label: '低温分离膜',
            value: '5',
          },
          {
            label: '化学链氧载体',
            value: '6',
          },
          {
            label: '其他',
            value: '7',
          },
        ],
      },
      fieldName: 'f5',
      label: '5.您参与的碳捕集材料类型',
      rules: z.array(z.string()).min(1, { message: '请选择至少一项' }),
    },
    {
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '实验室小试',
            value: '1',
          },
          {
            label: '中试放大',
            value: '2',
          },
          {
            label: '工程示范',
            value: '3',
          },
          {
            label: '商业化应用',
            value: '4',
          },
        ],
      },
      fieldName: 'f6',
      label: '6.目前所处研发阶段',
      rules: z.string().min(1, { message: '请选择' }),
    },
    {
      component: 'CheckboxGroup',
      componentProps: {
        name: 'cname',
        options: [
          {
            label: '多源数据整合困难',
            value: '1',
          },
          {
            label: '实时分析能力不足',
            value: '2',
          },
          {
            label: '预测模型精度低',
            value: '3',
          },
          {
            label: '缺乏可视化工具',
            value: '4',
          },
        ],
      },
      fieldName: 'f7',
      label: '7.现有碳捕集数据处理的痛点',
      rules: z.array(z.string()).min(1, { message: '请选择至少一项' }),
    },
    {
      component: 'CheckboxGroup',
      componentProps: {
        name: 'cname',
        options: [
          {
            label: '原料成本高',
            value: '1',
          },
          {
            label: '工艺设备缺乏',
            value: '2',
          },
          {
            label: '标准体系不完善',
            value: '3',
          },
          {
            label: '碳定价机制不健全',
            value: '4',
          },
          {
            label: '供应链不成熟',
            value: '5',
          },
        ],
      },
      fieldName: 'f8',
      label: '8.规模化生产主要障碍',
      rules: z.array(z.string()).min(1, { message: '请选择至少一项' }),
    },
    {
      component: 'CheckboxGroup',
      componentProps: {
        name: 'cname',
        options: [
          {
            label: '联合实验室',
            value: '1',
          },
          {
            label: '技术许可',
            value: '2',
          },
          {
            label: '专利共享',
            value: '3',
          },
          {
            label: '产业基金支持',
            value: '4',
          },
          {
            label: '中试平台共建',
            value: '5',
          },
        ],
      },
      fieldName: 'f9',
      label: '9.期望的产学研合作模式',
      rules: z.array(z.string()).min(1, { message: '请选择至少一项' }),
    },
    {
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '开放共享',
            value: '1',
          },
          {
            label: '有条件共享',
            value: '2',
          },
          {
            label: '暂不参与',
            value: '3',
          },
        ],
      },
      fieldName: 'f10',
      label: '10.是否愿意参与材料数据库共建',
      rules: z.string().min(1, { message: '请选择' }),
    },
    {
      component: 'CheckboxGroup',
      componentProps: {
        name: 'cname',
        options: [
          {
            label: '碳捕集效率优化',
            value: '1',
          },
          {
            label: '封存场地地质匹配',
            value: '2',
          },
          {
            label: '减排量核算验证',
            value: '3',
          },
          {
            label: '政策合规性审查',
            value: '4',
          },
          {
            label: '成本效益预测',
            value: '5',
          },
        ],
      },
      fieldName: 'f11',
      label: '11.您认为当前碳捕集技术最需要大模型支持的环节',
      rules: z.array(z.string()).min(1, { message: '请选择至少一项' }),
    },
    {
      component: 'CheckboxGroup',
      componentProps: {
        name: 'cname',
        options: [
          {
            label: '跨模态数据处理',
            value: '1',
          },
          {
            label: '动态模拟封存场景泄漏风险',
            value: '2',
          },
          {
            label: '自动生成减排报告',
            value: '3',
          },
          {
            label: '多语言政策法规解读',
            value: '4',
          },
        ],
      },
      fieldName: 'f12',
      label: '12.您期望的垂类大模型核心能力',
      rules: z.array(z.string()).min(1, { message: '请选择至少一项' }),
    },
    {
      component: 'CheckboxGroup',
      componentProps: {
        name: 'cname',
        options: [
          {
            label: '可视化仪表盘',
            value: '1',
          },
          {
            label: 'API接口',
            value: '2',
          },
          {
            label: '分析报告',
            value: '3',
          },
          {
            label: '风险预警推送',
            value: '4',
          },
        ],
      },
      fieldName: 'f13',
      label: '13.希望获得的大模型输出形式',
      rules: z.array(z.string()).min(1, { message: '请选择至少一项' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'f14',
      label: '14.您的手机号',
      rules: z.string().min(11, { message: '请输入' }),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'f15',
      label: '15.您的邮箱',
      rules: z.string().email('请输入有效的邮箱地址'),
    },
  ],
  showDefaultActions: false,
});

const [Modal, modalApi] = useVbenModal({
  fullscreenButton: false,
  closeOnClickModal: false,
  contentClass: 'p-6',
  title: '问卷',
  class: 'w-[1080px] h-full overflow-y-auto',
  onCancel() {
    modalApi.close();
  },
  onConfirm: async () => {
    await formApi.validateAndSubmitForm();
    // modalApi.close();
  },
  onOpenChange(isOpen: boolean) {
    if (isOpen) {
      const { values } = modalApi.getData<Record<string, any>>();
      if (values) {
        formApi.setValues(values);
      }
    }
  },
});

const showModal = () => {
  console.log('show modal');
  modalApi.open();
};

// onMounted(() => {
//   // 可以在这里执行一些初始化操作
//   console.log('Float tool mounted');
//   showModal();
// });
</script>
<template>
  <div
    class="float-tool-wrapper bg-background shadow-float z-popup fixed rounded-full"
  >
    <div class="tool-wrapper">
      <div class="tool-item" @click="showModal">
        <MdiWrite class="icon-wrapper" />
        <span>问卷</span>
      </div>
      <Tippy v-bind="tippyProps">
        <div class="tool-item">
          <MdiPhone class="icon-wrapper" />
          <span>电话</span>
        </div>
      </Tippy>
    </div>
    <Modal>
      <Form />
    </Modal>
  </div>
</template>
<style lang="scss" scoped>
.float-tool-wrapper {
  width: 40px;
  height: 90px;
  border: 1px solid #a7bcfc;
  bottom: 80px;
  right: 24px;
  box-sizing: border-box;
  padding-top: 8px;
  padding-bottom: 8px;
  .tool-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .tool-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 0.75rem;
      color: #646a73;
      cursor: pointer;
    }
  }
  .icon-wrapper {
    font-weight: 300;
    color: #777;
    width: 16px;
    height: 16px;
  }
}
</style>
