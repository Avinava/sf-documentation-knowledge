---
title: "Session Context"
domain: chatterapi
topic: session-context
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.127Z
estimatedTokens: 259
keywords: [Session, Context, shopper, Commerce, store]
---

# Session Context

> Session context for a shopper using a Commerce store.

# Session Context

Session context for a shopper using a Commerce store.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Context user's account ID. | Small, 57.0 | 57.0 |
| accountName | String | Context user's account name. | Small, 57.0 | 57.0 |
| buyerGroups | Buyer Group[] | List of buyer groups associated with the context. | Small, 58.0 | 58.0 |
| guestUser | Boolean | Indicates if the session context is for a guest user (true) or not (false). | Small, 54.0 | 54.0 |
| profile | Commerce User Profile | User's profile data. | Small, 62.0 | 62.0 |
| userId | String | ID of the user. | Small, 54.0 | 54.0 |
| userName | String | Full name of the user. | Small, 54.0 | 54.0—61.0 |

#### See Also

-   [*Salesforce Connect REST API Developer Guide*: Commerce Webstore Session Context](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_session_context.htm "Get session context information for a Commerce store.")

## Related Topics

- Buyer
                Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_group.htm)
- Commerce User
                  Profile (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_user_profile.htm)
- Salesforce Connect REST API Developer Guide: Commerce Webstore Session
              Context (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_session_context.htm)
