---
title: "User Followers"
domain: chatterapi
topic: user-followers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.851Z
estimatedTokens: 163
keywords: [User, Followers]
---

# User Followers

> Get information about the followers for a
  user.

# User Followers

Get information about the followers for a user.

Resource

```

```

```

```

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Request parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| page | Integer | Specifies the page number to return. The default value is 0, which returns the first page. |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 1000. If you don't specify a size, the default is 25. |

Response body

[Follower Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_followers.htm "Page of Chatter followers.")

## Code Examples

```
/chatter/users/userId/followers
```

```
/connect/communities/communityId/chatter/users/userId/followers
```

## Related Topics

- Follower Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_followers.htm)
