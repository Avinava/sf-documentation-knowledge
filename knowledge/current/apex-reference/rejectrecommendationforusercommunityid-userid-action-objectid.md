---
title: "rejectRecommendationForUser(communityId, userId, action,
      objectId)"
domain: apex-reference
topic: rejectrecommendationforusercommunityid-userid-action-objectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [rejectRecommendationForUser, communityId, userId, action, objectId, Reject, Chatter, custom, static, recommendation, context, user, specified, object, ID., API, Version, Requires, Signature, Parameters]
---

# rejectRecommendationForUser(communityId, userId, action,
      objectId)

> Reject a Chatter, custom, or static recommendation for the context
      user for the specified action and object ID.

### rejectRecommendationForUser(communityId, userId, action, objectId)

Reject a Chatter, custom, or static recommendation for the context user for the specified action and object ID.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

public static rejectRecommendationForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

action

Type: ConnectApi.​RecommendationActionType

Specifies the action to take on a recommendation. Supported values are:

-   follow—Follow a file, record, topic, or user.
-   join—Join a group.
-   view—View a file, group, article, record, user, custom, or static recommendation.

objectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the object to take action on.

-   If action is follow, objectId is a user ID, file ID, record ID, or topic ID (version 36.0 and later).
-   If action is join, objectId is a group ID.
-   If action is view, objectId is a custom recommendation ID, the enum Today for static recommendations, or an article ID (version 37.0 and later).

#### Return Value

Type: Void