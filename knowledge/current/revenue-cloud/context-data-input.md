---
title: "Context Data Input"
domain: revenue-cloud
topic: context-data-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.953Z
estimatedTokens: 86
keywords: [Context, Data, Input, representation, context, data.]
---

# Context Data Input

> Input representation of the context data.

# Context Data Input

Input representation of the context data.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| nodeData | Map<String, Object> | Details of the node. | Optional | 60.0 |
| nodeName | String | Name of the node. | Optional | 60.0 |

## Code Examples

```
"additionalContextData":[
  {
  "nodeName": "Contract",
  "nodeData": {
    "id": "xxxxx231",
    "name": "Contract1"
    
  }
},
{
  "nodeName": "Lead",
  "nodeData": {
    "id": "lllllll31",
    "name": "Lead1"
    
  }
}]
```
