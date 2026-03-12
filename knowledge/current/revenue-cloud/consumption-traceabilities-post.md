---
title: "Consumption Traceabilities (POST)"
domain: revenue-cloud
topic: consumption-traceabilities-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.489Z
estimatedTokens: 240
keywords: [Consumption, Traceabilities, POST, comprehensive, breakdown, overage, charges, resource, drawdown, enabling, view, that's, applicable, specific, invoice]
---

# Consumption Traceabilities (POST)

> Get a comprehensive breakdown of overage charges and resource drawdown,
      enabling you to view information that's applicable to specific invoice lines.

# Consumption Traceabilities (POST)

Get a comprehensive breakdown of overage charges and resource drawdown, enabling you to view information that's applicable to specific invoice lines.

This API provides an automated, clear, and traceable breakdown of all charges with details of specific rates, tiers, and discounts.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| liableSummaryIds | String[] | List of liable summary IDs to trace the consumption. | Required | 66.0 |

Response body for POST

[Consumption Traceabilities](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_consumption_traceabilities_output.htm "Output representation of the overage and resource drawdown details.")

## Code Examples

```
/revenue/usage-management/consumption/actions/trace
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/usage-management/consumption/actions/trace
```

```
{
  "liableSummaryIds": [
    "1HG000000000001"
  ]
}
```

## Related Topics

- Consumption
              Traceabilities (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_consumption_traceabilities_output.htm)
