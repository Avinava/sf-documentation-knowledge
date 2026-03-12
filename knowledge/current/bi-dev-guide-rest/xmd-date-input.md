---
title: "Xmd Date Input"
domain: bi-dev-guide-rest
topic: xmd-date-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.993Z
estimatedTokens: 185
keywords: [Xmd, Date, Input, extended, metadata]
---

# Xmd Date Input

> The extended metadata (Xmd) for a date.

# Xmd Date Input

The extended metadata (Xmd) for a date.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| alias | String | The alias of the Date column. | Required | 36.0 |
| fields | Xmd​Date​Fields​Input | The formatting information for the date fields. | Required | 36.0 |
| first​Day​Of​Week | Integer | Denotes the first day of the week. | Optional | 36.0 |
| fiscal​Month​Offset | Integer | The offset number of months for the fiscal year in relation to the calendar year. | Optional | 36.0 |
| fully​Qualified​Name | String | The fully qualified name of the date. | Required | 39.0 |
| label | String | The label of the Date column. | Optional | 36.0 |

## Related Topics

- Xmd​Date​Fields​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_date_field_input.htm)
