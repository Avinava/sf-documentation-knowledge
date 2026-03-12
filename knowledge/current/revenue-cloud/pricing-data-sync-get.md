---
title: "Pricing Data Sync (GET)"
domain: revenue-cloud
topic: pricing-data-sync-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.837Z
estimatedTokens: 185
keywords: [Pricing, Data, Sync, ensure, lookup, tables, contain, latest]
---

# Pricing Data Sync (GET)

> Sync pricing data to ensure that the lookup tables contain the
      latest pricing data.

# Pricing Data Sync (GET)

Sync pricing data to ensure that the lookup tables contain the latest pricing data.

To partially synchronize pricing data, use the Decision Table Refresh Action in a Flow. See [Decision Table Refresh Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/dt_actions_refresh_decision_table.htm "HTML (New Window)").

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

GET

Response body for GET

[Pricing Generic Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_generic_response.htm "Output representation of a pricing data sync request.")

## Code Examples

```
/connect/core-pricing/sync/pricingSyncOrigin
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/sync/syncData
```

## Related Topics

- Pricing Generic
            Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_generic_response.htm)
