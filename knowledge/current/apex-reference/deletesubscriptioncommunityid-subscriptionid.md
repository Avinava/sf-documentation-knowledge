---
title: "deleteSubscription(communityId,
    subscriptionId)"
domain: apex-reference
topic: deletesubscriptioncommunityid-subscriptionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.484Z
keywords: [deleteSubscription, communityId, subscriptionId, Delete, subscription., method, stop, following, record, user, file., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# deleteSubscription(communityId,
    subscriptionId)

> Delete a subscription. Use this method to stop following a record, a user, or a
    file.

### deleteSubscription(communityId, subscriptionId)

Delete a subscription. Use this method to stop following a record, a user, or a file.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static void deleteSubscription(String communityId, String subscriptionId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subscriptionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID for a subscription.

#### Return Value

Type: Void

#### Usage

“Following” a user, group, or record is the same as “subscribing” to a user, group, or record. A “follower” is the user who followed the user, group, or record. A “subscription” is an object describing the relationship between the follower and the user, group, or record they followed.

To leave a group, call [deleteMember(communityId, membershipId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_deleteMember "Remove a member from a group.").

#### Example

When you follow a user, the call to ConnectApi.ChatterUsers.follow returns a ConnectApi.Subscription object. To stop following the user, pass the id property of that object to this method.

```

```

#### See Also

-   [Follow a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_follow_record.htm "Follow a Record - HTML (New Window)")
    
-   [follow(communityId, userId, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_follow "Follow a user or record.")