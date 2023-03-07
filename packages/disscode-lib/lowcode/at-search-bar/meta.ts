
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtSearchBarMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtSearchBar",
  "title": "AtSearchBar",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtSearchBar",
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
            "en-US": "placeholder",
            "zh-CN": "输入框占位符"
          },
          "tip": "placeholder | 输入框占位符"
        },
        "name": "placeholder",
        "description": "输入框占位符",
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
            "en-US": "maxLength",
            "zh-CN": "最大输入长度"
          },
          "tip": "maxLength | 最大输入长度"
        },
        "name": "maxLength",
        "description": "最大输入长度",
        "defaultValue": "140",
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
            "en-US": "fixed",
            "zh-CN": "是否固定顶部"
          },
          "tip": "fixed | 是否固定顶部"
        },
        "name": "fixed",
        "description": "是否固定顶部",
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
            "en-US": "focus",
            "zh-CN": "是否聚焦"
          },
          "tip": "focus | 是否聚焦"
        },
        "name": "focus",
        "description": "是否聚焦",
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
            "en-US": "disabled",
            "zh-CN": "是否禁止输入"
          },
          "tip": "disabled | 是否禁止输入"
        },
        "name": "disabled",
        "description": "是否禁止输入",
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
            "en-US": "showActionButton",
            "zh-CN": "是否一直显示右侧按钮"
          },
          "tip": "showActionButton | 是否一直显示右侧按钮"
        },
        "name": "showActionButton",
        "description": "是否一直显示右侧按钮",
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
            "en-US": "actionName",
            "zh-CN": "右侧按钮文案"
          },
          "tip": "actionName | 右侧按钮文案"
        },
        "name": "actionName",
        "description": "右侧按钮文案",
        "defaultValue": "'搜索'",
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
            "en-US": "inputType",
            "zh-CN": "输入框输入类型"
          },
          "tip": "inputType | 输入框输入类型"
        },
        "name": "inputType",
        "description": "输入框输入类型",
        "defaultValue": "'text'",
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
            "en-US": "onFocus",
            "zh-CN": "输入框聚焦时触发"
          },
          "tip": "onFocus | 输入框聚焦时触发"
        },
        "name": "onFocus",
        "description": "输入框聚焦时触发",
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
            "en-US": "onClear",
            "zh-CN": "点击清除按钮时触发事"
          },
          "tip": "onClear | 点击清除按钮时触发事件"
        },
        "name": "onClear",
        "description": "点击清除按钮时触发事件",
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
            "en-US": "onConfirm",
            "zh-CN": "点击完成按钮时触发"
          },
          "tip": "onConfirm | 点击完成按钮时触发"
        },
        "name": "onConfirm",
        "description": "点击完成按钮时触发",
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
            "en-US": "onActionClick",
            "zh-CN": "右侧按钮点击触发事件"
          },
          "tip": "onActionClick | 右侧按钮点击触发事件"
        },
        "name": "onActionClick",
        "description": "右侧按钮点击触发事件",
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
    "title": "AtSearchBar",
    "screenshot": "",
    "schema": {
      "componentName": "AtSearchBar",
      "props": {
        "maxLength": "140",
        "fixed": "false",
        "focus": "false",
        "disabled": "false",
        "showActionButton": "false",
        "actionName": "'搜索'",
        "inputType": "'text'"
      }
    }
  }
];

export default {
  ...AtSearchBarMeta,
  snippets
};
