---
title: "List Column"
domain: uiapi
topic: list-column
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.843Z
estimatedTokens: 276
keywords: [Column]
---

# List Column

> A column in a list.

# List Column

A column in a list.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fieldApiName | String | The API name for the field. | Small, 42.0 | 42.0 |
| inlineEditAttributes | Map<String, List Column Inline Edit Attributes> | Map of record type ID to inline edit attributes for the column. | Small, 61.0 | 61.0 |
| label | String | The label of the field. | Small, 42.0 | 42.0 |
| lookupId | String | The ID of the field if the field is a reference. If the field isn’t a reference, the value can be null. | Small, 58.0 | 58.0 |
| searchable | Boolean | Indicates whether the list column is searchable. | Small, 61.0 | 61.0 |
| sortable | Boolean | Indicates whether the list column is sortable. | Small, 42.0 | 42.0 |

#### See Also

-   [Get List View Records and Metadata (Deprecated)](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records_md.htm "Get record data and metadata for a list view.")

-   [List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm "Metadata that describes a list.")

## Related Topics

- List Column Inline Edit Attributes (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_column_inline_edit_attributes.htm)
- Get List View Records and Metadata (Deprecated) (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records_md.htm)
- List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_metadata.htm)
