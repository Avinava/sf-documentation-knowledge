---
title: "Next Best Action, Recommendation"
domain: chatterapi
topic: next-best-action-recommendation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.890Z
estimatedTokens: 72
keywords: [Best, Action, Recommendation, strategy]
---

# Next Best Action, Recommendation

> A recommendation returned by a recommendation
    strategy.

# Next Best Action Recommendation

A recommendation returned by a recommendation strategy.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| acceptanceLabel | String | Text indicating user acceptance of the recommendation. | Small, 45.0 | 45.0 |
| aiModel | String | Reserved for future use. | Small, 47.0 | 47.0 |
| description | String | Description of the recommendation. | Small, 45.0 | 45.0 |
| externalId | String | External ID of the recommendation. This ID doesn’t need to be a Salesforce 18-character ID. For example, it can be a product number from an external system. | Small, 46.0 | Small, 46.0 |
| imageUrl | String | URL to the asset file to display. | Small, 45.0 | 45.0 |
| recommendation​Mode | String | Reserved for future use. | Small, 46.0 | 46.0 |
| recommendation​Score | Double | Reserved for future use. | Small, 46.0 | 46.0 |
| rejectionLabel | String | Text indicating user rejection of the recommendation. | Small, 45.0 | 45.0 |
| target | Next Best Action Native Recommendation | Target to act on. | Small, 45.0 | 45.0 |
| targetAction | Next Best Action Flow Action | Action to recommend. | Small, 45.0 | 45.0 |

#### See Also

-   [Next Best Action Recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_recommendations.htm "Recommendations returned by a recommendation strategy.")

## Code Examples

```
/connect/recommendations/recommendationId
```

## Related Topics

- Recommendation Object (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_proposition.htm)
- Next Best Action Native Recommendation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_proposition_recommendation.htm)
- Next Best Action Flow Action (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_flow_action.htm)
- Next Best Action Recommendations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_recommendations.htm)
