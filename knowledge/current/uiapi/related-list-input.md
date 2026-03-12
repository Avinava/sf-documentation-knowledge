---
title: "Related List Input"
domain: uiapi
topic: related-list-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.256Z
estimatedTokens: 296
keywords: [Input]
---

# Related List Input

> A related list to update.

# Related List Input

A related list to update.

Example

This example uses a request body to update the metadata for the Contracts related list for the Account object:

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderedByInfo | List Order By Input[] | A related list’s ordering information. In API version 63.0 and later, you can sort by up to five fields. | Optional | 50.0 |
| userPreferences | List User Preference Input | A related list’s user preferences. | Optional | 50.0 |

#### See Also

-   [Update Related List Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md_patch.htm "Update metadata for a related list in a page layout.")

-   [List Order By Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_order_by_input.htm "Information describing how to order a related list. This request body supports sorting related lists only by one field. Use this request body to update a related list.")

-   [List User Preference Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_user_preference_input.htm "A related list user preferences to update.")

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

- List Order By Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_order_by_input.htm)
- List User Preference Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_user_preference_input.htm)
- Update Related List Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_info_md_patch.htm)
