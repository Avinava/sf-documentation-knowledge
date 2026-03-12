---
title: "Record Layout Section"
domain: uiapi
topic: record-layout-section
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.094Z
estimatedTokens: 270
keywords: [Record, Layout]
---

# Record Layout Section

> A section in a record layout.

# Record Layout Section

A section in a record layout.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| collapsible | Boolean | Indicates whether the section can be collapsed. | Medium, 41.0 | 41.0 |
| columns | Integer | The number of columns in the section. | Small, 41.0 | 41.0 |
| heading | String | The heading text for the section. | Small, 41.0 | 41.0 |
| id | String | The ID of the section. | Small, 41.0 | 41.0 |
| layoutRows | Record Layout Row[] | A collection of the rows in the section. | Small, 41.0 | 41.0 |
| rows | Integer | The number of rows in the section. | Small, 41.0 | 41.0 |
| tabOrder | String | Indicates the tab order for the items in the section during view and edit. Valid values are:LeftRightTopDown | Small, 63.0 | 63.0 |
| useHeading | Boolean | Indicates whether the heading text is expected to be displayed. | Medium, 41.0 | 41.0 |

#### See Also

-   [Record Layout](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout.htm "The layout information for a record.")

## Related Topics

- Record Layout Row (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout_row.htm)
- Record Layout (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_layout.htm)
