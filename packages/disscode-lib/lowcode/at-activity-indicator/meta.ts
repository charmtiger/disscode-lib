
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtActivityIndicatorMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtActivityIndicator",
  "title": "AtActivityIndicator",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtActivityIndicator",
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
            "zh-CN": "loading 图的"
          },
          "tip": "size | loading 图的大小"
        },
        "name": "size",
        "description": "loading 图的大小",
        "defaultValue": "24",
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
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "mode",
            "zh-CN": "元素的类型"
          },
          "tip": "mode | 元素的类型"
        },
        "name": "mode",
        "description": "元素的类型",
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
                      "label": "center",
                      "value": "center"
                    },
                    {
                      "label": "normal",
                      "value": "normal"
                    }
                  ],
                  "options": [
                    {
                      "label": "center",
                      "value": "center"
                    },
                    {
                      "label": "normal",
                      "value": "normal"
                    }
                  ]
                },
                "initialValue": "center"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "loading 图的"
          },
          "tip": "color | loading 图的颜色"
        },
        "name": "color",
        "description": "loading 图的颜色",
        "defaultValue": "#6190E8",
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
            "en-US": "content",
            "zh-CN": "元素的内容文本"
          },
          "tip": "content | 元素的内容文本"
        },
        "name": "content",
        "description": "元素的内容文本",
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
            "en-US": "isOpened",
            "zh-CN": "控制元素显示隐藏"
          },
          "tip": "isOpened | 控制元素显示隐藏"
        },
        "name": "isOpened",
        "description": "控制元素显示隐藏",
        "defaultValue": "true",
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
    "title": "AtActivityIndicator",
    "screenshot": "",
    "schema": {
      "componentName": "AtActivityIndicator",
      "props": {
        "size": "24",
        "color": "#6190E8",
        "isOpened": "true"
      }
    }
  }
];

export default {
  ...AtActivityIndicatorMeta,
  snippets
};
