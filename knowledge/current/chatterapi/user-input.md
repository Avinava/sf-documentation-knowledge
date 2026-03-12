---
title: "User Input"
domain: chatterapi
topic: user-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:13.001Z
estimatedTokens: 142
keywords: [User, Input]
---

# User Input

> User input.

# User Input

User input.

Root XML tag

<user>

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| aboutMe | String | The aboutMe property of a User Detail response body. The maximum length is 1000 characters. This property populates the “About Me” section of the user profile, which is visible to all members of an Experience Cloud site or org. | 29.0 |

#### See Also

-   [Update a User Profile](atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_user_profile.htm "Update a user profile.")

## Code Examples

```
{
   "aboutMe": "Staff Technical Writer responsible for the Connect API and Connect in Apex documentation."
}
```

## Related Topics

- Update a User Profile (atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_user_profile.htm)
