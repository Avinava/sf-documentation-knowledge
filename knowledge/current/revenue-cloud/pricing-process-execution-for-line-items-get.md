---
title: "Pricing Process Execution for Line Items (GET)"
domain: revenue-cloud
topic: pricing-process-execution-for-line-items-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.093Z
estimatedTokens: 260
keywords: [Pricing, Process, Execution, Line, Items, GET, Get, pricing, execution, details, line, items, process, type.]
---

# Pricing Process Execution for Line Items (GET)

> Get the pricing execution details for the line items of a pricing
      process by using the execution ID and execution type.

# Pricing Process Execution for Line Items (GET)

Get the pricing execution details for the line items of a pricing process by using the execution ID and execution type.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

GET

Path parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| executionId | String | ID of the pricing process execution record. | Required | 63.0 |
| executionType | String | Type of the execution that's defined internally within the pricing API. Valid values are:Pricing_LineDiscovery_Line | Required | 63.0 |

Response body for GET

[Pricing Process Execution Details for Line Items](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_process_execution_line_item_details_get_output.htm "Output representation of the pricing process execution details for the line items along with the error details and response generation status.")

## Code Examples

```
/connect/core-pricing/pricing-process-execution/lineitems/executionId/executionType
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/pricing-process-execution/lineitems/29646938297972/Pricing_Line
```

## Related Topics

- Pricing Process
              Execution Details for Line Items (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_process_execution_line_item_details_get_output.htm)
