---
title: "Additional Fields Input"
domain: comms-developer-guide
topic: additional-fields-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:25.930Z
estimatedTokens: 94
keywords: [Additional, standard, include]
---

> Input representation of the additional standard or custom fields to include in the
    response.

# Additional Fields Input

Input representation of the additional standard or custom fields to include in the response.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | List of additional standard or custom fields to include in the response. | Optional | 61.0 |

## Code Examples

```
"additionalFields" : {
    "Product2" : {
    "fields" : ["CustomField1__c","StandardField1"]
}
}
```
