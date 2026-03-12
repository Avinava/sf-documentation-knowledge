---
title: "Recommendation Reaction Input"
domain: chatterapi
topic: recommendation-reaction-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.157Z
estimatedTokens: 374
keywords: [Recommendation, Reaction, Input, produced, strategy]
---

# Recommendation Reaction Input

> A reaction to a recommendation produced by a recommendation strategy.

# Recommendation Reaction Input

A reaction to a recommendation produced by a recommendation strategy.

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

## Code Examples

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
