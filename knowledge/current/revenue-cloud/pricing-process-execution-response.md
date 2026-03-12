---
title: "Pricing Process Execution Response"
domain: revenue-cloud
topic: pricing-process-execution-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.062Z
estimatedTokens: 161
keywords: [Pricing, Process, Execution, Response, Output, representation, details, pricing, process, execution.]
---

# Pricing Process Execution Response

> Output representation of the details of a pricing process execution.

# Pricing Process Execution Response

Output representation of the details of a pricing process execution.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Pricing Error Response | Error encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the response was generated successfully (true) or not (false). | Small, 63.0 | 63.0 |
| pricingProcess​ExecutionList | Pricing Process Execution List [] | List of the execution details of the pricing process. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "error": {},
  "isSuccess": true,
  "pricingProcessExecutionList": [
    {
      "executionId": "12345",
      "executionType": "Pricing_Line",
      "executionTypeId": "111_LineItem1",
      "message": "The Pricing API execution was successful.",
      "status": "Success"
    },
    {
      "executionId": "12345",
      "executionType": "Api_Execution",
      "executionTypeId": "333",
      "status": "Partial_Success"
    },
    {
      "executionId": "12345",
      "executionType": "Discovery",
      "executionTypeId": "222",
      "status": "Success"
    },
    {
      "executionId": "12345",
      "executionType": "Pricing",
      "executionTypeId": "111",
      "status": "Failure"
    },
    {
      "executionId": "12345",
      "executionType": "Discovery_Line",
      "executionTypeId": "222_LineItem1",
      "status": "Partial_Success"
    },
    {
      "executionId": "12345",
      "executionType": "Pricing_Line",
      "executionTypeId": "111_LineItem2",
      "status": "Failure"
    }
  ]
}
```

## Related Topics

- Pricing Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_error_response.htm)
- Pricing Process Execution List (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_process_execution_output.htm)
