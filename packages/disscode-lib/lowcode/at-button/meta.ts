import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtButtonMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtButton',
  title: '按钮',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'disscode-lib',
    version: '0.0.4',
    exportName: 'AtButton',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          type: 'i18n',
          'en-US': 'text',
          'zh-CN': '按钮文字'
        },
        name: 'children',
        setter: {
          componentName: 'StringSetter',
          initialValue: '按钮文字'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': '按钮大小',
          },
        },
        name: 'size',
        description: '按钮的大小',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '常规',
                value: 'normal',
              },
              {
                label: '小',
                value: 'small',
              },
            ],
            options: [
              {
                label: '常规',
                value: 'normal',
              },
              {
                label: '小',
                value: 'small',
              },
            ],
          },
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
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '次要',
                value: 'secondary',
              },
            ],
            options: [
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '次要',
                value: 'secondary',
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
            'en-US': 'circle',
            'zh-CN': '圆角按钮',
          },
        },
        name: 'circle',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'full',
            'zh-CN': '通栏样式',
          },
          tip: '是否通栏样式（即按钮宽度为屏幕宽度时的样式）',
        },
        name: 'full',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': '载入状态',
          },
        },
        name: 'loading',
        description: '设置按钮的载入状态',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '禁用态',
          },
          tip: '设置按钮为禁用态（不可点击）',
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
            'en-US': 'onClick',
            'zh-CN': '点击按钮时触发',
          },
          tip: 'onClick | 点击按钮时触发',
        },
        name: 'onClick',
        description: '点击按钮时触发',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
                initialValue: {},
              },
              {
                componentName: 'FunctionSetter',
                isRequired: false,
              },
            ],
          },
        },
      },

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
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'customStyle',
            'zh-CN': '自定样式',
          },
        },
        name: 'customStyle',
        description: '自定样式',
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
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formType',
            'zh-CN': '表单类型',
          },
          tip: 'formType | 用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件',
        },
        name: 'formType',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '提交',
                value: 'submit',
              },
              {
                label: '重置',
                value: 'reset',
              },
            ],
            options: [
              {
                label: '提交',
                value: 'submit',
              },
              {
                label: '重置',
                value: 'reset',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'openType',
            'zh-CN': '微信开放能力',
          },
        },
        name: 'openType',
        description: '微信开放能力',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'contact',
                value: 'contact',
              },
              {
                label: 'share',
                value: 'share',
              },
              {
                label: 'getPhoneNumber',
                value: 'getPhoneNumber',
              },
              {
                label: 'getUserInfo',
                value: 'getUserInfo',
              },
              {
                label: 'getRealnameAuthInfo',
                value: 'getRealnameAuthInfo',
              },
              {
                label: 'launchApp',
                value: 'launchApp',
              },
              {
                label: 'openSetting',
                value: 'openSetting',
              },
              {
                label: 'feedback',
                value: 'feedback',
              },
              {
                label: 'getAuthorize',
                value: 'getAuthorize',
              },
              {
                label: 'contactShare',
                value: 'contactShare',
              },
              {
                label: 'lifestyle',
                value: 'lifestyle',
              },
              {
                label: 'openGroupProfile',
                value: 'openGroupProfile',
              },
              {
                label: 'addFriend',
                value: 'addFriend',
              },
              {
                label: 'addColorSign',
                value: 'addColorSign',
              },
              {
                label: 'openPublicProfile',
                value: 'openPublicProfile',
              },
              {
                label: 'addGroupApp',
                value: 'addGroupApp',
              },
              {
                label: 'shareMessageToFriend',
                value: 'shareMessageToFriend',
              },
            ],
            options: [
              {
                label: 'contact',
                value: 'contact',
              },
              {
                label: 'share',
                value: 'share',
              },
              {
                label: 'getPhoneNumber',
                value: 'getPhoneNumber',
              },
              {
                label: 'getUserInfo',
                value: 'getUserInfo',
              },
              {
                label: 'getRealnameAuthInfo',
                value: 'getRealnameAuthInfo',
              },
              {
                label: 'launchApp',
                value: 'launchApp',
              },
              {
                label: 'openSetting',
                value: 'openSetting',
              },
              {
                label: 'feedback',
                value: 'feedback',
              },
              {
                label: 'getAuthorize',
                value: 'getAuthorize',
              },
              {
                label: 'contactShare',
                value: 'contactShare',
              },
              {
                label: 'lifestyle',
                value: 'lifestyle',
              },
              {
                label: 'openGroupProfile',
                value: 'openGroupProfile',
              },
              {
                label: 'addFriend',
                value: 'addFriend',
              },
              {
                label: 'addColorSign',
                value: 'addColorSign',
              },
              {
                label: 'openPublicProfile',
                value: 'openPublicProfile',
              },
              {
                label: 'addGroupApp',
                value: 'addGroupApp',
              },
              {
                label: 'shareMessageToFriend',
                value: 'shareMessageToFriend',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'lang',
            'zh-CN': '信息语言',
          },
          tip: '指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。',
        },
        name: 'lang',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '英文',
                value: 'en',
              },
              {
                label: '中文简体',
                value: 'zh_CN',
              },
              {
                label: '中文繁体',
                value: 'zh_TW',
              },
            ],
            options: [
              {
                label: '英文',
                value: 'en',
              },
              {
                label: '中文简体',
                value: 'zh_CN',
              },
              {
                label: '中文繁体',
                value: 'zh_TW',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sessionFrom',
            'zh-CN': '会话来源',
          },
        },
        name: 'sessionFrom',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sendMessageTitle',
            'zh-CN': '会话标题',
          },
          tip: 'sendMessageTitle | 会话内消息卡片标题',
        },
        name: 'sendMessageTitle',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sendMessagePath',
            'zh-CN': '跳转小程序路径',
          },
          tip: 'sendMessagePath | 会话内消息卡片点击跳转小程序路径',
        },
        name: 'sendMessagePath',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sendMessageImg',
            'zh-CN': '消息卡片图片',
          },
          tip: 'sendMessageImg | 会话内消息卡片图片',
        },
        name: 'sendMessageImg',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showMessageCard',
            'zh-CN': '显示消息卡片',
          },
          tip: 'showMessageCard | 显示会话内消息卡片',
        },
        name: 'showMessageCard',
        description: '显示会话内消息卡片',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'appParameter',
            'zh-CN': '打开APP参数',
          },
          tip: 'appParameter | 打开APP时，向APP传递的参数',
        },
        name: 'appParameter',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onContact',
            'zh-CN': '客服消息回调',
          },
          tip: 'onContact | 客服消息回调',
        },
        name: 'onContact',
        description: '客服消息回调',
        setter: {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onGetUserInfo',
            'zh-CN': '用户信息回调',
          },
          tip: 'onGetUserInfo | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与 Taro.getUserInfo 返回的一致',
        },
        name: 'onGetUserInfo',
        setter: {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onGetPhoneNumber',
            'zh-CN': '手机号回调',
          },
          tip: 'onGetPhoneNumber | 获取用户手机号回调',
        },
        name: 'onGetPhoneNumber',
        setter:  {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onOpenSetting',
            'zh-CN': '打开授权回调',
          },
          tip: 'onOpenSetting | 在打开授权设置页后回调',
        },
        name: 'onOpenSetting',
        setter:  {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onError',
            'zh-CN': '错误回调',
          },
          tip: 'onError | 当使用开放能力时，发生错误的回调',
        },
        name: 'onError',
        setter:  {
          componentName: 'FunctionSetter',
        },
      },
    ],
    supports: {},
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '按钮',
    screenshot: '',
    schema: {
      componentName: 'AtButton',
      props: {
        children: '按钮文字'
      }
    },
  },
];

export default {
  ...AtButtonMeta,
  snippets,
};
