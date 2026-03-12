---
title: "Insurance Quote Related Record Input"
domain: insurance-developer-guide
topic: insurance-quote-related-record-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.764Z
estimatedTokens: 111
keywords: [Insurance, Quote, Record, Input, representation, line, item, objects]
---

# Insurance Quote Related Record Input

> Input representation of insurance quote line item related objects.

# Insurance Quote Related Record Input

Input representation of insurance quote line item related objects.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| relatedRecordId | String | ID of the related insurance quote record. | Required | 63.0 |
| relatedRecordObjName | String | Object name of the related insurance quote record. | Required | 63.0 |

## Code Examples

```
relatedRecords": [
            {
              "relatedRecordId": "001xx000003GYiEAAW",
              "relatedRecordObjName": "Account"
            },
            {
              "relatedRecordId": "001xx000003GYiEAAV",
              "relatedRecordObjName": "Contact"
            }
          ]
```
