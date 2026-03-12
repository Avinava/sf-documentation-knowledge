---
title: "Get List View Preferences"
domain: uiapi
topic: get-list-view-preferences
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.370Z
estimatedTokens: 168
keywords: [View, Preferences]
---

# Get List View Preferences

> Get list view preferences.

# Get List View Preferences

Get list view preferences.

Resource

```

```

-   objectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   listViewApiName—The API name of a list view, such as AllAccounts.

Available version

61.0

HTTP methods

GET

Example

This example gets list preferences for the All Accounts list view.

```

```

Response body for GET

[List Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_preferences.htm "List preferences.")

## Code Examples

```
/ui-api/list-preferences/${objectApiName}/${listViewApiName}
```

```
GET /services/data/v66.0/ui-api/list-preferences/Account/AllAccounts
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- List Preferences (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_preferences.htm)
