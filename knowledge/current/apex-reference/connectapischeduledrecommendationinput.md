---
title: "ConnectApi.ScheduledRecommendationInput"
domain: apex-reference
topic: connectapischeduledrecommendationinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.539Z
estimatedTokens: 1080
keywords: [ConnectApi.ScheduledRecommendationInput, scheduled, custom, recommendation.]
---

# ConnectApi.ScheduledRecommendationInput

> A scheduled custom recommendation.

# ConnectApi.ScheduledRecommendationInput

A scheduled custom recommendation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| channel | ConnectApi.​Recommendation​Channel | A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:CustomChannel1—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.CustomChannel2—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel3—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel4—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel5—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.DefaultChannel—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.Use these channel values; you can’t rename or create other channels. | Optional for creating a scheduled recommendationIf not specified, defaults to DefaultChannel.Don’t use when updating a scheduled recommendation | 36.0 |
| enabled | Boolean | Indicates whether scheduling is enabled. If true, the custom recommendation is enabled and appears in Experience Cloud sites. If false, custom recommendations in feeds in Salesforce mobile web aren’t removed, but no new custom recommendations appear. In Customer Service and Partner Central sites, disabled custom recommendations no longer appear. | Optional | 35.0 |
| rank | Integer | Relative rank of the scheduled custom recommendation indicated by ascending whole numbers starting with 1.Setting the rank is comparable to an insertion into an ordered list. The scheduled custom recommendation is inserted into the position specified by the rank. The rank of all the scheduled custom recommendations after it is pushed down. See Ranking scheduled custom recommendations example.If the specified rank is larger than the size of the list, the scheduled custom recommendation is put at the end of the list. The rank of the scheduled custom recommendation is the size of the list, instead of the one specified.If a rank is not specified, the scheduled custom recommendation is put at the end of the list. | Optional | 35.0 |
| recommendation​AudienceId | String | ID of the audience for this scheduled custom recommendation.When updating a scheduled custom recommendation, specify ALL to remove the association between a custom recommendation audience and a scheduled custom recommendation. | Optional | 35.0 |
| recommendation​DefinitionId | String | ID of the custom recommendation definition that this scheduled recommendation schedules. | Required to create a scheduled recommendationYou can’t specify a recommendation​DefinitionId when updating a scheduled recommendation. | 35.0 |

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

#### See Also

-   [createScheduledRecommendation(communityId, scheduledRecommendation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createScheduledRecommendation_2 "Create a scheduled custom recommendation.")

## Related Topics

- ConnectApi.​Recommendation​Channel (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- createScheduledRecommendation(communityId, scheduledRecommendation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm)
