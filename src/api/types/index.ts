const params = {
  comment: "",
  dataChangeCreatedBy: "xianggeng.zhao",
  dataChangeCreatedTime: "2021-03-01T18:49:34.000+0800", // 2021-03-01T18:49:34.000+0800 格式化的时间
  dataChangeLastModifiedBy: "haoze.li",
  dataChangeLastModifiedTime: "2021-06-07T16:17:33.000+0800",
  id: 25475,
  key: "frontend.config", // namespaced
  lineNum: 1,
  namespaceId: 4598,
  tableViewOperType: "update", // 枚举
  value: `{\n  "entryPoints": {\n    "greetings": {\n      "login": [\n        {\n          "desc": "Me page entry point",\n          "value": 1\n        },\n        {\n          "desc": "Help Center page entry point",\n          "value": 4\n        },\n        {\n          "desc": "Seller Me page entry point",\n          "value": 2\n        },\n        {\n          "desc": "Buyer Shipping Info page entry point",\n          "value": 3\n        }\n      ],\n      "nonLogin": [\n        {\n          "desc": "Me page entry point",\n          "value": 1\n        },\n        {\n          "desc": "Help Center page entry point",\n          "value": 4\n        }\n      ]\n    },\n    "hqAndShortcuts": {\n      "login": [\n        {\n          "desc": "Buyer Shipping Info page entry point",\n          "value": 3\n        },\n        {\n          "desc": "Seller Me page entry point",\n          "value": 2\n        },\n        {\n          "desc": "General entry point",\n          "value": 0\n        }\n      ],\n      "nonLogin": [\n        {\n          "desc": "General entry point",\n          "value": 0\n        }\n      ]\n    },\n    "hqCategory": {\n      "login": [\n        {\n          "desc": "General entry point",\n          "value": 0\n        }\n      ],\n      "nonLogin": [\n        {\n          "desc": "General entry point",\n          "value": 0\n        }\n      ]\n    },\n    "3x3": {\n      "login": [\n        {\n          "desc": "General entry point",\n          "value": 0\n        }\n      ],\n      "nonLogin": [\n        {\n          "desc": "General entry point",\n          "value": 0\n        }\n      ]\n    }\n  },\n"userType": [{\n"desc": "Normal users",\n"value": 1\n}, {\n"desc": "Premium users",\n"value": 2\n}],\n  "orderStatus": [\n    {\n      "desc": "To Ship",\n      "value": "to_ship"\n    },\n    {\n      "desc": "To Receive",\n      "value": "to_receive"\n    },\n    {\n      "desc": "Completed",\n      "value": "completed"\n    },\n    {\n      "desc": "Cancelled",\n      "value": "cancelled"\n    }\n  ],\n  "grayFeatures": {\n    "intentPrediction": {\n      "country": ["id"]\n    },\n"showUserType": {\n"country": ["id", "ph", "th", "tw", "sg"]\n}\n  },\n  "TrafficManagementCentre": {\n    "Overview": {\n      "Graphs": [\n        {\n          "title": "Chatbot",\n          "tooltip": "The number represents the total chatbot received sessions of the most recent 10 minutes of the data range. \nThe ratio represents the total chatbot received sessions of the most recent 10 minutes compared with the last 10 minutes.",\n          "icon": "headset",\n          "type": "Stat",\n          "source": "prom",\n          "promParams": {\n            "query": "sum(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))",\n            "ratioQuery": "(sum(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))%20%2F%20sum(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5Doffset%2010m)))%20-%201"\n          },\n          "options": {\n            "valueName": "current"\n          },\n          "row": 6,\n          "column": 3\n        },\n        {\n          "title": "Top Entry Point",\n          "tooltip": "The entry point name represents the entry point that created most sessions to chatbot in the most recent 10 minutes.",\n          "icon": "person",\n          "type": "Stat",\n          "source": "prom",\n          "promParams": {\n            "query": "sum%20by%20(entry_point)%20(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))",\n            "ratioQuery": ""\n          },\n          "options": {\n            "valueName": "name",\n            "legendFormat": "{{entry_point}}"\n          },\n          "row": 6,\n          "column": 3\n        },\n        {\n          "title": "To Live Agent",\n          "tooltip": "The number represents the total number of sessions where users go to live agent of the most recent 10 minutes of the data range. \n The ratio represents the total number of sessions where users go to live agent of the most recent 10 minutes compared with the last 10 minutes.",\n          "icon": "phone",\n          "type": "Stat",\n          "source": "prom",\n          "promParams": {\n            "query": "sum(delta(chatbot_liveagent_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))",\n            "ratioQuery": "(sum(delta(chatbot_liveagent_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))%20%2F%20sum(delta(chatbot_liveagent_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5Doffset%2010m)))%20-%201"\n          },\n          "options": {\n            "valueName": "current"\n          },\n          "timeout": "",\n          "row": 6,\n          "column": 3\n        },\n        {\n          "title": "User in the Queue",\n          "tooltip": "The number represents the total number of users that queueing to the live agent at that time point with 10 minutes update interval. \n The ratio represents the total number of users that queueing to the live agent at that time point compared with the last time point.",\n          "icon": "people",\n          "type": "Stat",\n          "source": "prom",\n          "promParams": {\n            "query": "sum(max(queue_ccu%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D)%20by(ccu))",\n            "ratioQuery": "(sum(max(queue_ccu%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D)%20by(ccu))%20%2F%20sum(max(queue_ccu%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7Doffset%2010m)%20by(ccu)))%20-%201"\n          },\n          "options": {\n            "valueName": "current"\n          },\n          "row": 6,\n          "column": 3\n        },\n        {\n          "title": "Traffic Breakdown By Dialogues",\n          "tooltip": "The values plotted over time represent the total sessions chatbot received of each function.",\n          "type": "Area",\n          "source": "prom",\n          "promParams": {\n            "query": "sum%20by%20(function)%20(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))",\n            "ratioQuery": "(sum%20by%20(function)%20(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))%20%2F%20sum%20by%20(function)%20(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5Doffset%2010m)))%20-%201"\n          },\n          "options": {\n            "legendFormat": "{{function}}"\n          },\n          "row": 14,\n          "column": 6\n        },\n        {\n          "title": "Traffic To Agent Breakdown By Functions",\n          "tooltip": "The values plotted over time represent the total sessions that transferred to live agent of each function.",\n          "type": "Area",\n          "source": "prom",\n          "promParams": {\n            "query": "sum%20by%20(function)(delta(chatbot_liveagent_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))",\n            "ratioQuery": "(sum%20by%20(function)(delta(chatbot_liveagent_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))%20%2F%20sum%20by%20(function)(delta(chatbot_liveagent_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5Doffset%2010m)))-1"\n          },\n          "options": {\n            "legendFormat": "{{function}}"\n          },\n          "row": 14,\n          "column": 6\n        },\n        {\n          "title": "Traffic Breakdown By Entry Point",\n          "tooltip": "The values plotted over time represent the total sessions chatbot received from each entry point.",\n          "type": "Line",\n          "source": "prom",\n          "promParams": {\n            "query": "sum%20by%20(entry_point)%20(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))",\n            "ratioQuery": "(sum%20by%20(entry_point)%20(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5D))%20%2F%20sum%20by%20(entry_point)%20(delta(chatbot_exit_count%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%5B10m%5Doffset%2010m)))%20-%201"\n          },\n          "options": {\n            "legendFormat": "{{entry_point}}"\n          },\n          "row": 14,\n          "column": 6\n        },\n        {\n          "title": "User In the Live Agent Queues(Top 5 Categories)",\n          "tooltip": "The values plotted over time represent the users that are queuing to the live agent of the top 5 categories.",\n          "type": "Line",\n          "source": "prom",\n          "promParams": {\n            "query": "max(queue_ccu%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D)%20by%20(ccu)",\n            "ratioQuery": "(max(queue_ccu%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D)%20by%20(ccu)%20%2F%20max(queue_ccu%7Bregion%3D%22id%22%2Cenv%3D%22test%22%7D%20offset%2010m)%20by%20(ccu))%20-%201"\n          },\n          "options": {\n            "legendFormat": "{{ccu}}"\n          },\n          "filter": {\n            "type": "top5"\n          },\n          "row": 14,\n          "column": 6\n        }\n      ]\n    }\n  }\n}`,
};

export enum ENVS {
  TEST = "TEST",
  UAT = "UAT",
  STAGING = "STAGING",
  LIVE = "LIVE",
}

export enum CLUSTERS {
  // DEFAULT = "DEFAULT",
  // SG = "SG",
  // MY = "MY",
  TH = "TH",
  // ID = "ID",
  // VN = "VN",
  // PH = "PH",
  // TW = "TW",
  BR = "BR",
  // XX = "XX",
  // MX = "MX",
}

export interface PutParam {
  comment: string;
  dataChangeCreatedBy: string;
  dataChangeCreatedTime: string; // 2021-03-01T18:49:34.000+0800 格式化的时间
  dataChangeLastModifiedBy: string;
  dataChangeLastModifiedTime: string;
  id: number;
  key: string; // namespaced
  lineNum: number;
  namespaceId: number;
  tableViewOperType: string; // 枚举
  value: string;
}

export interface PutApiParam {
  config: PutParam;
  url: string;
}

export interface ConfigItem {
  isDeleted: boolean;
  isModified: boolean;
  item: PutParam;
}

export interface GetApiResponse {
  baseInfo: any;
  items: ConfigItem[];
}

export interface GetConfigParam {
  url: string;
}

export interface GetNamespaceParam {
  url: string;
}

export interface GetNamespaceResponse {
  namespaces: ["frontend-config"];
}

export interface ReleaseApiParam {
  isEmergencyPublish:boolean;
  releaseComment:string;
  releaseTitle:string;
}
