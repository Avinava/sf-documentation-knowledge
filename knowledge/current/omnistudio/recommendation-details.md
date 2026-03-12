---
title: "Recommendation Details"
domain: omnistudio
topic: recommendation-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:50.628Z
estimatedTokens: 351
keywords: [Recommendation, Details, Specifies, recommendation, details, returned, request.]
---

# Recommendation Details

> Specifies the recommendation details returned by the recommendation
      request.

# Recommendation Details

Specifies the recommendation details returned by the recommendation request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| acceptanceLabel | String | The text indicating user acceptance of the recommendation. | Small, 56.0 | 56.0 |
| actionReferenceId | String | The ID of the action to perform, for example, launching a flow. | Small, 56.0 | 56.0 |
| actionReference​Label | String | The label of the action to perform, for example, launching a flow. | Small, 56.0 | 56.0 |
| actionReference​Name | String | The name of the action to perform, for example, launching a flow. | Small, 56.0 | 56.0 |
| actionStrategy​Parameters | Recommendation Action Parameters | The list of parameters to pass to the flow action based on the user’s acceptance or rejection of the recommendation. | Small, 56.0 | 56.0 |
| actionType | String | The type of action. | Small, 56.0 | 56.0 |
| description | String | The description of the recommendation. | Small, 56.0 | 56.0 |
| id | String | The ID of the recommendation. | Small, 56.0 | 56.0 |
| imageUrl | String | The URL of the recommendation image to display. | Small, 56.0 | 56.0 |
| name | String | The name of the recommendation. | Small, 56.0 | 56.0 |
| rejectionLabel | String | The text indicating user rejection of the recommendation. | Small, 56.0 | 56.0 |

## Related Topics

- Recommendation Action Parameters (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_recommendation_action_param.htm)
