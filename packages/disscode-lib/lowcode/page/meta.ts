import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const PageMeta: ExtendIPublicTypeComponentMetadata = {
  componentName: 'Page',
  title: '页面',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Page',
    main: '',
    destructuring: true,
    subName: '',
  },
  hideInProjectType: ['web', 'app'],
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'keyboard',
            'zh-CN': '是否存在键盘',
          },
        },
        name: 'keyboard',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'absolute',
            'zh-CN': '是否漂浮',
          },
        },
        name: 'absolute',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'statusBarMode',
            'zh-CN': '状态栏',
          },
        },
        name: 'statusBarMode',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'light',
                value: 'light',
              },
              {
                label: 'dark',
                value: 'dark',
              },
            ],
            options: [
              {
                label: 'light',
                value: 'light',
              },
              {
                label: 'dark',
                value: 'dark',
              },
            ],
          },
          initialValue: 'light',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': '背景图片',
          },
        },
        name: 'backgroundImage',
        setter: {
          componentName: 'ImageSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "isModal",
      //       "zh-CN": "是否为弹窗"
      //     }
      //   },
      //   "name": "isModal",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
    ],
    supports: {
      className: true,
      style: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '页面',
    screenshot: '',
    schema: {
      componentName: 'Page',
      props: {},
    },
  },
];

export default {
  ...PageMeta,
  snippets,
};
