import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const PickerMeta: ComponentMetadata = {
  componentName: 'Picker',
  title: '弹出选择器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Picker',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqexialakuang',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': '类型',
          },
        },
        name: 'mode',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '普通选择器',
                value: 'selector',
              },
              {
                label: '多列选择器',
                value: 'multiSelector',
              },
              {
                label: '时间选择器',
                value: 'time',
              },
              {
                label: '日期选择器',
                value: 'date',
              },
            ],
          },
          initialValue: 'selector',
        },
      },
      {
        name: 'range',
        title: { label: '可选项', tip: '类型为 普通选择器 或 多列选择器 时，可选项 有效' },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'VariableSetter',
              },
              {
                componentName: 'JsonSetter',
              },
            ],
          },
          initialValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      },
      {
        name: 'value',
        title: { label: '值', tip: '表示选择了 可选项 中的第几个（下标从 0 开始）' },
        // propType: { type: 'arrayOf', value: 'any' },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
              },
              {
                componentName: 'VariableSetter',
              },
            ],
          },
          initialValue: []
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rangeKey',
            'zh-CN': '数据索引值',
          },
          tip: '当 可选项为 是一个 Object Array 时，通过 数据索引值 来指定 Object 中 key 的值作为选择器显示内容',
        },
        name: 'rangeKey',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '是否禁用',
          },
        },
        name: 'disabled',
        description: '是否禁用',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          // initialValue: false,
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onChange',
          description: '选择后触发',
          // @ts-ignore
          template:
            "onPickerChange(e, extParams) {\n  console.log('onPickerChange', e.detail.value, extParams);\n}",
        },
        {
          name: 'onColumnChange',
          description: '列改变后触发',
          // @ts-ignore
          template:
            "onPickerColumnChange(e, extParams) {\n  console.log('onPickerColumnChange', e, extParams);\n}",
        },
      ],
      style: false,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '弹出选择器',
    screenshot: '',
    schema: {
      componentName: 'Picker',
      props: {},
    },
  },
];

export default {
  ...PickerMeta,
  snippets,
};
