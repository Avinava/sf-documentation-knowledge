---
title: "Troubleshooting Query Timeouts"
domain: api-asynch
topic: troubleshooting-query-timeouts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.365Z
estimatedTokens: 243
keywords: [Troubleshooting, Query, Timeouts, troubleshoot, timeout, errors, Bulk, API, 2.0, operations, apply, additional, filter, criteria]
---

# Troubleshooting Query Timeouts

> To troubleshoot timeout errors in Bulk API 2.0 query operations, apply additional
        filter criteria.

# Troubleshooting Query Timeouts

To troubleshoot timeout errors in Bulk API 2.0 query operations, apply additional filter criteria.

If you use a SOQL query with the ORDER BY clause, and you experience query time outs, then remove the ORDER BY clause before any subsequent troubleshooting. Use of ORDER BY in a Bulk 2.0 query disables PKChunking for the query. With PKChunking disabled, the query takes longer to execute, and potentially results in query timeouts.

#### See Also

-   [Salesforce Object Query Language (SOQL) Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm "Salesforce Object Query Language (SOQL) Reference - html (New Window)")

-   [Errors](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_errors.htm "Operations that you perform with Bulk API 2.0 can trigger error codes. This list shows the most common error codes and the Bulk API 2.0 action that possibly triggered them.")

## Related Topics

- Errors (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_errors.htm)
