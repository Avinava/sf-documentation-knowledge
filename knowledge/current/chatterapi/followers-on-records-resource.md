---
title: "Followers on Records Resource"
domain: chatterapi
topic: followers-on-records-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.381Z
estimatedTokens: 186
keywords: [Followers, Records, Resource, record]
---

# Followers on Records Resource

> Get information about the followers of the specified
         record.

# Followers on Records Resource

Get information about the followers of the specified record.

Resource

```

```

```

```

As of version 29.0, you can use a topic ID for the recordId.

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Request parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 1000. If you don't specify a size, the default is 25. |

Response body

[Follower Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_followers.htm "Page of Chatter followers.")

## Code Examples

```
/chatter/records/recordId/followers
```

```
/connect/communities/communityId/chatter/records/recordId/followers
```

## Related Topics

- Follower Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_followers.htm)
