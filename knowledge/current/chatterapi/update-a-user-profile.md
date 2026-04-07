---
title: "Update a User Profile"
domain: chatterapi
topic: update-a-user-profile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:24.404Z
estimatedTokens: 170
keywords: [User, Profile]
---

> Update a user profile.

# Update a User Profile

Update a user profile.

Resource

[/chatter/users/userId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserProfileInformation.htm "Information about the context or specified user's Chatter profile.")

HTTP method

PATCH

Request body

[User Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_user_input.htm "User input.")

Request body example

```

```

Request parameter

aboutMe

Request parameter example

```

```

Returns

[User Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm "User detail. If the context user doesn’t have permission to see a property, the property is set to null.")

## Code Examples

```
{   "aboutMe": "Writer at Salesforce"}
```

```
/services/data/v66.0/chatter/users/me?aboutMe=Writer+at+Salesforce
```

## Related Topics

- /chatter/users/userId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserProfileInformation.htm)
- User Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_user_input.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
