---
title: "Business Objective Details Input"
domain: chatterapi
topic: business-objective-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.097Z
estimatedTokens: 126
keywords: [Business, Objective, Input, goal, insights, associated]
---

# Business Objective Details Input

> A business objective, or goal, and insights associated with it.

# Business Objective Details Input

A business objective, or goal, and insights associated with it.

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

## Code Examples

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

- Business Objective Insights Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_bus_obj_insights_input.htm)
