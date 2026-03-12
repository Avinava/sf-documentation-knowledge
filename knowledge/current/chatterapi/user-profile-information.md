---
title: "User Profile Information"
domain: chatterapi
topic: user-profile-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.868Z
estimatedTokens: 573
keywords: [User, Profile, context, user's, Chatter]
---

# User Profile Information

> Information about the context or specified user's
         Chatter profile.

# User Profile Information

Information about the context or specified user's Chatter profile.

Resource

```

```

```

```

Available version

23.0

PATCH available in 29.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, PATCH

Response body for GET

-   [User Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm "User detail. If the context user doesn’t have permission to see a property, the property is set to null.")—Versions 26.0 and later. If the user is external, the properties that the User Detail response body shares with the User Summary response body can have non-null values. Other properties are always null.
-   [User Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm "The User Summary response body is a subset of the User Detail response body.")—Versions 25.0 and earlier.

Request body for PATCH

Root XML tag

<user>

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| aboutMe | String | The aboutMe property of a User Detail response body. The maximum length is 1000 characters. This property populates the “About Me” section of the user profile, which is visible to all members of an Experience Cloud site or org. | 29.0 |

Request parameters for PATCH

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| aboutMe | String | The aboutMe property of a User Detail response body. The maximum length is 1000 characters. This property populates the “About Me” section of the user profile, which is visible to all members of an Experience Cloud site or org. | 29.0 |

Response body for PATCH

[User Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm "User detail. If the context user doesn’t have permission to see a property, the property is set to null.")

Example for updating the “About Me” section in the user profile using parameters

```

```

#### See Also

-   [Get Chatter Activity Statistics for a User](atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_activity_statistics_for_user.htm "Get the Chatter activity statistics for a user.")

-   [Update a User Profile](atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_user_profile.htm "Update a user profile.")

## Code Examples

```
/chatter/users/userId
```

```
/connect/communities/communityId/chatter/users/userId
```

```
{
   "aboutMe": "Staff Technical Writer responsible for the Connect API and Connect in Apex documentation."
}
```

```
/chatter/users/me?aboutMe=Staff+Technical+Writer+at+Seattle+Apps
```

## Related Topics

- User
                        Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
- User
                        Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
- Get Chatter Activity Statistics for a User (atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_activity_statistics_for_user.htm)
- Update a User Profile (atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_user_profile.htm)
