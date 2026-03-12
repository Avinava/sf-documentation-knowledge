---
title: "Searching"
domain: salesforce-large-data-volumes-bp
topic: searching
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.965Z
estimatedTokens: 174
keywords: [Searching]
---

# Searching

# Searching

| Goal | Best Practice |
| --- | --- |
| Reducing the number of records to return | Keep searches specific and avoid using wildcards, if possible. For example, search with Michael instead of Mi*. |
| Reducing the number of joins | Use single-object searches for greater speed and accuracy. |
| Improving efficiency | Use the setup area for searching to enable language optimizations, and turn on enhanced lookups and auto-complete for better performance on lookup fields. |
| Improving search performance | In some cases, partition data with divisions. (See Divisions.) |
| Reducing the time it takes to index inserts and updates for large data volumes | See Search Architecture. |

## Related Topics

- Divisions (atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_infrastructure_divisions.htm)
- Search Architecture (atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_concepts_search_architecture.htm)
