---
title: "Fields Response"
domain: revenue-cloud
topic: fields-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.740Z
estimatedTokens: 106
keywords: [Fields, Response, Output, representation, details, optional, fields, usage-based, selling-related, objects.]
---

# Fields Response

> Output representation of the details of the optional fields on the usage-based
    selling-related objects.

# Fields Response

Output representation of the details of the optional fields on the usage-based selling-related objects.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| display​Value | String | Display value of a field. | Big, 63.0 | 63.0 |
| value | Object | Value of a field in its original data form. | Big, 63.0 | 63.0 |

## Code Examples

```
"fields": {
    "MyCustomDate__c": {
      "displayValue": "2024-09-24",
      "value": "2024-09-24T17:46:30.662Z"
    },
    "MyCustomNumber__c": {
      "displayValue": "20.0",
      "value": 20
    }
  }
```
