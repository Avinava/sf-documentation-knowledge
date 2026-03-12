---
title: "User Profiles Resource"
domain: chatterapi
topic: user-profiles-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.795Z
estimatedTokens: 217
keywords: [User, Profiles, Resource, user’s, profile]
---

# User Profiles Resource

> Get details about a user’s profile.

# User Profiles Resource

Get details about a user’s profile.

For information about subtab apps, see [What Is a Subtab App?](https://help.salesforce.com/s/articleView?id=platform.apps_classic_subtab_overview.htm&type=5&language=en_US "HTML (New Window)")

The capabilities information provides some information about the context user’s capabilities in relation to another user, called the subject user. For example, the capabilities information indicates whether the context user can chat with the subject user and whether the context user can direct message the subject user. Specify the subject user as the userID.

Resource

```

```

```

```

Available since version

29.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Response body for GET

[User Profile](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_profile.htm "Chatter user profile.")

## Code Examples

```
/connect/user-profiles/userID
```

```
/connect/communities/communityId/user-profiles/userID
```

## Related Topics

- User Profile (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_profile.htm)
