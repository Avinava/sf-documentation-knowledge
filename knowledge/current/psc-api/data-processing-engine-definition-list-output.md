---
title: "Data Processing Engine Definition List Output"
domain: psc-api
topic: data-processing-engine-definition-list-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.912Z
estimatedTokens: 183
keywords: [Data, Processing, Engine, Definition, Output, representation, Record, Aggregation, generation]
---

# Data Processing Engine Definition List Output

> Output representation of a Record Aggregation Data Processing Engine definition
    generation request.

# Data Processing Engine Definition List Output

Output representation of a Record Aggregation Data Processing Engine definition generation request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Status code of the request. | Small, 59.0 | 59.0 |
| dpeIds | String[] | List of Data Processing Engine definition IDs. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the Data Processing Engine definition is generated (true) or not (false). | Small, 59.0 | 59.0 |
| message | String | Indicates whether the generation of the Data Processing Engine definition succeeded or failed. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "code": "200",
  "dpeIds": [
    "9N1SB00000006IL0AY"
  ],
  "isSuccess": true,
  "message": "DPE Generated Successfully"
}
```
