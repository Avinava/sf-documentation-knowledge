---
title: "Related List User Preferences Input"
domain: uiapi
topic: related-list-user-preferences-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.272Z
estimatedTokens: 239
keywords: [User, Preferences, Input]
---

# Related List User Preferences Input

> User preferences to update for a related list.

# Related List User Preferences Input

User preferences to update for a related list.

JSON example

To update user preferences for a Contact related list on an Account, use this request with a request body.

```

```

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columnWidths | Map<String, Integer> | Column width preferences for the related list. -1 indicates default width. | Small, 55.0 | 55.0 |
| columnWrap | Map<String, Boolean> | Indicates whether the column text wraps. | Small, 55.0 | 55.0 |
| orderedBy | List Order By Input[] | Ordering information for the related list. In API version 63.0 and later, you can sort by up to five fields. | Small, 55.0 | 55.0 |

#### See Also

-   [Update Related List User Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_preferences_patch.htm "Updates user preferences for a related list.")

## Code Examples

```
PATCH /services/data/v66.0/ui-api/related-list-preferences/Account.RelatedContactList
```

```
{ 
  "columnWidths" : {
    "Name" : 200
  },
  "columnWrap" : {
     "Name" : false
  },
  "orderedBy" : [{ 
    "fieldApiName": "Name",
    "isAscending" : true
  }]
}
```

## Related Topics

- List Order By Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_order_by_input.htm)
- Update Related List User Preferences (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_preferences_patch.htm)
