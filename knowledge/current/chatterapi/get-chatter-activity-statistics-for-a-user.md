---
title: "Get Chatter Activity Statistics for a User"
domain: chatterapi
topic: get-chatter-activity-statistics-for-a-user
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.148Z
estimatedTokens: 133
keywords: [Chatter, Activity, Statistics, User]
---

# Get Chatter Activity Statistics for a User

> Get the Chatter activity statistics for a user.

# Get Chatter Activity Statistics for a User

Get the Chatter activity statistics for a user.

Resource

[/chatter/users/userId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserProfileInformation.htm "Information about the context or specified user's Chatter profile.")

HTTP method

GET

Example

```

```

Returns

[User Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm "User detail. If the context user doesn’t have permission to see a property, the property is set to null.")

## Code Examples

```
/services/data/v66.0/chatter/users/005D0000001GLowIAB?include=/chatterActivity
```

## Related Topics

- /chatter/users/userId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserProfileInformation.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
