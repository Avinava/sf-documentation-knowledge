---
title: "Replicated Field Input"
domain: bi-dev-guide-rest
topic: replicated-field-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.819Z
estimatedTokens: 507
keywords: [Replicated, Input, Analytics, dataset, known, connected]
---

# Replicated Field Input

> A field for an Analytics replicated dataset, also known as a connected
  object.

# Replicated Field Input

A field for an Analytics replicated dataset, also known as a connected object.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| default​Value | Object | An optional default value. | Optional | 37.0 |
| description | String | A long-form description of the field. | Optional | 37.0 |
| field​Type | Connect​Wave​Field​Type​Enum | The type of the field. Valid values are:DateNumericTextNoteWhen Analytics custom time zone support is enabled, use DateTime or DateOnly instead of Date. | Required if the field is new. | 37.0 |
| format | String | For dates, the format string is used to parse the input value; for other field types, the format string is used for display. | Optional | 37.0 |
| label | String | A user-friendly label for the field. | Optional | 37.0 |
| multi​Value | Boolean | Indicates whether the field is a multivalue field (true) or not (false). The default is false. | Optional | 37.0 |
| multi​Value​Separator | String | The value separator, used only if the field is a multivalue field. | Optional | 37.0 |
| name | String | The field developer name. | Required | 37.0 |
| precision | Integer | The numeric precision or text length depending on field type. | Optional | 37.0 |
| scale | Integer | The numeric scale. | Optional | 37.0 |
| skipped | Boolean | Indicates whether the field should be skipped on replication (true) or not (false). The default is false. If set to true, this field is ignored when syncing. The field metadata isn’t deleted, however, so the field can be 'unskipped' and made active later. | Required | 37.0 |
| system​Field | Boolean | Indicates whether the field is a system field (true) or not (false). The default is false. System fields aren’t queryable. | Optional | 37.0 |
| uniqueId | Boolean | Indicates whether the field is a unique ID for the data set (true) or not (false). The default is false. There can only be one unique ID for any dataset. | Optional | 37.0 |
