
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtAvatarMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtAvatar",
  "title": "AtAvatar",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtAvatar",
    "main": "lib/index.js",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "头像大小"
          },
          "tip": "size | 头像大小"
        },
        "name": "size",
        "description": "头像大小",
        "defaultValue": "'normal'",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "normal",
                      "value": "normal"
                    },
                    {
                      "label": "large",
                      "value": "large"
                    },
                    {
                      "label": "small",
                      "value": "small"
                    }
                  ],
                  "options": [
                    {
                      "label": "normal",
                      "value": "normal"
                    },
                    {
                      "label": "large",
                      "value": "large"
                    },
                    {
                      "label": "small",
                      "value": "small"
                    }
                  ]
                },
                "initialValue": "normal"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "circle",
            "zh-CN": "头像是否圆形"
          },
          "tip": "circle | 头像是否圆形"
        },
        "name": "circle",
        "description": "头像是否圆形",
        "defaultValue": "false",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "text",
            "zh-CN": "以文字形式展示头像"
          },
          "tip": "text | 以文字形式展示头像"
        },
        "name": "text",
        "description": "以文字形式展示头像",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "image",
            "zh-CN": "头像图片地址"
          },
          "tip": "image | 头像图片地址"
        },
        "name": "image",
        "description": "头像图片地址",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "openData",
            "zh-CN": "参考微信[开放数据]"
          },
          "tip": "openData | 参考微信[开放数据](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)"
        },
        "name": "openData",
        "description": "参考微信[开放数据](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "type",
                            "zh-CN": "type"
                          }
                        },
                        "name": "type",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "userAvatarUrl",
                                "value": "userAvatarUrl"
                              }
                            ],
                            "options": [
                              {
                                "label": "userAvatarUrl",
                                "value": "userAvatarUrl"
                              }
                            ]
                          },
                          "isRequired": true,
                          "initialValue": "userAvatarUrl"
                        }
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                }
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "className",
            "zh-CN": "className"
          }
        },
        "name": "className",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "style",
            "zh-CN": "style"
          }
        },
        "name": "style",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "customStyle",
            "zh-CN": "customStyle"
          }
        },
        "name": "customStyle",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
          }
        }
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AtAvatar",
    "screenshot": "",
    "schema": {
      "componentName": "AtAvatar",
      "props": {
        "size": "'normal'",
        "circle": "false"
      }
    }
  }
];

export default {
  ...AtAvatarMeta,
  snippets
};
