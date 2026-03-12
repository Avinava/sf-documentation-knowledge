---
title: "Billing Arrangement (GET)"
domain: revenue-cloud
topic: billing-arrangement-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.846Z
estimatedTokens: 240
keywords: [Billing, Arrangement, GET, Retrieve, billing, arrangement, its, associated, lines.]
---

# Billing Arrangement (GET)

> Retrieve a billing arrangement and its associated billing arrangement
    lines.

# Billing Arrangement (GET)

Retrieve a billing arrangement and its associated billing arrangement lines.

This API fetches billing information, including the split percentage allocation for accounts, the remainder percentage, and whether adjustments are applied to the owning account.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

GET

Request parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billing​ArrangementId | String | Unique ID of the billing arrangement to retrieve. | Required | 66.0 |

Response body for GET

[Billing Arrangement](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_billing_arrangement_output.htm "Output representation that contains the details of a billing arrangement, including its status, configuration settings, and associated lines.")

## Code Examples

```
/revenue/billing/billing-arrangement/billingArrangementId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/billing/billing-arrangement//revenue/billing/billing-arrangement/1bdxx000000004rAAA
```

## Related Topics

- Billing Arrangement (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_billing_arrangement_output.htm)
