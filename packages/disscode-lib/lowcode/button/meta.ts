import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ButtonMeta: ComponentMetadata = {
  componentName: 'Button',
  title: {
    type: 'i18n',
    'en-US': 'Button',
    'zh-CN': '按钮',
  },
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Button',
    main: '',
    destructuring: true,
    subName: '',
  },
  icon: 'rqeanniu',
  group: '原子组件',
  category: '基础',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'text',
            'zh-CN': '文字',
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
            'en-US': 'shape',
            'zh-CN': '形状',
          },
        },
        name: 'shape',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '方形',
                value: 'square',
              },
              {
                label: '圆形',
                value: 'round',
              },
            ],
            options: [
              {
                label: '方形',
                value: 'square',
              },
              {
                label: '圆形',
                value: 'round',
              },
            ],
          },
          initialValue: 'round',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'plain',
            'zh-CN': '朴素',
          },
        },
        name: 'plain',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': '加载状态',
          },
        },
        name: 'loading',
        setter: {
          componentName: 'BoolSetter',
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
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': '类型',
          },
        },
        name: 'type',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '默认',
                value: 'default',
              },
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '信息',
                value: 'info',
              },
              {
                label: '成功',
                value: 'success',
              },
              {
                label: '警告',
                value: 'warning',
              },
              {
                label: '危险',
                value: 'danger',
              },
            ],
            options: [
              {
                label: '默认',
                value: 'default',
              },
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '信息',
                value: 'info',
              },
              {
                label: '成功',
                value: 'success',
              },
              {
                label: '警告',
                value: 'warning',
              },
              {
                label: '危险',
                value: 'danger',
              },
            ],
          },
          initialValue: 'primary',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': '尺寸',
          },
        },
        name: 'size',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '大号',
                value: 'large',
              },
              {
                label: '普通',
                value: 'normal',
              },
              {
                label: '小型',
                value: 'small',
              },
            ],
            options: [
              {
                label: '大号',
                value: 'large',
              },
              {
                label: '普通',
                value: 'normal',
              },
              {
                label: '小型',
                value: 'small',
              },
            ],
          },
          initialValue: 'normal',
        },
      },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "block",
      //       "zh-CN": "块级元素"
      //     }
      //   },
      //   "name": "block",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "icon",
      //       "zh-CN": "图标"
      //     }
      //   },
      //   "name": "icon",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'icon',
            'zh-CN': '自定颜色',
          },
        },
        name: 'icon',
        setter: {
          componentName: 'ColorSetter',
        },
      },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "iconSize",
      //       "zh-CN": "图标大小"
      //     }
      //   },
      //   "name": "iconSize",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "StringSetter",
      //           "isRequired": false,
      //           "initialValue": ""
      //         },
      //         {
      //           "componentName": "NumberSetter",
      //           "isRequired": false,
      //           "initialValue": 0
      //         }
      //       ]
      //     }
      //   }
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'style',
            'zh-CN': '样式',
          },
        },
        name: 'style',
        description: '样式',
        display: 'block',
        setter: {
          componentName: 'StyleSetter',
          props: {
            showModuleList: ['background', 'border', 'layout', 'position'],
          },
          isRequired: true,
          initialValue: {},
        },
      },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "iconFontClassName",
      //       "zh-CN": "iconFontClassName"
      //     }
      //   },
      //   "name": "iconFontClassName",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "iconClassPrefix",
      //       "zh-CN": "iconClassPrefix"
      //     }
      //   },
      //   "name": "iconClassPrefix",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // }
    ],
    supports: {
      // "className": true,
      style: false,
      events: [
        {
          name: 'onClick',
          description: '点击',
          // @ts-ignore
          template: "onClick(e, ${extParams}) {\n  console.log('onClick');\n}",
        },
      ],
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '按钮',
    screenshot: '',
    schema: {
      componentName: 'Button',
      props: {},
      children: '按钮文字',
    },
  },
];

export default {
  ...ButtonMeta,
  snippets,
};
