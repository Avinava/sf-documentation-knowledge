---
title: "Follow a Record"
domain: chatterapi
topic: follow-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.144Z
estimatedTokens: 204
keywords: [Follow, Record, Chatter]
---

# Follow a Record

> Follow a record in Chatter.

# Follow a Record

Follow a record in Chatter.

Resource

[/chatter/users/me/following](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_FollowingUsers.htm "Returns a list of people, groups, records, topics, and files that the specified user is following. Also used to follow records.")

HTTP method

POST

Request body

[Following Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_following_input.htm "Following input.")

Request body example

```

```

Request parameter

subjectId

The subjectId is the ID of the item you want to follow. In versions 29.0 and above, the subjectId can be a topic ID.

Request parameter example

```

```

Returns

[Subscription](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription.htm "Chatter subscription, or following, information.")

## Code Examples

```
{ "subjectId" : "001D000000Iyu2p" }
```

```
/services/data/v66.0/chatter/users/me/following?subjectId=001D000000Iyu2p
```

## Related Topics

- /chatter/users/me/following (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_FollowingUsers.htm)
- Following Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_following_input.htm)
- Subscription (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription.htm)
