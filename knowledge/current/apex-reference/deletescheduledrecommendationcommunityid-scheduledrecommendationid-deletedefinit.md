---
title: "deleteScheduledRecommendation(communityId,
      scheduledRecommendationId, deleteDefinitionIfLast)"
domain: apex-reference
topic: deletescheduledrecommendationcommunityid-scheduledrecommendationid-deletedefinit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [deleteScheduledRecommendation, communityId, scheduledRecommendationId, deleteDefinitionIfLast, Delete, scheduled, custom, recommendation., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# deleteScheduledRecommendation(communityId,
      scheduledRecommendationId, deleteDefinitionIfLast)

> Delete a scheduled custom recommendation.

### deleteScheduledRecommendation(communityId, scheduledRecommendationId, deleteDefinitionIfLast)

Delete a scheduled custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static Void deleteScheduledRecommendation(String communityId, String scheduledRecommendationId, Boolean deleteDefinitionIfLast)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

scheduledRecommendationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the scheduled custom recommendation.

deleteDefinitionIfLast

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true and if this is the last scheduled custom recommendation of a custom recommendation definition, deletes the custom recommendation definition. Default is false.

#### Return Value

Type: Void

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Deleting a scheduled custom recommendation is comparable to a deletion in an ordered list. All scheduled custom recommendations after the deleted scheduled custom recommendation receive a new, higher rank automatically.