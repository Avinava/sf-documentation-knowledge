---
title: "Get Feedback on Query Performance (Beta)"
domain: rest-api
topic: get-feedback-on-query-performance-beta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:24.953Z
keywords: [Get, Feedback, Query, Performance, Beta, Note, Example]
---

# Get Feedback on Query Performance (Beta)

# Get Feedback on Query Performance (Beta)

To get feedback on how Salesforce executes your query, report, or list view, use the [Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm "HTML (New Window)") resource along with the explain parameter. Salesforce analyzes each query to find the optimal approach to obtain the query results. Depending on the query and query filters, Salesforce uses an index or internal optimization. To return details on how Salesforce optimizes your query, without actually running the query, use the explain parameter. Based on the response, decide whether to fine-tune the performance of your query, like adding filters to make the query more selective.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at [Agreements and Terms](https://www.salesforce.com/company/legal/agreements/).

The response contains one or more query execution plans, sorted from most optimal to least optimal. The most optimal plan is the plan that’s used when the query, report, or list view is executed.

For more details on the fields returned when using explain, see the explain parameter in [Query Options Headers](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/headers_queryoptions.htm "HTML (New Window)"). For more information on making queries more selective, see [Working with Very Large SOQL Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm "HTML (New Window)") in the Apex Developer Guide.

## Example: Feedback on Query Performance

The following performance feedback query uses Merchandise\_\_c:

```

```

The response body for a performance feedback query looks like this:

```

```

This response indicates that Salesforce found two possible execution plans for this query. The first plan uses the CreatedDate index field to improve the performance of this query. The second plan scans all records without using an index. If the query is executed, the first plan is used. Both plans note that there’s no secondary optimization for filtering out records marked as deleted because the IsDeleted field isn’t indexed.