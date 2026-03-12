---
title: "User Information"
domain: chatterapi
topic: user-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.960Z
estimatedTokens: 389
keywords: [User, users, organization]
---

# User Information

> Returns information about all users in an
  organization.

# User Information

Returns information about all users in an organization.

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

| Parameter | Type | Description | Available Version |
| --- | --- | --- | --- |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | 23.0 |
| pageSize | Integer | The number of items per page. Valid values are between 1 and 250. The default value is 25. | 23.0 |
| q | String | Specifies the string to search.This parameter searches user names, not email addresses, titles, and so on. | 23.0 |
| searchContextId | String | Specify a feed item ID that provides context for the search results.Use this parameter for @mention completion. Passing a feed item ID for searchContextId matches users already mentioned in the thread earlier in the returned collection. You can also use the Mentions Completions resource, which is specifically designed for @mention completion.When using this parameter, you can’t query more than 500 results and you can’t use wildcards in the search term. | 28.0 |

Response body

[User Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_page.htm "Page of Chatter users.")

In versions earlier than 28.0, the user property in the User Page response body can contain a User Summary or a User Detail response body. In version 28.0 and later, it always contains User Detail. The fields that the context user is not allowed to see are set to null.

## Code Examples

```
/chatter/users
```

```
/connect/communities/communityId/chatter/users
```

## Related Topics

- Mentions Completions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_completions.htm)
- User Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_page.htm)
