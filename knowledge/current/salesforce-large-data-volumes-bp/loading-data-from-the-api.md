---
title: "Loading Data from the API"
domain: salesforce-large-data-volumes-bp
topic: loading-data-from-the-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.953Z
estimatedTokens: 783
keywords: [Loading, Data, API]
---

# Loading Data from the API

# Loading Data from the API

| Goal | Best Practice |
| --- | --- |
| Improving performance | Any data operation that includes more than 2,000 records is a good candidate for Bulk API 2.0 to successfully prepare, execute, and manage an asynchronous workflow that makes use of the Bulk framework. Jobs with fewer than 2,000 records should involve “bulkified” synchronous calls in REST (for example, Composite) or SOAP. |
| Using the most efficient operations | Use the fastest operation possible—insert() is fastest, update() is next, and upsert() is next after that. If possible, also break upsert() into two operations: create() and update().Ensure that data is clean before loading when using the Bulk API 2.0. Errors in batches trigger single-row processing for that batch, and that processing heavily impacts performance. |
| Reducing data to transfer and process | When updating, send only fields that have changed (delta-only loads). |
| Reducing transmission time and interruptions | For custom integrations:Authenticate once per load, not on each record.Use GZIP compression and HTTP keep-alive to avoid drops during lengthy save operations. |
| Avoiding unnecessary overhead | For custom integrations, authenticate once per load, not on each record. |
| Avoiding computations | Use Public Read/Write security during initial load to avoid sharing calculation overhead |
| Reducing computations | If possible for initial loads, populate roles before populating sharing rules.Load users into roles.Load record data with owners, triggering calculations in the role hierarchy.Configure public groups and queues, and let those computations propagate.Add sharing rules one at a time, letting computations for each rule finish before adding the next one.If possible, add people and data before creating and assigning groups and queues.Load the new users and new record data.Optionally, load new public groups and queues.Add sharing rules one at a time, letting computations for each rule finish before adding the next one. |
| Deferring computations and speeding up load throughput | Disable Apex triggers, workflow rules, and validations during loads; investigate the use of batch Apex to process records after the load is complete. |
| Balancing efficient batch sizes against potential timeouts | When using the SOAP API, use as many batches as possible—up to 200—that still avoid network timeouts if:Records are large.Save operations entail a lot of processing that cannot be deferred. |
| Optimizing the Lightning Platform Web Service Connector (WSC) to work with Salesforce | Use WSC instead of other Java API clients, like Axis. |
| Minimizing parent record-locking conflicts | When changing child records, group them by parent—group records by the field ParentId in the same batch to minimize locking conflicts. |
| Deferring sharing calculations | Use the defer sharing calculation permission to defer sharing calculations until after all data has been loaded. (See Defer Sharing Calculation.) |
| Avoiding loading data into Salesforce | Use mashups to create coupled integrations of applications. (See Using Mashups.) |

## Related Topics

- Defer Sharing Calculation (atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_techniques_deferred_sharing_calculation.htm)
- Using Mashups (atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_techniques_using_mashups.htm)
