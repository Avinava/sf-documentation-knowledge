---
title: "Related List Info"
domain: uiapi
topic: related-list-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.132Z
estimatedTokens: 759
keywords: [Info, Metadata]
---

# Related List Info

> Metadata that describes a related list.

# Related List Info

Metadata that describes a related list.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cloneable | Boolean | Indicates whether the related list can be cloned. | Small, 50.0 | 50.0 |
| createable | Boolean | Indicates whether a new related list for this related list’s object can be created. | Small, 50.0 | 50.0 |
| deletable | Boolean | Indicates whether the related list can be deleted. | Small, 50.0 | 50.0 |
| displayColumns | Related List Column[] | All display columns for this related list. | Small, 50.0 | 50.0 |
| fieldApiName | String | The API name of the field in the child object that links to the parent object. | Small, 51.0 | 51.0 |
| fields | String[] | Related list fields queried. If a field is specified and the user doesn’t have access to it or it doesn’t exist, an error occurs. | Small, 57.0 | 57.0 |
| filterable | Boolean | Indicates whether users can apply quick filters to the related list. | Small, 58.0 | 58.0 |
| filterLogicString | String | The filter logic string, such as (1 OR 2) and 3. Related lists don’t support saved filters, so the value is always empty. | Small, 50.0 | 50.0 |
| filteredByInfo | List Filter by Info[] | Filtering information for the related list. Related lists don’t support saved filters, so the value is always empty. | Small, 50.0 | 50.0 |
| label | String | The related list display label. For example, Contracts. | Small, 50.0 | 50.0 |
| listReference | Related List Reference | A reference to the related list. | Small, 50.0 | 50.0 |
| objectApiNames | String[] | The API names for the objects returned in the related list. The objects returned depend on the parent object’s layout. | Small, 51.0 | 51.0 |
| orderedByInfo | List Order By Info[] | Ordering information for the related list. | Small, 50.0 | 50.0 |
| optionalFields | String[] | Additional related list fields queried. If a field is specified and the user doesn’t have access to it, no error occurs. | Small, 57.0 | 57.0 |
| restrictColumnsToLayout | Boolean | Indicates whether metadata was retrieved for only the list columns in the page layout (true) or all columns (false). | Small, 57.0 | 57.0 |
| updateable | Boolean | Indicates whether the related list can be updated. | Small, 50.0 | 50.0 |
| userPreferences | List User Preference | User preferences for the related list. | Small, 50.0 | 50.0 |
| visibility | String | The related list’s visibility. Related lists are always Public. | Small, 50.0 | 50.0 |
| visibilityEditable | Boolean | Indicates whether the visibility of the related list can be edited. The value is always false. | Small, 50.0 | 50.0 |

#### See Also

-   [Get Related List Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md.htm "Returns metadata for a related list in a page layout.")

-   [Update Related List Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md_patch.htm "Update metadata for a related list in a page layout.")

## Related Topics

- Related List Column (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_column.htm)
- List Filter by Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_filter_by_info.htm)
- Related List Reference (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_reference.htm)
- List Order By Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_order_by_info.htm)
- List User Preference (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_user_preference.htm)
- Get Related List Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md.htm)
- Update Related List Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md_patch.htm)
