---
title: "Data Mapper Execute Input Data"
domain: psc-api
topic: data-mapper-execute-input-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.913Z
estimatedTokens: 92
keywords: [Data, Mapper, Execute, Input, representation, custom, execution]
---

# Data Mapper Execute Input Data

> Input representation of the list of custom data for the execution of the data
    mapper.

# Data Mapper Execute Input Data

Input representation of the list of custom data for the execution of the data mapper.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputs | String[] | List of configuration details for executing the data mappers. | Required | 64.0 |

## Code Examples

```
{
  "inputs": [
    {
      "Name": "Get Account Details"
    }
  ]
}
```
