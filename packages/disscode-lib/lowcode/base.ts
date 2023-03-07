import { FieldConfig } from '@alilc/lowcode-types';

export const ViewStyleSetterConfig: FieldConfig = {
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
  },
};

export const ConditionStyleSetterConfig: FieldConfig = {
  title: {
    label: {
      type: 'i18n',
      'en-US': 'style',
      'zh-CN': '动态样式',
    },
  },
  name: 'inlineStyle',
  description: '动态样式',
  display: 'block',
  setter: {
    componentName: 'ArraySetter',
    props: {
      itemSetter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              {
                name: 'enable',
                title: '可用',
                setter: 'BoolSetter',
              },
              {
                name: 'name',
                title: '样式名',
                setter: 'StringSetter',
                isRequired: true,
              },
              {
                name: 'style',
                title: '样式',
                setter: 'StyleSetter',
                display: 'block',
                isRequired: false,
              },
            ],
          },
        },
        initialValue: () => {
          return {
            enable: true,
            name: '动态样式1',
            style: {},
          };
        },
      },
    },
  },
};
