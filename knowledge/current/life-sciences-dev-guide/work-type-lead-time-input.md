---
title: "Work Type Lead Time Input"
domain: life-sciences-dev-guide
topic: work-type-lead-time-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.459Z
estimatedTokens: 170
keywords: [Work, Lead, Time, Input, representation, their, associated, times]
---

# Work Type Lead Time Input

> Input representation of the request to get a list of work types and their associated lead
    times.

# Work Type Lead Time Input

Input representation of the request to get a list of work types and their associated lead times.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of a program enrollee, an account, or opportunity. | Optional | 60.0 |
| priority | Integer | Number between one and ten indicating the priority associated with a country or service territory. This field is useful when you want to override the lead time based on a country or service territory. | Optional | 60.0 |
| workProcedureId | String | Advanced therapy ID. | Required | 60.0 |

## Code Examples

```
{
   "contextId":"0Wwxx0000000DWjCAM",
   "workProcedureId":"0zjSG00000000PpYAI",
   "priority":5
}
```
