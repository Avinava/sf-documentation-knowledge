---
title: "deleteRecommendationReaction(reactionId)"
domain: apex-reference
topic: deleterecommendationreactionreactionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.419Z
keywords: [deleteRecommendationReaction, reactionId, Delete, recommendation, reaction., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# deleteRecommendationReaction(reactionId)

> Delete a recommendation reaction.

### deleteRecommendationReaction(reactionId)

Delete a recommendation reaction.

#### API Version

45.0

#### Requires Chatter

No

#### Signature

public static Void deleteRecommendationReaction(String reactionId)

#### Parameters

reactionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the recommendation reaction or other sObject that caused the user to react.

#### Return Value

Type: Void

#### Usage

Users with the Manage Next Best Action Recommendations or Modify All Data permission can delete recommendation reactions.