---
title: "createScheduledRecommendation(communityId,
      recommendationDefinitionId, rank, enabled, recommendationAudienceId)"
domain: apex-reference
topic: createscheduledrecommendationcommunityid-recommendationdefinitionid-rank-enabled
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.702Z
keywords: [createScheduledRecommendation, communityId, recommendationDefinitionId, rank, enabled, recommendationAudienceId, Create, scheduled, custom, recommendation, specified, parameters., API, Version, Important, Requires, Chatter, Signature, Parameters, Return]
---

# createScheduledRecommendation(communityId,
      recommendationDefinitionId, rank, enabled, recommendationAudienceId)

> Create a scheduled custom recommendation with the specified
      parameters.

### createScheduledRecommendation(communityId, recommendationDefinitionId, rank, enabled, recommendationAudienceId)

Create a scheduled custom recommendation with the specified parameters.

#### API Version

35.0 only

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 36.0 and later, use [createScheduledRecommendation(communityId, recommendationDefinitionId, rank, enabled, recommendationAudienceId, channel)](#apex_ConnectAPI_Recommendations_createScheduledRecommendation_3a "Create a scheduled custom recommendation with the specified parameters.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ScheduledRecommendation createScheduledRecommendation(String communityId, String recommendationDefinitionId, Integer rank, Boolean enabled, String recommendationAudienceId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationDefinitionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation definition.

rank

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Relative rank of the scheduled custom recommendation indicated by ascending whole numbers starting with 1.

Setting the rank is comparable to an insertion into an ordered list. The scheduled custom recommendation is inserted into the position specified by the rank. The rank of all the scheduled custom recommendations after it is pushed down. See [Ranking scheduled custom recommendations example](#Example).

If the specified rank is larger than the size of the list, the scheduled custom recommendation is put at the end of the list. The rank of the scheduled custom recommendation is the size of the list, instead of the one specified.

If a rank is not specified, the scheduled custom recommendation is put at the end of the list.

enabled

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether scheduling is enabled. If true, the custom recommendation is enabled and appears in Experience Cloud sites. If false, custom recommendations in feeds in Salesforce mobile web aren’t removed, but no new custom recommendations appear. In Customer Service and Partner Central sites, disabled custom recommendations no longer appear.

recommendationAudienceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation definition that this scheduled recommendation schedules.

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