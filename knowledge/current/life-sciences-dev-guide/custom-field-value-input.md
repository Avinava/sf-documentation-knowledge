---
title: "Custom Field Value Input"
domain: life-sciences-dev-guide
topic: custom-field-value-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.247Z
estimatedTokens: 144
keywords: [Custom, Input, Adds, additional, any, mapped, medication, statement, API]
---

# Custom Field Value Input

> Adds additional information to any fields not mapped by the medication
      statement API.

# Custom Field Value Input

Adds additional information to any fields not mapped by the medication statement API.

Root XML tag

<CustomFieldValue>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataType | String | Specifies the primitive data type of a field.Possible values are:BooleanDateOnlyDateTimeNumberStringTimeOnly | Required | 53.0 |
| fieldName | String | The name of the field. | Required | 53.0 |
| fieldValue | Object | The value of the field. | Required | 53.0 |

## Code Examples

```
{ 
   "CustomFieldValue": [ {
      "fieldName": "Laterality__c",
      "dataType": "picklist",
      "fieldValue": "Bilateral",
   } ]
}
```
