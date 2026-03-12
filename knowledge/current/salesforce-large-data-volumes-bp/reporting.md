---
title: "Reporting"
domain: salesforce-large-data-volumes-bp
topic: reporting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.961Z
estimatedTokens: 297
keywords: [Reporting]
---

# Reporting

# Reporting

| Goal | Best Practice |
| --- | --- |
| Maximizing reporting performance by:Partitioning data to match its likely useMinimizing the number of records per object | Reduce the number of records to query—use a value in the data to segment the query. For example, query for only a single state instead of for all states. (See Divisions.) |
| Reducing the number of joins | Minimize the number of:Objects queried in the reportRelationships used to generate the reportDe-normalize data when practical—“over de-normalizing” the data results in more overhead. Use summarized data stored on the parent record for the report. This practice is more efficient than having the report summarize the child records. |
| Reducing the amount of data returned | Reduce the number of fields queried—only add fields to a report, list view, or SOQL query that is required. |
| Reducing the number of records to query | Reduce the amount of data by archiving unused records—move unused records to a custom object table to reduce the size of the report object.Use report filters that emphasize the use of standard or custom indexed fields. Use index fields in report filters, whenever possible. |

## Related Topics

- Divisions (atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_infrastructure_divisions.htm)
