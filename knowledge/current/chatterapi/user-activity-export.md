---
title: "User Activity, Export"
domain: chatterapi
topic: user-activity-export
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.834Z
estimatedTokens: 143
keywords: [User, Activity, Export, Chatter-related, bookmarks, topic, endorsements, votes]
---

# User Activity, Export

> Export Chatter-related activity, such as bookmarks, topic
      endorsements, and votes, for a user.

# User Activity, Export

Export Chatter-related activity, such as bookmarks, topic endorsements, and votes, for a user.

The following activities can be exported.

Resource

```

```

```

```

Available version

42.0

Requires Chatter

Yes

HTTP methods

POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

POST doesn’t take request parameters or a request body.

Response body for POST

[User Activities Job](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activities_job.htm "User activities job.")

## Code Examples

```
/chatter/users/userId/activities/export-job
```

```
/connect/communities/communityId/chatter/users/userId/activities/export-job
```

## Related Topics

- User Activities Job (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activities_job.htm)
