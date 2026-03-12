---
title: "Xmd Date"
domain: bi-dev-guide-rest
topic: xmd-date
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.851Z
estimatedTokens: 431
keywords: [Xmd, Date, extended, metadata]
---

# Xmd Date

> The extended metadata (Xmd) for a date.

# Xmd Date

The extended metadata (Xmd) for a date.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alias | String | The alias of the Date column. | Small, 36.0 | 36.0 |
| compact | Boolean | Indicates whether the date should be displayed as compact or not. | Small, 36.0 | 36.0 |
| description | String | The description of the Date column. | Small, 36.0 | 36.0 |
| fields | Xmd​Date​Field | The formatting information for the date fields. | Small, 36.0 | 36.0 |
| first​Day​Of​Week | Integer | Denotes the first day of the week. | Small, 36.0 | 36.0 |
| fiscal​Month​Offset | Integer | The offset number of months for the fiscal year in relation to the calendar year. | Small, 36.0 | 36.0 |
| format | String | The format for date field. | Small, 53.0 | 53.0 |
| fully​Qualified​Name | String | The fully qualified name of the date. | Small, 39.0 | 39.0 |
| is​Converted​Date​Time | Boolean | Indicates if the DateTime type is from timezone auto conversion or not. | Small, 44.0 | 44.0 |
| is​Year​End​Fiscal​Year | Boolean | Indicates if the year end is the fiscal year or not. | Small, 36.0 | 36.0 |
| label | String | The label of the Date column. | Small, 36.0 | 36.0 |
| show​In​Explorer | Boolean | Indicates whether the dataset field can be selected from the dashboard designer or explorer when creating dashboards and lenses (true) or not (false). Even if showInExplorer is false, the field can still be used for SAQL queries, manually added in JSON, and accessed using the Analytics REST API. | Small, 36.0 | 36.0 |
| type | Connect​Wave​Date​Type | The Date type. Valid values are:DateDateOnlyDateTime | Small, 43.0 | 43.0 |

## Related Topics

- Xmd​Date​Field (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_date_field.htm)
