---
title: "External Objects"
domain: api
topic: external-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.674Z
estimatedTokens: 483
keywords: [External, Objects, Special, behaviors, limitations, apply, queryAll, queryMore, calls, data]
---

# External Objects

> Special behaviors and limitations apply to queryAll() and queryMore() calls on external
    data.

# External Objects

Special behaviors and limitations apply to queryAll() and queryMore() calls on external data.

## queryAll()

Because Salesforce doesn’t track changes to external data, queryAll() behaves the same as query() for external objects.

## queryMore()

It's common for Salesforce Connect queries of external data to have a large result set that's broken into smaller batches or pages. When querying external objects, Salesforce Connect accesses the external data in real time via Web service callouts. Each queryMore() call results in a Web service callout. The batch boundaries and page sizes depend on your adapter and how you set up the external data source.

We recommend the following:

-   When possible, avoid paging by filtering your queries of external objects to return fewer rows than the batch size, which by default is 500 rows. Remember, obtaining each batch requires a queryMore() call, which results in a Web service callout.
-   If the external data frequently changes, avoid using queryMore() calls. If the external data is modified between queryMore() calls, you can get an unexpected QueryResult.

If the primary or “driving” object for a SELECT statement is an external object, queryMore() supports only that primary object and doesn’t support subqueries.

By default, the OData 2.0 and 4.0 adapters for Salesforce Connect use client-driven paging. With client-driven paging, OData adapters convert each queryMore() call into an OData query that uses the $skip and $top system query options to specify the batch boundary and page size. These options are similar to using LIMIT and OFFSET clauses to page through a result set.

If you enable server-driven paging on an external data source, Salesforce ignores the requested page sizes, including the default queryMore() batch size of 500 rows. The pages returned by the external system determine the batches, but each page can’t exceed 2,000 rows.
