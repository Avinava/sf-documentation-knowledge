---
title: "createScheduledRecommendation(communityId,
      scheduledRecommendation)"
domain: apex-reference
topic: createscheduledrecommendationcommunityid-scheduledrecommendation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [createScheduledRecommendation, communityId, scheduledRecommendation, Create, scheduled, custom, recommendation., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# createScheduledRecommendation(communityId,
      scheduledRecommendation)

> Create a scheduled custom recommendation.

### createScheduledRecommendation(communityId, scheduledRecommendation)

Create a scheduled custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ScheduledRecommendation createScheduledRecommendation(String communityId, ConnectApi.ScheduledRecommendationInput scheduledRecommendation)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

scheduledRecommendation

Type: [ConnectApi.ScheduledRecommendationInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_scheduled_recommendation.htm "A scheduled custom recommendation.")

A ConnectApi.ScheduledRecommendationInput object.

#### Return Value

Type: [ConnectApi.ScheduledRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scheduled_recommendation.htm "Represents a scheduled custom recommendation.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.