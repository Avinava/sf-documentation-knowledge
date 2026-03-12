---
title: "List Info"
domain: uiapi
topic: list-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.880Z
estimatedTokens: 807
keywords: [Info, Metadata]
---

# List Info

> Metadata that describes a list.

# List Info

Metadata that describes a list.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cloneable | Boolean | Indicates whether the list can be cloned. | Small, 42.0 | 42.0 |
| createable | Boolean | Indicates whether a list for the object can be created. | Small, 42.0 | 42.0 |
| deletable | Boolean | Indicates whether the list can be deleted. | Small, 42.0 | 42.0 |
| displayColumns | List Column[] | All display columns for the list. | Small, 42.0 | 42.0 |
| filterLogicString | String | The filter logic string, such as (1 OR 2) and 3. Indexes start with 1. | Small, 42.0 | 42.0 |
| filteredByInfo | List Filter by Info[] | Filtering information for the list. | Small, 42.0 | 42.0 |
| hasMassActions | Boolean | Indicates whether the list has mass actions. | Small, 62.0 | 62.0 |
| id | List Reference | Identity information for the list. | Small, 42.0 | 42.0 only |
| inlineEditDetails | List Inline Edit Details | Inline edit details for the list. | Small, 61.0 | 61.0 |
| label | String | The list’s display label. For example, All Accounts. | Small, 42.0 | 42.0 |
| listReference | List Reference | Object representing the list. | Small, 43.0 | 43.0 |
| listShares | List Info Share Category | Items that the list is shared with. | Small, 61.0 | 61.0 |
| listViewApiName | String | The list’s API name. For example, AllAccounts or __Recent, for the most recently used (MRU) list view for the object. | Small, 42.0 | 42.0 only |
| objectApiNames | String[] | API names of objects that are returned by the list. | Small, 61.0 | 61.0 |
| orderedByInfo | List Order By Info[] | Ordering information for the list. | Small, 42.0 | 42.0 |
| scope | List Scope | Scope information for the list. | Small, 61.0 | 61.0 |
| searchable | Boolean | Indicates whether the list can be searched. | Small, 61.0 | 61.0 |
| updateable | Boolean | Indicates whether the list can be updated. | Small, 42.0 | 42.0 |
| userPreferences | List User Preference | User preferences for the list. | Small, 42.0 | 42.0 |
| visibility | String | Visibility of the list. One of these values:PrivatePublicShared | Small, 42.0 | 42.0 |
| visibilityEditable | Boolean | Indicates whether the visibility of the list can be edited. | Small, 42.0 | 42.0 |

#### See Also

-   [Get Most Recently Used List View Metadata (Deprecated)](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_mru_list_views_md.htm "Get metadata for an object’s most recently viewed (MRU) list view.")

-   [List UI](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_ui.htm "The record data and metadata for a list view.")

-   [Get List View Records and Metadata (Deprecated)](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_records_md.htm "Get record data and metadata for a list view.")

-   [Update List View Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_md_patch.htm "Update list view metadata.")

-   [Create a List View for an Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lists_object_post.htm "Create a list view associated with an object.")

-   [Get List View Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_views_md.htm "Get list view metadata.")

## Related Topics

- List
                  Column (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_column.htm)
- List Filter by
                  Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_filter_by_info.htm)
- List Reference (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_reference.htm)
- List Inline Edit Details (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_inline_edit_details.htm)
- List Info Share Category (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_info_share_category.htm)
- List Order By
                  Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_order_by_info.htm)
- List Scope (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_scope.htm)
- List User
                  Preference (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_user_preference.htm)
- Get Most Recently Used List View Metadata (Deprecated) (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_mru_list_views_md.htm)
- List UI (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_ui.htm)
