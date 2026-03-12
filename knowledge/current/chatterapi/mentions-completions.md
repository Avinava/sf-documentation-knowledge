---
title: "Mentions Completions"
domain: chatterapi
topic: mentions-completions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.768Z
estimatedTokens: 604
keywords: [Mentions, Completions, users, groups, mention, feed, item, comment, resource, generate, proposed, user, choose, “@”, character]
---

# Mentions Completions

> Information about users and groups to mention in a feed item body or comment body. Use
      this resource to generate a list of proposed mentions that a user can choose from. A mention
      is an “@” character followed by a user or group name. When a user or group is
      mentioned, they receive a notification.

# Mentions Completions

Information about users and groups to mention in a feed item body or comment body. Use this resource to generate a list of proposed mentions that a user can choose from. A mention is an “@” character followed by a user or group name. When a user or group is mentioned, they receive a notification.

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

GET, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Since |
| --- | --- | --- | --- | --- |
| contextId | String | A feed item ID (for a mention in a comment) or a feed subject ID (for a mention in a feed item) that narrows search results, with more useful results listed first. Use a group ID for groups that allow customers to ensure mention completion results include customers. | Optional | 29.0 |
| page | Integer | The number of the page you want returned. Numbering starts at 0. If you pass 0 or omit the property, the first page is returned.Attempting to page beyond 500 results returns an empty response. | Optional | 29.0 |
| pageSize | Integer | The number of items per page. Valid values are from 1 through 100. The default size is 25.Attempting to retrieve more than 500 results returns an empty response. | Optional | 29.0 |
| q | String | A search term for matching user and group names. Searching for a group requires a minimum of 2 characters. Searching for a user doesn’t require a minimum number of characters. This parameter does not support wildcards. | Required | 29.0 |
| type | String | The type of mention completion. One of these values:All—All mention completions, regardless of the type of record to which the mention refers.Group—Mention completions for groups.User—Mention completions for users.The default value is All. | Optional | 29.0 |

Response body for GET

[Mention Completion Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mention_completion_page.htm "Paginated list of Mention Completion response bodies.")

Example for getting mention completions for a comment

Specify the feed item ID in the contextId parameter to request mention completions for a comment on the feed item.

```

```

#### See Also

-   [Get a List of @Mention Proposals](atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_list_of_mention_proposals.htm "Get a list of @mention proposals in Chatter.")

## Code Examples

```
/chatter/mentions/completions
```

```
/connect/communities/communityId/chatter/mentions/completions
```

```
/chatter/mentions/completions?contextId=0D5D0000000Hwky&q=g
```

## Related Topics

- Mention Completion
                     Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mention_completion_page.htm)
- Get a List of @Mention Proposals (atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_list_of_mention_proposals.htm)
