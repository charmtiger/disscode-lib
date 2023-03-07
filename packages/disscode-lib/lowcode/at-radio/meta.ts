
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const AtRadioMeta: ComponentMetadata = {
  "componentName": "AtRadio",
  "title": "AtRadio",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "disscode-lib",
    "version": "0.0.4",
    "exportName": "AtRadio",
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
            "zh-CN": "输入框当前值，用户需"
          },
          "tip": "value | 输入框当前值，用户需要通过 onClick 事件来更新 value 值，必填"
        },
        "name": "value",
        "description": "输入框当前值，用户需要通过 onClick 事件来更新 value 值，必填",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": true,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "options",
            "zh-CN": "选项列表"
          },
          "tip": "options | 选项列表"
        },
        "name": "options",
        "description": "选项列表",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "T",
                          "zh-CN": "T"
                        }
                      },
                      "name": "T",
                      "setter": {
                        "componentName": "MixedSetter",
                        "isRequired": true,
                        "props": {}
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "value",
                          "zh-CN": "value"
                        }
                      },
                      "name": "value",
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
                          "en-US": "label",
                          "zh-CN": "label"
                        }
                      },
                      "name": "label",
                      "setter": {
                        "componentName": "StringSetter",
                        "isRequired": true,
                        "initialValue": ""
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "desc",
                          "zh-CN": "desc"
                        }
                      },
                      "name": "desc",
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
                          "en-US": "disabled",
                          "zh-CN": "disabled"
                        }
                      },
                      "name": "disabled",
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
          },
          "isRequired": true,
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "border",
            "zh-CN": "是否显示下边框"
          },
          "tip": "border | 是否显示下边框"
        },
        "name": "border",
        "description": "是否显示下边框",
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
                      "label": "true",
                      "value": true
                    }
                  ],
                  "options": [
                    {
                      "label": "true",
                      "value": true
                    }
                  ]
                },
                "initialValue": true
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClick",
            "zh-CN": "点击选项触发事件,开"
          },
          "tip": "onClick | 点击选项触发事件,开发者需要通过此事件来更新 value，onClick 函数必填"
        },
        "name": "onClick",
        "description": "点击选项触发事件,开发者需要通过此事件来更新 value，onClick 函数必填",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": true
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
const snippets: Snippet[] = [
  {
    "title": "AtRadio",
    "screenshot": "",
    "schema": {
      "componentName": "AtRadio",
      "props": {}
    }
  }
];

export default {
  ...AtRadioMeta,
  snippets
};
