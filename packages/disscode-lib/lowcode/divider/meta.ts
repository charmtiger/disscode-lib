import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const DividerMeta: ComponentMetadata = {
  componentName: 'Divider',
  title: {
    type: 'i18n',
    'en-US': 'Divider',
    'zh-CN': '分割线',
  },
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Divider',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '基础',
  icon: 'rqefengexian',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'text',
            'zh-CN': '内容',
          },
        },
        name: 'children',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'contentPosition',
            'zh-CN': '内容位置',
          },
        },
        name: 'contentPosition',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '左侧',
                value: 'left',
              },
              {
                label: '中',
                value: 'center',
              },
              {
                label: '右侧',
                value: 'right',
              },
            ],
            options: [
              {
                label: '左侧',
                value: 'left',
              },
              {
                label: '中',
                value: 'center',
              },
              {
                label: '右侧',
                value: 'right',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dashed',
            'zh-CN': '虚线',
          },
        },
        name: 'dashed',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'hairline',
      //       'zh-CN': 'hairline',
      //     },
      //   },
      //   name: 'hairline',
      //   setter: {
      //     componentName: 'BoolSetter',
      //     isRequired: false,
      //     initialValue: false,
      //   },
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': '方向',
          },
        },
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '横向',
                value: 'horizontal',
              },
              {
                label: '竖向',
                value: 'vertical',
              },
            ],
            options: [
              {
                label: '横向',
                value: 'horizontal',
              },
              {
                label: '竖向',
                value: 'vertical',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'styles',
            'zh-CN': '自定样式',
          },
        },
        name: 'styles',
        display: 'accordion',
        setter: {
          componentName: 'StyleSetter',
          props: {
            showModuleList: ['background', 'border', 'layout', 'position'],
          },
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '分割线',
    screenshot: '',
    schema: {
      componentName: 'Divider',
    },
  },
];

export default {
  ...DividerMeta,
  snippets,
};
