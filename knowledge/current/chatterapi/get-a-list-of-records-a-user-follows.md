---
title: "Get a List of Records a User Follows"
domain: chatterapi
topic: get-a-list-of-records-a-user-follows
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.179Z
estimatedTokens: 144
keywords: [Records, User, Follows]
---

# Get a List of Records a User Follows

> Get a list of records that a user follows.

# Get a List of Records a User Follows

Get a list of records that a user follows.

Resource

[/chatter/users/userId/following](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_FollowingUsers.htm "Returns a list of people, groups, records, topics, and files that the specified user is following. Also used to follow records.")

HTTP method

GET

Request parameter

page (optional)

Request parameter example

```

```

Returns

[Subscription Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_page.htm "Page of Chatter subscriptions.")

## Code Examples

```
/services/data/v66.0/chatter/users/005D0000001GLowIAB/following?page=1
```

## Related Topics

- /chatter/users/userId/following (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_FollowingUsers.htm)
- Subscription Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_page.htm)
