---
title: "ConnectApi.ScheduledRecommendation"
domain: apex-reference
topic: connectapischeduledrecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.944Z
estimatedTokens: 657
keywords: [ConnectApi.ScheduledRecommendation, Represents, scheduled, custom, recommendation.]
---

# ConnectApi.ScheduledRecommendation

> Represents a scheduled custom recommendation.

# ConnectApi.ScheduledRecommendation

Represents a scheduled custom recommendation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| channel | ConnectApi.​Recommendation​Channel | A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:CustomChannel1—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.CustomChannel2—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel3—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel4—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel5—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.DefaultChannel—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder. | 36.0 |
| enabled | Boolean | Indicates whether scheduling is enabled. If true, the custom recommendation is enabled and appears in Experience Cloud sites. If false, custom recommendations in feeds in Salesforce mobile web aren’t removed, but no new custom recommendations appear. In Customer Service and Partner Central sites, disabled custom recommendations no longer appear. | 35.0 |
| id | String | 18-character ID of the scheduled custom recommendation. | 35.0 |
| rank | Integer | The rank determining the order of this scheduled custom recommendation. | 35.0 |
| recommendation​AudienceId | String | ID of the audience for the scheduled custom recommendation. | 35.0 |
| recommendation​Definition​Representation | ConnectApi.​Recommendation​Definition | Custom recommendation definition that this scheduled recommendation schedules. | 35.0 |
| url | String | URL to the Connect REST API resource for the scheduled custom recommendation. | 35.0 |

#### See Also

-   [ConnectApi.ScheduledRecommendationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scheduled_recommendation_collection.htm "A list of scheduled custom recommendations.")

## Related Topics

- ConnectApi.​Recommendation​Channel (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​Recommendation​Definition (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_definition.htm)
- ConnectApi.ScheduledRecommendationPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scheduled_recommendation_collection.htm)
