---
title: "Business Objectives, Recommendations"
domain: chatterapi
topic: business-objectives-recommendations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.962Z
estimatedTokens: 995
keywords: [Business, Objectives, Recommendations, recommended, actions, goals]
---

# Business Objectives, Recommendations

> Get, create, and update recommended actions for business objectives
      (goals).

# Business Objectives, Recommendations

Get, create, and update recommended actions for business objectives (goals).

Resource

```

```

Available version

59.0

HTTP methods

GET PATCH POST PUT

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessObjectiveId | String | ID of the business objective. | Required | 59.0 |
| channelId | String | Associated channel ID for the recommended action. | Optional | 59.0 |
| domain | String | Domain of the recommended action to filter by. | Optional | 59.0 |
| externalName | String | External name used for recommended action filtering. | Optional | 59.0 |
| grouping | String | Free-form categorization field to filter the recommended action by additional groupings. | Optional | 59.0 |
| secondaryState | String | Optional state field for additional filtering of recommendation states. | Optional | 59.0 |
| state | String | Primary state of the recommended action to filter by (e.g., "ACTIVE", "INACTIVE", "ACCEPTED", "NOT_EXPIRING"). | Optional | 59.0 |
| tertiaryState | String | Optional state field for additional filtering of recommendation states. | Optional | 59.0 |

Response body for GET

[Recommended Actions](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations_output.htm "List of recommended actions.")

Request body for PATCH, POST, and PUT

Root XML tag

busObjRecommendation

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| acceptanceLabel | String | Text indicating user acceptance of the recommended action. | Optional | 60.0 |
| actionInfo | Action Info Input | Name and parameters required for processing and displaying the recommended action. | Optional | 60.0 |
| businessObjectiveId | String | 18-character business objective ID associated with the recommended action. | Required | 60.0 |
| channelId | String | Associated channel ID for the recommended action. | Required | 61.0 |
| description | String | Detailed description of the recommended action. | Optional | 60.0 |
| domain | String | Domain category of the recommended action (e.g., "Product"). | Optional | 60.0 |
| externalName | String | External identifier used for recommended action tracking. | Optional | 61.0 |
| externalState | String | JSON string containing data required for executing the recommended action. | Optional | 60.0 |
| goalId | String | 18-character GoalAssignment ID linked to the recommended action. | Optional | 61.0 |
| grouping | String | Free-form categorization field to keep track of additional groupings of the recommended actions. | Optional | 62.0 |
| iconName | String | SLDS icon name representing the recommended action domain. | Optional | 60.0 |
| imageId | String | Content asset file ID for the recommended action display image. | Optional | 60.0 |
| name | String | Display name of the recommended action. | Required | 60.0 |
| output | Action Info Input | Stores the last executed snapshot of the recommended action. | Optional | 61.0 |
| recommendationId | String | 18-character unique identifier for the recommended action. | Required | 60.0 |
| rejectionLabel | String | Text indicating user rejection of the recommended action. | Optional | 60.0 |
| score | String | Impact score of the recommended action (value between 0-100). | Optional | 60.0 |
| secondaryState | String | Optional state field for additional filtering of recommended action states. | Optional | 62.0 |
| state | String | Primary state of the recommended action (e.g., "ACTIVE", "INACTIVE", "ACCEPTED", "NOT_EXPIRING"). | Optional | 60.0 |
| tertiaryState | String | Optional state field for additional filtering of recommended action states. | Optional | 62.0 |

Response body for PATCH, POST, and PUT

[Recommended Action](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_rec.htm "Recommended action.")

## Code Examples

```
/connect/business-objectives/recommendations
```

```
{
    "acceptanceLabel": "Accept Recommendation",
    "actionInfo": {
        "name": "recommendedAction",
        "parameters": "{"actionType": "product_recommendation"}"
    },
    "businessObjectiveId": "0GO000000000001",
    "channelId": "0CH000000000001",
    "description": "Increase revenue by promoting this product",
    "domain": "Product",
    "externalName": "PROD_REC_001",
    "externalState": "{"productId": "01t000000000001"}",
    "goalId": "0GG000000000001",
    "grouping": "revenue_growth",
    "iconName": "standard:product",
    "imageId": "069000000000001",
    "name": "Product Recommendation",
    "output": {
        "name": "lastExecutedAction",
        "parameters": "{"executionTime": "2024-03-21T10:30:00Z"}"
    },
    "recommendationId": "0RG000000000001",
    "rejectionLabel": "Dismiss",
    "score": "85",
    "state": "ACTIVE",
    "secondaryState": "HIGH_PRIORITY",
    "tertiaryState": "REVENUE_FOCUSED"
}
```

## Related Topics

- Recommended Actions (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations_output.htm)
- Action Info Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_info_input.htm)
- Recommended Action (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_rec.htm)
