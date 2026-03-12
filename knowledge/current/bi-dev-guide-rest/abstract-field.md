---
title: "Abstract Field"
domain: bi-dev-guide-rest
topic: abstract-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.913Z
estimatedTokens: 416
keywords: [Abstract, base, definition, dataset]
---

# Abstract Field

> The base definition of a dataset field.

# Abstract Field

The base definition of a dataset field.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| default​Value | Object | An optional default value | Small, 37.0 | 37.0 |
| description | String | An optional description of the field | Small, 37.0 | 37.0 |
| field​Type | Connect​Wave​Field​Type​Enum | The type of the field. Valid values are:DateDateOnlyDateTimeNumericText | Small, 37.0 | 37.0 |
| format | String | For date field types, the format is used to parse the input value. For other field types, the format string is used for display. | Small, 37.0 | 37.0 |
| label | String | The label for the field. | Small, 37.0 | 37.0 |
| multi​Value | Boolean | Indicates if the field is a multivalue field (true) or not (false). The default is false. | Small, 37.0 | 37.0 |
| multi​Value​Separator | String | Required only for fields where multiValue is true. This is the value separator for multivalues. | Small, 37.0 | 37.0 |
| name | String | The field developer name. | Small, 37.0 | 37.0 |
| precision | Integer | The numeric precision or text length depending on the field type. | Small, 37.0 | 37.0 |
| scale | Integer | The numeric scale for numeric field types only. | Small, 37.0 | 37.0 |
| system​Field | Boolean | Indicates if the field is a system field (true) or not (false). The default is false. System fields are not queryable. | Small, 37.0 | 37.0 |
| unique​Id | Boolean | Indicates whether the field is a unique ID for the data set (true) or not (false). The default is false. There can only be one unique ID for any data set. | Small, 37.0 | 37.0 |
