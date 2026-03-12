---
title: "Business Objectives"
domain: chatterapi
topic: business-objectives
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.969Z
estimatedTokens: 411
keywords: [Business, Objectives, objective, goal, goals]
---

# Business Objectives

> Get business objective (goal) information

# Business Objectives

Get business objective (goal) information

Resource

```

```

Available version

59.0

HTTP methods

GET PATCH

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| channelId | String | Associated channel ID. | Optional | 59.0 |
| includeInsightSummary | Boolean | Specifies whether to include an insight summary in the response. Default value is false. | Optional | 59.0 |
| includeRecSummary | Boolean | Specifies whether to include a summary of recommended actions in the response. Default value is false. | Optional | 59.0 |
| kpiName | String | Name of the key performance indicator. | Optional | 59.0 |
| webstoreId | String | ID of the webstore to retrieve business objectives from. | Required | 59.0 |

Response body for GET

[Business Objectives Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_business_objectives_summary_output.htm "List of summaries for business objectives, or goals.")

Request body for PATCH

Root XML tag

BusinessObjectiveInputRepresentation

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessObjectiveId | String | ID of the business objective. | Required | 62.0 |
| insightSummary | Business Objective Insights Input | A summary of insights about the business objective. | Optional | 62.0 |

Response body for PATCH

[Business Objective Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bus_obj_summary_output.htm "Summary of a business objective, or goal.")

## Code Examples

```
/connect/business-objectives
```

```
{
    "businessObjectiveId": "0GO000000000001",
    "insightSummary": {
        "targetCompletionDate": "2024-12-31",
        "targetValue": 1000000.00
    }
}
```

## Related Topics

- Business Objectives Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_business_objectives_summary_output.htm)
- Business Objective Insights Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_bus_obj_insights_input.htm)
- Business Objective Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bus_obj_summary_output.htm)
- Business Objective (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bus_obj_output.htm)
