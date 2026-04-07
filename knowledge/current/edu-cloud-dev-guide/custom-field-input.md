---
title: "Custom Field Input"
domain: edu-cloud-dev-guide
topic: custom-field-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:29.110Z
estimatedTokens: 92
keywords: [course, offering]
---

> Input representation of custom fields for the course offering.

# Custom Field Input

Input representation of custom fields for the course offering.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | Name of the custom field. | Required | 64.0 |
| fieldValue | String | Value of the custom field. | Required | 64.0 |

## Code Examples

```
{
  "courseOfferingScheduleCustomAttribute": [
    {
      "fieldName": "customField1__c",
      "fieldValue": "custom field value"
    }
  ]
}
```
