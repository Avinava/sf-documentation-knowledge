---
title: "Record Aggregation Definition Input"
domain: psc-api
topic: record-aggregation-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.016Z
estimatedTokens: 124
keywords: [Record, Aggregation, Definition, Input, representation, Data, Processing, Engine, generation]
---

# Record Aggregation Definition Input

> Input representation of a Record Aggregation Data Processing Engine definition
    generation request.

# Record Aggregation Definition Input

Input representation of a Record Aggregation Data Processing Engine definition generation request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| definitionId | String | ID of a record aggregation definition component.To generate a Data Processing Engine definition for all the active record aggregation definition components, specify ALL. | Required | 59.0 |

## Code Examples

```
{   
   "definitionId": "ALL"
}
```
