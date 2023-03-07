import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { ConditionStyleSetterConfig, ViewStyleSetterConfig } from '../base';

const ViewMeta: ComponentMetadata = {
  componentName: 'View',
  title: '容器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'View',
    main: '',
    destructuring: true,
    subName: '',
  },
  hideInProjectType: ['web', 'app'],
  configure: {
    props: [
      {
        name: 'activeOpacity',
        setter: 'NumberSetter',
        title: '点击变色',
      },
      {
        name: 'elevation',
        setter: 'NumberSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'simpleShadow',
            'zh-CN': '简易阴影',
          },
          tip: '兼容RN—Android阴影缺陷'
        },
      },
      {
        name: 'safeTop',
        setter: 'BoolSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'safeTop',
            'zh-CN': '顶部安区',
          },
          tip: '用于页面顶部占位，用于适配刘海屏、水滴屏等，自动增加内边距，防止遮挡（请注意此容器不可设置固定高度）'
        },
      },
      {
        name: 'safeBottom',
        setter: 'BoolSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'safeTop',
            'zh-CN': '底部安区',
          },
          tip: '用于页面底部占位，用于苹果等含有底部小白条的区域，自动增加内边距，防止误触（请注意此容器不可设置固定高度）'
        },
      },
      ViewStyleSetterConfig,
      ConditionStyleSetterConfig,
    ],
    supports: {
      // className: true,
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
    component: {
      isContainer: true,
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '容器',
    screenshot: '',
    schema: {
      componentName: 'View',
      props: {},
    },
  },
];

export default {
  ...ViewMeta,
  snippets,
};
