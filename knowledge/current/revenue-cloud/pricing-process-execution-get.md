---
title: "Pricing Process Execution (GET)"
domain: revenue-cloud
topic: pricing-process-execution-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.840Z
estimatedTokens: 344
keywords: [Pricing, Process, Execution]
---

# Pricing Process Execution (GET)

> Get the execution details of a pricing process by using the
      execution ID.

# Pricing Process Execution (GET)

Get the execution details of a pricing process by using the execution ID.

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

Path parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| executionId | String | ID of the pricing process execution record. The ID is generated each time a pricing process is executed. | Required | 63.0 |

Query parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| executionType | String | Type of execution that's defined internally within the pricing API.Valid values are:API_ExecutionDiscovery—Discovery procedureDiscovery_Line—Discovery procedure for the line items.Pricing—Pricing procedurePricing_Line—Pricing procedure for the line items.If the executionType parameter isn't specified, the API retrieves records for all the execution types that are associated with the specified execution ID. | Optional | 63.0 |

Response body for GET

[Pricing Process Execution Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_process_execution_get_output.htm "Output representation of the details of a pricing process execution.")

## Code Examples

```
/connect/core-pricing/pricing-process-execution/executionId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/pricing-process-execution/29646938297972
```

## Related Topics

- Pricing Process
              Execution Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_process_execution_get_output.htm)
