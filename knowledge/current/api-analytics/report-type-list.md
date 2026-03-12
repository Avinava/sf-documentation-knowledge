---
title: "Report Type List"
domain: api-analytics
topic: report-type-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.659Z
estimatedTokens: 353
keywords: [Report]
---

# Report Type List

> Return a list of report types.

# Report Type List

Return a list of report types.

## Syntax

URI

/services/data/vXX.X/analytics/report-types

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Returns a list of report types. |

## GET Response Body

An array of report type folder objects. Each object contains the following fields:

| Property | Type | Description |
| --- | --- | --- |
| label | String | The end user-facing name of the report type folder. |
| report-types | report-types[] | An array of report types. |

report-types\[\]

An array of report type objects. Each object contains the following fields:

| Property | Type | Description |
| --- | --- | --- |
| describeUrl | String | A URL link to the report type’s metadata. |
| description | String | Optional. A description of the report type. |
| isHidden | Boolean | Indicates whether an administrator has hidden the report type (true) or not (false). Hidden report types don’t appear in the report builder when creating a report. |
| isHistorical | Boolean | Optional. true for historical tracking report types. If this property is missing, the value is assumed to be false. |
| label | String | The end user-facing name of the report type in the report builder. |
| supportsJoinedFormat | Boolean | Specifies whether a report type is compatible with joined reports (true) or not (false). |
| type | String | The API name of the report type. |
