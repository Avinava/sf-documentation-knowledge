---
title: "Get Related List User Preferences"
domain: uiapi
topic: get-related-list-user-preferences
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.684Z
estimatedTokens: 136
keywords: [User, Preferences]
---

# Get Related List User Preferences

> Returns user preferences for a related list.

# Get Related List User Preferences

Returns user preferences for a related list.

Resource

```

```

-   preferencesId—The ID of user preferences for a related list, for example, Account.RelatedContactList.

Available Version

57.0

HTTP Method

GET

Example

To get information about user preferences for a Contact related list on an Account, make this request.

```

```

Response Body

[Related List User Preferences](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_user_preferences.htm "User preferences for a related list.")

## Code Examples

```
/ui-api/related-list-preferences/${preferencesId}
```

```
GET /services/data/v66.0/ui-api/related-list-preferences/Account.RelatedContactList
```

## Related Topics

- Related List User Preferences (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_user_preferences.htm)
