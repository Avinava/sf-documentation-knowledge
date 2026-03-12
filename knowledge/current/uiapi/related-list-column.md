---
title: "Related List Column"
domain: uiapi
topic: related-list-column
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.124Z
estimatedTokens: 414
keywords: [Column]
---

# Related List Column

> A column in a related list.

# Related List Column

A column in a related list.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataType | String | Field type. One of these values:addressbase64booleancomboboxcomplexvalue—Complex Value type (cvt)currencydatedatetimedoubleemailencryptedstringintlocationmultipicklistpercentphonepicklistreferencestringtextareatimeurl | Small, 57.0 | 57.0 |
| fieldApiName | String | The API name for the field. | Small, 42.0 | 42.0 |
| filterable | Boolean | Indicates whether this column is filterable (true) or not (false). | Small, 57.0 | 57.0 |
| label | String | The label of the field. | Small, 42.0 | 42.0 |
| lookupId | String | The ID of the field if the field is a reference. If the field isn’t a reference, the value can be null. | Small, 49.0 | 49.0 |
| picklistValues | String[] | The picklist values for this field. Null if the field isn’t a picklist field. | Small, 57.0 | 57.0 |
| quickFilterOperator | String | The operator used for quick filters on this column. | Small, 57.0 | 57.0 |
| sortable | Boolean | Indicates whether the list column is sortable. | Small, 42.0 | 42.0 |

#### See Also

-   [Related List Info](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm "Metadata that describes a related list.")

-   [Get Related List Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md.htm "Returns metadata for a related list in a page layout.")

-   [Update Related List Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md_patch.htm "Update metadata for a related list in a page layout.")

## Related Topics

- Related List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm)
- Get Related List Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md.htm)
- Update Related List Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md_patch.htm)
