---
title: "Plan Bulk Data Loads"
domain: api-asynch
topic: plan-bulk-data-loads
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.224Z
estimatedTokens: 208
keywords: [Plan, Bulk, Data, Loads, API, performance, depends, you're, loading, well, any, workflow, rules, triggers, associated]
---

# Plan Bulk Data Loads

> Bulk API performance depends on the type of data that you're loading, as well as any
    workflow rules and triggers associated with the objects in your batches. It's useful to
    understand the factors that determine optimal loading time.

# Plan Bulk Data Loads

Bulk API performance depends on the type of data that you're loading, as well as any workflow rules and triggers associated with the objects in your batches. It's useful to understand the factors that determine optimal loading time.

-   **[General Guidelines for Data Loads](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_guidelines.htm)**
    For optimal processing time, consider these tips when planning your data loads. Always test your data loads in a sandbox organization first. Processing times can be different in a production organization.
-   **[Use Compression for Responses](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_compression.htm)**
    In API version 27.0 and later, Bulk API can compress response data which reduces network traffic and improves response time.

## Related Topics

- General Guidelines for Data Loads (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_guidelines.htm)
- Use Compression for Responses (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_compression.htm)
