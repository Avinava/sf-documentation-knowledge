---
title: "Field Data"
domain: revenue-cloud
topic: field-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.417Z
keywords: [Field, Data]
---

# Field Data

# Field Data

Output representation of the field data.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode​ToErrorMap | Map<String, Unit Of Measure Error> | Error codes mapped to their details. | Small, 63.0 | 63.0 |
| fieldApiName | String | Unique API Name of the field. | Small, 63.0 | 63.0 |
| isRounding​Applicable | Boolean | Indicates whether data rounding is applicable to the decimal (true) or not (false). | Small, 63.0 | 63.0 |
| original​Value | String | Original value of the field. | Small, 63.0 | 63.0 |
| rounded​Value | String | Rounded field value that corresponds to the original value, if data rounding is applicable. | Small, 63.0 | 63.0 |
| unitOf​MeasureId | String | ID of the unit of measure record that’s associated to the field. | Small, 63.0 | 63.0 |