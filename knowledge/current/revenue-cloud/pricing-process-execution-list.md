---
title: "Pricing Process Execution List"
domain: revenue-cloud
topic: pricing-process-execution-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.066Z
estimatedTokens: 250
keywords: [Pricing, Process, Execution, List, Output, representation, execution, details, different, types, pricing, processes.]
---

# Pricing Process Execution List

> Output representation of the execution details for different types of the pricing
    processes.

# Pricing Process Execution List

Output representation of the execution details for different types of the pricing processes.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| executionId | String | Unique ID that's generated each time a pricing process is executed. | Small, 63.0 | 63.0 |
| executionType | String | Type of the execution that's defined internally within the pricing API. | Small, 63.0 | 63.0 |
| executionTypeId | String | Unique execution type ID that's generated internally for process executions, such as pricing or discovery procedures. | Small, 63.0 | 63.0 |
| message | String | Message that's generated when a pricing process is executed. | Small, 63.0 | 63.0 |
| status | String | Execution process status for a line item. Valid values are:FailurePartial_Success—Applies to Pricing and Discovery procedures when execution for some line items fails.Success | Small, 63.0 | 63.0 |

## Code Examples

```
{
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
      "status": "Success"
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
      "status": "Success"
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
