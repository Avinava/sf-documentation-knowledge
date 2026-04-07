---
title: "Custom Field Input"
domain: psc-api
topic: custom-field-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:00.973Z
estimatedTokens: 127
---

> Input representation for the custom field.

# Custom Field Input

Input representation for the custom field.

Root XML tag

<CustomField>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataType | String | The data type of the custom field.Possible values are:BooleanDateOnlyDateTimeMultiEnumNumberStringTimeOnly | Optional | 56.0 |
| fieldName | String | The name of the custom field. | Optional | 56.0 |
| fieldValue | Object | The value of the custom field. | Optional | 56.0 |
