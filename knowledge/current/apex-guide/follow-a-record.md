---
title: "Follow a Record"
domain: apex-guide
topic: follow-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.315Z
estimatedTokens: 113
keywords: [Follow, Record, Call]
---

# Follow a Record

> Call a method to follow a record.

# Follow a Record

Call a method to follow a record.

Call [follow(communityId, userId, subjectId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_follow) to follow a record.

```

```

#### See Also

-   [Unfollow a Record](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_unfollow_record.htm "Call a method to stop following a record.")

## Code Examples

```
ChatterUsers.ConnectApi.Subscription subscriptionToRecord = ConnectApi.ChatterUsers.follow(null, 'me', '001RR000002G4Y0');
```

## Related Topics

- Unfollow a Record (atlas.en-us.apexcode.meta/apexcode/connectapi_examples_unfollow_record.htm)
