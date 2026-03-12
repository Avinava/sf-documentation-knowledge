---
title: "List Order By Input"
domain: uiapi
topic: list-order-by-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.204Z
estimatedTokens: 302
keywords: [Order, Input, describing, how, supports, sorting]
---

# List Order By Input

> Information describing how to order a related list. This request
      body supports sorting related lists only by one field. Use this request body to update a
      related list.

# List Order By Input

Information describing how to order a related list. This request body supports sorting related lists only by one field. Use this request body to update a related list.

Example

This example uses a request body to update the metadata for the Contracts related list for the Account object:

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldApiName | String | The API name for the field. | Optional | 50.0 |
| isAscending | Boolean | Indicates whether the list column is ascending or descending. | Optional | 50.0 |

#### See Also

-   [Related List Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_input.htm "A related list to update.")

-   [Related List User Preferences Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_user_preferences_input.htm "User preferences to update for a related list.")

-   [List Preferences Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_preferences_input.htm "List preferences to update.")

-   [Lookup Post Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_lookup_post_input.htm "Get lookup field suggestions.")

## Code Examples

```
PATCH /services/data/v66.0/ui-api/related-list-info/Account/Contracts
```

```
{ 
  "orderedByInfo" : [{ 
    "fieldApiName": "Name",
    "isAscending" : true
  }],
  "userPreferences" : {
    "columnWidths" : {
        "Name" : -1
    },
    "columnWrap" : {
        "Name" : false
    }
  }
}
```

## Related Topics

- Related List Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_input.htm)
- Related List User Preferences Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_user_preferences_input.htm)
- List Preferences Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_preferences_input.htm)
- Lookup Post Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_lookup_post_input.htm)
