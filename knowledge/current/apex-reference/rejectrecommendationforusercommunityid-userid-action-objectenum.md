---
title: "rejectRecommendationForUser(communityId, userId, action,
      objectEnum)"
domain: apex-reference
topic: rejectrecommendationforusercommunityid-userid-action-objectenum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [rejectRecommendationForUser, communityId, userId, action, objectEnum, Reject, static, recommendation, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# rejectRecommendationForUser(communityId, userId, action,
      objectEnum)

> Reject a static recommendation for the context
    user.

### rejectRecommendationForUser(communityId, userId, action, objectEnum)

Reject a static recommendation for the context user.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static rejectRecommendationForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, ConnectApi.RecommendedObjectType objectEnum)

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

-   view—View a static recommendation.

objectEnum

Type: [ConnectApi.​RecommendedObjectType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendedObjectTypeEnum)

Specifies the object type to take action on.

-   Today—Static recommendations that don’t have an ID, for example, the Today app recommendation.

#### Return Value

Type: Void