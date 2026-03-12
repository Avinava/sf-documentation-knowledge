---
title: "List Preferences Input"
domain: uiapi
topic: list-preferences-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.207Z
estimatedTokens: 254
keywords: [Preferences, Input]
---

# List Preferences Input

> List preferences to update.

# List Preferences Input

List preferences to update.

Example

This example updates list preferences for the All Accounts list view.

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| columnWidths | Map<String, Integer> | Column width preferences to update. If you pass a null value, preferences reset to the default. | Optional | 61.0 |
| columnWrap | Map<String, Boolean> | Column wrap preferences to update. If you pass a null value, preferences reset to the default. | Optional | 61.0 |
| orderedBy | List Order By Input[] | Ordering preferences to update. If you pass a null value, preferences reset to the default.In API version 63.0 and later, you can sort by up to five columns. In earlier versions, results are sorted by the first column. | Optional | 61.0 |

#### See Also

-   [Update List View Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_preferences_update.htm "Update list view preferences.")

## Code Examples

```
PATCH /services/data/v66.0/ui-api/list-preferences/Account/AllAccounts
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
- Update List View Preferences (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_list_preferences_update.htm)
