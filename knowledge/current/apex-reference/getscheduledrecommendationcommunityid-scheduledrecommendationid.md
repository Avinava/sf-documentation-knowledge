---
title: "getScheduledRecommendation(communityId,
      scheduledRecommendationId)"
domain: apex-reference
topic: getscheduledrecommendationcommunityid-scheduledrecommendationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [getScheduledRecommendation, communityId, scheduledRecommendationId, Get, scheduled, custom, recommendation., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getScheduledRecommendation(communityId,
      scheduledRecommendationId)

> Get a scheduled custom recommendation.

### getScheduledRecommendation(communityId, scheduledRecommendationId)

Get a scheduled custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ScheduledRecommendation getScheduledRecommendation(String communityId, String scheduledRecommendationId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

scheduledRecommendationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the scheduled custom recommendation.

#### Return Value

Type: [ConnectApi.ScheduledRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scheduled_recommendation.htm "Represents a scheduled custom recommendation.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.