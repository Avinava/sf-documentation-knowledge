---
title: "API Execution Logs (GET)"
domain: revenue-cloud
topic: api-execution-logs-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.631Z
estimatedTokens: 184
keywords: [API, Execution, Logs, log, pricing, record]
---

# API Execution Logs (GET)

> Get the log details of a pricing API execution record by using the
      execution ID.

# API Execution Logs (GET)

Get the log details of a pricing API execution record by using the execution ID.

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
| executionId | String | ID of the pricing process execution record. | Required | 63.0 |

Response body for GET

[Pricing Execution Waterfall Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_api_execution_waterfall_response.htm "Output representation of the execution process that's associated with a pricing waterfall.")

## Code Examples

```
/connect/core-pricing/apiexecutionlogs/executionId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/apiexecutionlogs/29646938297972
```

## Related Topics

- Pricing Execution
              Waterfall Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_api_execution_waterfall_response.htm)
