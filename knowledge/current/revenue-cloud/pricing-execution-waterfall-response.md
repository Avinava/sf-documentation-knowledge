---
title: "Pricing Execution Waterfall Response"
domain: revenue-cloud
topic: pricing-execution-waterfall-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.063Z
estimatedTokens: 291
keywords: [Pricing, Execution, Waterfall, Output, representation, process, that's, associated]
---

# Pricing Execution Waterfall Response

> Output representation of the execution process that's associated with a pricing
    waterfall.

# Pricing Execution Waterfall Response

Output representation of the execution process that's associated with a pricing waterfall.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiExecutionId | String | Unique execution ID that's generated each time a pricing API is executed. | Small, 63.0 | Small, 63.0 |
| apiExecution​LogRepresentation​List | API Execution Log Response[] | List of API execution logs. | Small, 63.0 | 63.0 |
| error | Pricing Error Response | Error details of the pricing execution process. | Small, 63.0 | Small, 63.0 |
| executionId | String | Unique ID that's generated each time a pricing process is executed. | Small, 63.0 | Small, 63.0 |
| referenceKey | String | The reference ID that a consuming workstream provides in the API to search for the specific logs in the Pricing Operations Console. | Small, 63.0 | Small, 63.0 |
| success | Boolean | Indicates whether the API execution is successful (true) or not (false). | Small, 63.0 | Small, 63.0 |
| usageType | String | Usage type of the API execution. | Small, 63.0 | Small, 63.0 |

## Code Examples

```
{
  "apiExecutionId": "263369316770986",
  "apiExecutionLogRepresentationList": [
    {
      "message": [
        "The Pricing API couldn't be run. Try again, and if the issue persists, ask your admin for help."
      ]
    }
  ],
  "executionId": "263369316895959",
  "referenceKey": "referenceKey-ABCD",
  "success": false,
  "usageType": "Api_Execution"
}
```

## Related Topics

- API
                  Execution Log Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_api_execution_log.htm)
- Pricing Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_error_response.htm)
