---
title: "API Query Cursor Limits"
domain: salesforce-app-limits-cheatsheet
topic: api-query-cursor-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.197Z
estimatedTokens: 345
keywords: [API, Query, Cursor, Limits, Cursors, their, results, days, including, nested, queries, There, isn't, limit, number]
---

# API Query Cursor Limits

> Cursors and their related query results are available for 2 days, including results in
  nested queries. There isn't a limit on the number of open cursors.

# API Query Cursor Limits

Cursors and their related query results are available for 2 days, including results in nested queries. There isn't a limit on the number of open cursors.

When results for a large or complex query can’t be returned in a single batch, one or more server-side cursors and corresponding query locators are automatically created. A cursor marks the location of additional query results in the database, and a query locator finds the cursor. To get the additional results, use query locator within another call, such as queryMore() call in SOAP API or nextRecordUrl field in REST API.

Salesforce cursor limits were changed with the release of API version 56.0. Previously, a maximum of 10 cursors per user were accessible at the same time, which limited the query results and pagination to 10 result sets per user. The oldest cursor and result set expired after 15 minutes of inactivity. The removal of cursor limits is universal, and applies to all versions of Apex, SOAP API, REST API, Bulk API, Bulk API 2.0, and any features built using these technologies.

#### See Also

-   [*SOAP API Developer Guide*: query()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_query.htm)

-   [*REST API Developer Guide*: Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm)
