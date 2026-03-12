---
title: "Scheduled Custom Recommendation"
domain: chatterapi
topic: scheduled-custom-recommendation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.377Z
estimatedTokens: 1703
keywords: [Scheduled, Custom, Recommendation]
---

# Scheduled Custom Recommendation

> Get information about, update, or delete a scheduled custom
      recommendation.

# Scheduled Custom Recommendation

Get information about, update, or delete a scheduled custom recommendation.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

Resource

```

```

```

```

Available version

33.0

Requires Chatter

Yes

HTTP methods

GET, PATCH, DELETE

Request body for PATCH

Root XML tag

<scheduledRecommendation>

JSON example for updating a scheduled custom recommendation

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| channel | String | A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:CustomChannel1—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.CustomChannel2—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel3—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel4—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel5—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.DefaultChannel—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.Use these channel values; you can’t rename or create other channels. | Optional for creating a scheduled recommendationIf not specified, defaults to DefaultChannel.Don’t use when updating a scheduled recommendation | 36.0 |
| enabled | Boolean | Indicates whether scheduling is enabled. If true, the custom recommendation is enabled and appears in Experience Cloud sites. If false, custom recommendations in feeds in Salesforce mobile web aren’t removed, but no new custom recommendations appear. In Customer Service and Partner Central sites, disabled custom recommendations no longer appear. | Optional | 34.0 |
| rank | Integer | Relative rank of the scheduled custom recommendation indicated by ascending whole numbers starting with 1.Setting the rank is comparable to an insertion into an ordered list. The scheduled custom recommendation is inserted into the position specified by the rank. The rank of all the scheduled custom recommendations after it is pushed down. See Ranking scheduled custom recommendations example.If the specified rank is larger than the size of the list, the scheduled custom recommendation is put at the end of the list. The rank of the scheduled custom recommendation is the size of the list, instead of the one specified.If a rank is not specified, the scheduled custom recommendation is put at the end of the list. | Optional | 33.0 |
| recommendation​AudienceId | String | ID of the audience for this scheduled custom recommendation.When updating a scheduled custom recommendation, specify ALL to remove the association between a custom recommendation audience and a scheduled custom recommendation. | Optional | 35.0 |
| recommendation​DefinitionId | String | ID of the custom recommendation definition that this scheduled recommendation schedules. | Required for creating a scheduled recommendationYou can’t specify a recommendation​DefinitionId when updating a scheduled custom recommendation. | 33.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enabled | Boolean | Indicates whether scheduling is enabled. If true, the custom recommendation is enabled and appears in Experience Cloud sites. If false, custom recommendations in feeds in Salesforce mobile web aren’t removed, but no new custom recommendations appear. In Customer Service and Partner Central sites, disabled custom recommendations no longer appear. | Optional | 34.0 |
| rank | Integer | Relative rank of the scheduled custom recommendation indicated by ascending whole numbers starting with 1.Setting the rank is comparable to an insertion into an ordered list. The scheduled custom recommendation is inserted into the position specified by the rank. The rank of all the scheduled custom recommendations after it is pushed down. See Ranking scheduled custom recommendations example.If the specified rank is larger than the size of the list, the scheduled custom recommendation is put at the end of the list. The rank of the scheduled custom recommendation is the size of the list, instead of the one specified.If a rank is not specified, the scheduled custom recommendation is put at the end of the list. | Optional | 33.0 |
| recommendation​AudienceId | String | ID of the audience for this scheduled custom recommendation.When updating a scheduled custom recommendation, specify ALL to remove the association between a custom recommendation audience and a scheduled custom recommendation. | Optional | 35.0 |

Response body for PATCH

[Scheduled Custom Recommendation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scheduled_recommendation.htm "Represents a scheduled custom recommendation.")

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deleteDefinition​IfLast | Boolean | If true and if the DELETE request is for the last scheduled custom recommendation of a custom recommendation definition, deletes the custom recommendation definition. Default is false. | Optional | 35.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Deleting a scheduled custom recommendation is comparable to a deletion in an ordered list. All scheduled custom recommendations after the deleted scheduled custom recommendation receive a new, higher rank automatically.

## Code Examples

```
/connect/scheduled-recommendations/scheduledRecommendationId
```

```
/connect/communities/communityId/scheduled-recommendations/scheduledRecommendationId
```

```
{   "rank" : "2"}
```

## Related Topics

- Ranking
                          scheduled custom recommendations example (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_scheduled_recommendation_input.htm)
- Scheduled Custom Recommendation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scheduled_recommendation.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Custom Recommendation Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition.htm)
- Scheduled Custom Recommendation Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scheduled_recommendation_collection.htm)
