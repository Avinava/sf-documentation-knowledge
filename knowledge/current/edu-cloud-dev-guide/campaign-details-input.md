---
title: "Campaign Details Input"
domain: edu-cloud-dev-guide
topic: campaign-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.722Z
estimatedTokens: 134
keywords: [Campaign, Input, representation, that's, associated, gift, transaction]
---

# Campaign Details Input

> Input representation of the campaign that's associated with the gift
    transaction.

# Campaign Details Input

Input representation of the campaign that's associated with the gift transaction.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the gift designation. This ID can also be passed as an externalID in the format given below: {             "externalId": {               "fieldName": "<EXTERNAL_ID_FIELD_NAME>",               "fieldValue": "<EXTERNAL_ID_FIELD_VALUE>"         }, | Optional | 60.0 |

## Code Examples

```
{
  "campaign": {
    "id": "701y0030d0zk6t06f4"
  }
}
```

```
{
            "externalId": {
              "fieldName": "<EXTERNAL_ID_FIELD_NAME>",
              "fieldValue": "<EXTERNAL_ID_FIELD_VALUE>"
        },
```
