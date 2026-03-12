---
title: "Additional Fields Input"
domain: revenue-cloud
topic: additional-fields-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.617Z
estimatedTokens: 94
keywords: [Additional, Fields, Input, representation, additional, standard, custom, fields, include, response., included]
---

# Additional Fields Input

> Input representation of the additional standard or custom fields to be included in the
    response.

# Additional Fields Input

Input representation of the additional standard or custom fields to be included in the response.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | List of additional standard or custom fields to be included in the response. | Required | 61.0 |

## Code Examples

```
"additionalFields" : {
    "Product2" : {
    "fields" : ["CustomField1__c","StandardField1"]
}
}
```

```
"additionalFields": {
    "Product2": {
      "fields": [
        "code__c"
      ]
    }
```
