---
title: "List User Preference Input"
domain: uiapi
topic: list-user-preference-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.220Z
estimatedTokens: 171
keywords: [User, Preference, Input, preferences]
---

# List User Preference Input

> A related list user preferences to update.

# List User Preference Input

A related list user preferences to update.

Example

This example uses a request body to update the metadata for the Contracts related list for the Account object:

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| columnWidths | Map<String, Integer> | Column width preferences.-1 indicates default width. | Optional | 50.0 |
| columnWrap | Map<String, Boolean> | Indicates whether the column text wraps. | Optional | 50.0 |

#### See Also

-   [Related List Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_input.htm "A related list to update.")

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
