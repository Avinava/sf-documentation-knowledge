---
title: "Next Best Action, Reactions"
domain: chatterapi
topic: next-best-action-reactions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.901Z
estimatedTokens: 756
keywords: [Best, Action, Reactions, record, user, recommendations]
---

# Next Best Action, Reactions

> Get and record user reactions to recommendations.

# Next Best Action, Reactions

Get and record user reactions to recommendations.

Resource

```

```

Available version

45.0

HTTP methods

GET, POST

Users with the Manage Next Best Action Recommendations or Modify All Data permission can get recommendation reactions.

Request parameters for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextRecordId | String | Use the ID of a context record to filter the results. | Optional | 45.0 |
| createdById | String | Use the ID of the user who is indirectly reacting to the recommendation to filter the results. | Optional | 45.0 |
| onBehalfOfId | String | Use the ID of the user or record that created the recommendation reaction to filter the results. | Optional | 45.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 45.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 45.0 |
| targetId | String | Use the ID of the target to filter the results. | Optional | 45.0 |

Response body for GET

[Recommendation Reaction Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_reaction_collection.htm "A list of recommendation reactions.")

Request body for POST

Root XML tag

<reaction>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aiModel | String | Reserved for future use. | Optional | 47.0 |
| contextRecordId | String | ID of the context record. For example, if the next best action is on a case detail page, the ID of the case. | Optional | 45.0 |
| executionId | String | ID of the original recommendation strategy execution. | Optional | 45.0 |
| externalId | String | External ID of the recommendation. This ID doesn’t need to be a Salesforce 18-character ID. For example, it can be a product number from an external system. | Optional | 46.0 |
| onBehalfOfId | String | ID of the user or entity for which the reaction took place. | Optional | 45.0 |
| reactionType | String | Type of reaction to a recommendation. Values are:AcceptedRejected | Required | 45.0 |
| recommendation​Mode | String | Reserved for future use. | Optional | 46.0 |
| recommendation​Score | Double | Reserved for future use. | Optional | 46.0 |
| strategyName | String | Name of the recommendation strategy. | Required | 45.0 |
| targetActionId | String | ID of the target action. | Optional | 45.0 |
| targetActionName | String | Name of the target action. | Required | 45.0 |
| targetId | String | ID of the recommendation that is being reacted to. | Required | 45.0 |

Response body for POST

[Recommendation Reaction](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_reaction.htm "Reaction to a recommendation produced by a recommendation strategy.")

## Code Examples

```
/connect/recommendation-strategies/reactions
```

```
{
   "contextRecordId": "500xx000000Ylnv",
   "onBehalfOfId": "001xx000003DGQW",
   "reactionType": "Accepted",
   "strategyName": "AcmeSupport",
   "targetActionName": "UpgradeService",
   "targetId": "0prxx00000000M7AAI"
}
```

## Related Topics

- Recommendation Reaction Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_reaction_collection.htm)
- Recommendation Reaction (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_reaction.htm)
