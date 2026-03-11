---
title: "updateScheduledRecommendation(communityId,
      scheduledRecommendationId, scheduledRecommendation)"
domain: apex-reference
topic: updatescheduledrecommendationcommunityid-scheduledrecommendationid-scheduledreco
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.702Z
keywords: [updateScheduledRecommendation, communityId, scheduledRecommendationId, scheduledRecommendation, Update, scheduled, custom, recommendation., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# updateScheduledRecommendation(communityId,
      scheduledRecommendationId, scheduledRecommendation)

> Update a scheduled custom recommendation.

### updateScheduledRecommendation(communityId, scheduledRecommendationId, scheduledRecommendation)

Update a scheduled custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ScheduledRecommendation updateScheduledRecommendation(String communityId, String scheduledRecommendationId, ConnectApi.ScheduledRecommendationInput scheduledRecommendation)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

scheduledRecommendationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the scheduled custom recommendation.

scheduledRecommendation

Type: [ConnectApi.ScheduledRecommendationInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_scheduled_recommendation.htm "A scheduled custom recommendation.")

A ConnectApi.ScheduledRecommendationInput object containing the properties to update.

#### Return Value

Type: [ConnectApi.ScheduledRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scheduled_recommendation.htm "Represents a scheduled custom recommendation.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Ranking scheduled custom recommendations example

If you have these scheduled custom recommendations:

| Scheduled Recommendations | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationB | 2 |
| ScheduledRecommendationC | 3 |

And you include this information in the Scheduled Custom Recommendation Input:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationD | 2 |

The result is:

| Scheduled Recommendation | Rank |
| --- | --- |
| ScheduledRecommendationA | 1 |
| ScheduledRecommendationD | 2 |
| ScheduledRecommendationB | 3 |
| ScheduledRecommendationC | 4 |