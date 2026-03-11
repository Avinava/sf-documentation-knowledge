---
title: "follow(communityId, userId, subjectId)"
domain: apex-reference
topic: followcommunityid-userid-subjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.471Z
keywords: [follow, communityId, userId, subjectId, Follow, user, record., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example, Usage, See]
---

# follow(communityId, userId, subjectId)

> Follow a user or record.

### follow(communityId, userId, subjectId)

Follow a user or record.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Subscription follow(String communityId, String userId, String subjectId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user or record to follow.

#### Return Value

Type: [ConnectApi.​Subscription](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_subscription.htm "Subscription.")

#### Example

```

```

#### Usage

This method creates an EntitySubscription record, which requires certain permissions. See the Usage section of the [EntitySubscription](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_entitysubscription.htm) object for more information.

#### See Also

-   [Unfollow a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_unfollow_record.htm "Unfollow a Record - HTML (New Window)")