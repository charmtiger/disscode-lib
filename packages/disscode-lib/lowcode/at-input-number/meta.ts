
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtInputNumberMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtInputNumber",
  "title": "AtInputNumber",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtInputNumber",
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
            "en-US": "type",
            "zh-CN": "输入框类型"
          },
          "tip": "type | 输入框类型"
        },
        "name": "type",
        "description": "输入框类型",
        "setter": {
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
          "isRequired": true,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "输入框当前值"
          },
          "tip": "value | 输入框当前值"
        },
        "name": "value",
        "description": "输入框当前值",
        "setter": {
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
          "isRequired": true,
          "initialValue": {}
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "min",
            "zh-CN": "最小值"
          },
          "tip": "min | 最小值"
        },
        "name": "min",
        "description": "最小值",
        "defaultValue": "0",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "max",
            "zh-CN": "最大值"
          },
          "tip": "max | 最大值"
        },
        "name": "max",
        "description": "最大值",
        "defaultValue": "100",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "step",
            "zh-CN": "每次点击改变的间隔大"
          },
          "tip": "step | 每次点击改变的间隔大小"
        },
        "name": "step",
        "description": "每次点击改变的间隔大小",
        "defaultValue": "1",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "组件的大小"
          },
          "tip": "size | 组件的大小"
        },
        "name": "size",
        "description": "组件的大小",
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
            "en-US": "width",
            "zh-CN": "input 宽度"
          },
          "tip": "width | input 宽度"
        },
        "name": "width",
        "description": "input 宽度",
        "defaultValue": "120",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabled",
            "zh-CN": "是否禁止输入，禁止点"
          },
          "tip": "disabled | 是否禁止输入，禁止点击按钮"
        },
        "name": "disabled",
        "description": "是否禁止输入，禁止点击按钮",
        "defaultValue": "false",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabledInput",
            "zh-CN": "是否禁止输入，但不禁"
          },
          "tip": "disabledInput | 是否禁止输入，但不禁止点击按钮"
        },
        "name": "disabledInput",
        "description": "是否禁止输入，但不禁止点击按钮",
        "defaultValue": "false",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onChange",
            "zh-CN": "输入框值改变时触发的"
          },
          "tip": "onChange | 输入框值改变时触发的事件"
        },
        "name": "onChange",
        "description": "输入框值改变时触发的事件",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBlur",
            "zh-CN": "输入框值失去焦点时触"
          },
          "tip": "onBlur | 输入框值失去焦点时触发的事件"
        },
        "name": "onBlur",
        "description": "输入框值失去焦点时触发的事件",
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
                "componentName": "FunctionSetter",
                "isRequired": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onErrorInput",
            "zh-CN": "输入框尝试输入错误数"
          },
          "tip": "onErrorInput | 输入框尝试输入错误数组触发的事件"
        },
        "name": "onErrorInput",
        "description": "输入框尝试输入错误数组触发的事件",
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
                "componentName": "FunctionSetter"
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
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AtInputNumber",
    "screenshot": "",
    "schema": {
      "componentName": "AtInputNumber",
      "props": {
        "min": "0",
        "max": "100",
        "step": "1",
        "size": "'normal'",
        "width": "120",
        "disabled": "false",
        "disabledInput": "false"
      }
    }
  }
];

export default {
  ...AtInputNumberMeta,
  snippets
};
