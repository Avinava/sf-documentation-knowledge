---
title: "Integration Procedure Details"
domain: omnistudio
topic: integration-procedure-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.476Z
estimatedTokens: 147
keywords: [Integration, Procedure, Details, Input, representation, details, integration, procedures, clear, cache, for.]
---

# Integration Procedure Details

> Input representation of the details of the integration procedures to clear the cache
    for.

# Integration Procedure Details

Input representation of the details of the integration procedures to clear the cache for.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| blockName | String | Block name of the integration procedure. | Optional | 64.0 |
| iPKey | String | Unique key that's associated with the integration procedure. The format of the value for this property is Type_SubType. | Required | 64.0 |
| inputData | String | Additional data to clear the cache. | Optional | 64.0 |

## Code Examples

```
{
  "inputs": [
    {
      "ipkey": "Account_GetAccountDetails",
      "inputData": "{"Name": "Get Account Details"}",
      "blockName": "Cache"
    }
  ]
}
```
