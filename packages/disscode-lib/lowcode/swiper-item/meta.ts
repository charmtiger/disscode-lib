import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const SwiperItemMeta: ExtendComponentMetadata = {
  componentName: 'SwiperItem',
  title: '滑块子容器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'SwiperItem',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '布局',
  hideInProjectType: ['app', 'web'],
  configure: {
    props: [
      {
        title: {
          label: '标识符',
          tip: '该 swiper-item 的标识符',
        },
        name: 'itemId',
        setter: 'StringSetter'
      },
    ],
    supports: {
      style: false,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '滑块子容器',
    screenshot: '',
    schema: {
      componentName: 'SwiperItem',
      props: {},
      children: [
        {
          componentName: 'View',
        }
      ]
    },
  },
];

export default {
  ...SwiperItemMeta,
  snippets,
};
