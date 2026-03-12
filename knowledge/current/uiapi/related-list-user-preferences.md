---
title: "Related List User Preferences"
domain: uiapi
topic: related-list-user-preferences
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.158Z
estimatedTokens: 246
keywords: [User, Preferences]
---

# Related List User Preferences

> User preferences for a related list.

# Related List User Preferences

User preferences for a related list.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columnWidths | Map<String, Integer> | Column width preferences for the related list. -1 indicates default width. | Small, 55.0 | 55.0 |
| columnWrap | Map<String, Boolean> | Indicates whether the column text wraps. | Small, 55.0 | 55.0 |
| orderedBy | List Order By Info[] | Ordering information for the related list. | Small, 55.0 | 55.0 |
| preferencesId | String | The related list ID for the user preferences. | Small, 55.0 | 55.0 |

#### See Also

-   [Get Related List User Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_preferences_get.htm "Returns user preferences for a related list.")

-   [Update Related List User Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_preferences_patch.htm "Updates user preferences for a related list.")

## Related Topics

- List Order By Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_order_by_info.htm)
- Get Related List User Preferences (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_preferences_get.htm)
- Update Related List User Preferences (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_preferences_patch.htm)
