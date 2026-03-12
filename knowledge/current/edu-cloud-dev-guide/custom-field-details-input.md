---
title: "Custom Field Details Input"
domain: edu-cloud-dev-guide
topic: custom-field-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.788Z
estimatedTokens: 227
keywords: [Custom, Input, representation, incorporate, attributes, records]
---

# Custom Field Details Input

> Input representation of the custom fields for the request to incorporate custom
    attributes into records.

# Custom Field Details Input

Input representation of the custom fields for the request to incorporate custom attributes into records.

You can include the standard fields such as Description, EffectiveStartDate, and more in this request body. To include the standard fields in the request body, specify the API name of the standard field as the value of the fieldName property, and provide the value for the standard field in the fieldValue property.

JSON example

This example shows a sample request that includes a standard field.

```

```

This example shows a sample request that includes a custom field.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | API name of the custom or standard field. | Optional | 60.0 |
| fieldValue | Object | Value of the custom or standard field. | Optional | 60.0 |

## Code Examples

```
{
  "fieldName": "effectiveStartDate",
  "fieldValue": "2024-05-06"
}
```

```
{
  "fieldName": "TShirtSize__c",
  "fieldValue": "Medium"
}
```
