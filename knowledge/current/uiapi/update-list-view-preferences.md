---
title: "Update List View Preferences"
domain: uiapi
topic: update-list-view-preferences
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.373Z
estimatedTokens: 235
keywords: [View, Preferences]
---

# Update List View Preferences

> Update list view preferences.

# Update List View Preferences

Update list view preferences.

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   listViewApiName—The API name of a list view, such as AllAccounts.

Available version

61.0

HTTP methods

PATCH

Example

This example updates list preferences for the All Accounts list view.

```

```

```

```

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| listPreferencesInput | List Preferences Input | List preferences to update. | Required | 61.0 |

Response body for PATCH

[List Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_preferences.htm "List preferences.")

## Code Examples

```
/ui-api/list-preferences/${objectApiName}/${listViewApiName}
```

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

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Preferences Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_list_preferences_input.htm)
- List Preferences (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_preferences.htm)
