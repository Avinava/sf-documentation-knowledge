---
title: "Unfollow a Record"
domain: apex-guide
topic: unfollow-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.400Z
estimatedTokens: 156
keywords: [Unfollow, Record, Call, stop]
---

# Unfollow a Record

> Call a method to stop following a record.

# Unfollow a Record

Call a method to stop following a record.

When you follow a record such as a user, the call to ConnectApi.ChatterUsers.follow returns a ConnectApi.Subscription object. To unfollow a record, pass the id property of that object to [deleteSubscription(communityId, subscriptionId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_Chatter_static_methods.htm#apex_ConnectAPI_Chatter_deleteSubscription).

```

```

#### See Also

-   [Follow a Record](atlas.en-us.apexcode.meta/apexcode/connectapi_examples_follow_record.htm "Call a method to follow a record.")

## Code Examples

```
ConnectApi.Chatter.deleteSubscription(null, '0E8RR0000004CnK0AU');
```

## Related Topics

- Follow a Record (atlas.en-us.apexcode.meta/apexcode/connectapi_examples_follow_record.htm)
