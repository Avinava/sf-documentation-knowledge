---
title: "Update Related List User Preferences"
domain: uiapi
topic: update-related-list-user-preferences
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.687Z
estimatedTokens: 210
keywords: [User, Preferences, Updates]
---

# Update Related List User Preferences

> Updates user preferences for a related list.

# Update Related List User Preferences

Updates user preferences for a related list.

Resource

```

```

-   preferencesId—The ID of user preferences for a related list, for example, Account.RelatedContactList.

Available Version

57.0

HTTP Method

PATCH

Example

To update user preferences for a Contact related list on an Account, use this request with a request body.

```

```

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| relatedListUser​PreferencesInput | Related List User Preferences Input | The related list user preferences to update. | Required | 57.0 |

Response Body

[Related List User Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_user_preferences.htm "User preferences for a related list.")

## Code Examples

```
/ui-api/related-list-preferences/${preferencesId}
```

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

- Related List User
            Preferences Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_user_preferences_input.htm)
- Related List User Preferences (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_user_preferences.htm)
