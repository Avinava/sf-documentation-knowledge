---
title: "Next Best Action Flow Action"
domain: chatterapi
topic: next-best-action-flow-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:19.811Z
estimatedTokens: 244
keywords: [Best, Action, Flow, recommended]
---

# Next Best Action Flow Action

> A recommended flow.

# Next Best Action Flow Action

A recommended flow.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| flowLabel | String | Label of the recommended flow. | Small, 47.0 | 47.0 |
| flowType | String | Type of recommended flow. Values are:AutoLaunchedFlow—Autolaunched flow that runs in the background.Flow—Screen flow that accepts user inputs. | Small, 47.0 | 47.0 |
| id | String | ID of the flow. | Small, 45.0 | 45.0 |
| name | String | Name of the flow. | Small, 45.0 | 45.0 |
| parameters | Next Best Action Parameter[] | List of parameters to pass to the action. | Small, 45.0 | 45.0 |
| type | String | Type of action. Values are:Flow—Automated process tool with multiple subtypes. | Small, 45.0 | 45.0 |

#### See Also

-   [Next Best Action Recommendation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_recommendation.htm "A recommendation returned by a recommendation strategy.")

## Related Topics

- Next Best Action Parameter (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_action_paramete.htm)
- Next Best Action Recommendation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_recommendation.htm)
