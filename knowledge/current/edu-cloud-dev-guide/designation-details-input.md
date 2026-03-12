---
title: "Designation Details Input"
domain: edu-cloud-dev-guide
topic: designation-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.794Z
estimatedTokens: 197
keywords: [Designation, Input, representation, designations, associated]
---

# Designation Details Input

> Input representation of the designations that are associated with the
    request.

# Designation Details Input

Input representation of the designations that are associated with the request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Transaction amount that's allocated to the designation, which is for gifts only. | Optional | 60.0 |
| id | String | ID of the gift designation. This ID can also be passed as an externalID in the format given below: {             "externalId": {               "fieldName": "<EXTERNAL_ID_FIELD_NAME>",               "fieldValue": "<EXTERNAL_ID_FIELD_VALUE>"         }, | Optional | 60.0 |
| percent | Double | Percentage of the transaction or commitment amount that's allocated to the designation. | Optional | 60.0 |

## Code Examples

```
{
  "designations": {
    "id": "0gd0030f0303xx4",
    "amount": 150.25,
    "percent": 10
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
