---
title: "Hold Violation Input"
domain: edu-cloud-dev-guide
topic: hold-violation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.819Z
estimatedTokens: 294
keywords: [Hold, Violation, Input, representation, assign, student]
---

# Hold Violation Input

> Input representation of the request to assign a hold to a student.

# Hold Violation Input

Input representation of the request to assign a hold to a student.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| caseOrigin | String | Origin of the case for the contact user. | Optional | 65.0 |
| caseRecord​TypeId | String | Record Type ID of the case for the contact user. | Optional | 65.0 |
| caseStatus | String | Status of the case for the contact user. | Optional | 65.0 |
| compliance​DueDate | String | Date by which compliance is expected for the hold violation. | Optional | 65.0 |
| dateCreated | String | Date from which the hold violation is effective. | Optional | 65.0 |
| dateResolved | String | Date on which the hold violation is resolved. | Optional | 65.0 |
| description | String | Description of the hold violation. | Optional | 65.0 |
| reasons | String[] | Reasons for the hold violation. | Optional | 65.0 |
| regulatory​CodeId | String | Unique ID for hold Definition. | Required | 65.0 |
| status | String | Status of the hold violation. | Optional | 65.0 |
| type | String | Type of the hold violation. | Optional | 65.0 |

## Code Examples

```
{
  "caseStatus": "string",
  "caseOrigin": "string",
  "caseRecordTypeId": "string",
  "dateCreated": "2025-07-25",
  "description": "string",
  "complianceDueDate": "2025-07-25",
  "dateResolved": "2025-07-25",
  "status": "string",
  "type": "string",
  "regulatoryCodeId": "string",
  "reasons": [
    "string"
  ]
}
```
