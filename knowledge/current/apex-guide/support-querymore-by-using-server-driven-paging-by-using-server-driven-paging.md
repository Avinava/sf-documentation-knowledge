---
title: "Support  queryMore by Using Server-Driven Paging by Using
            Server-Driven Paging"
domain: apex-guide
topic: support-querymore-by-using-server-driven-paging-by-using-server-driven-paging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.016Z
estimatedTokens: 381
keywords: [Support, queryMore, Server-Driven, Paging, server-driven, paging, external, system, controls, ignores, any, batch, boundaries, page, sizes, specified, queries., enable, declare, QUERY_PAGINATION_SERVER_DRIVEN]
---

# Support  queryMore by Using Server-Driven Paging by Using
            Server-Driven Paging

> With server-driven paging, the external system controls the paging and ignores any
        batch boundaries or page sizes that are specified in queries. To enable server-driven
        paging, declare the QUERY_PAGINATION_SERVER_DRIVEN
        capability in your DataSource.Provider
        class.

# Support queryMore by Using Server-Driven Paging by Using Server-Driven Paging

With server-driven paging, the external system controls the paging and ignores any batch boundaries or page sizes that are specified in queries. To enable server-driven paging, declare the QUERY\_PAGINATION\_SERVER\_DRIVEN capability in your DataSource.Provider class.

When the returned DataSource.TableResult doesn’t contain the entire result set, the TableResult must provide a queryMoreToken value. The query token is an arbitrary string that we store temporarily. When we request the next batch of results, we pass the query token back to your custom adapter in the DataSource.QueryContext. Your Apex code must use that query token to determine which rows belong to the next batch of results.

When your custom adapter returns the final batch, it must not return a queryMoreToken value in the TableResult.

The Apex Connector Framework doesn't support server-driven pagination for list views.

#### See Also

-   [queryMore with the Apex Connector Framework with the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore.htm "Custom adapters for Salesforce Connect don’t automatically support the queryMore method in API queries. However, your implementation must be able to break up large result sets into batches and iterate over them by using the queryMore method in the SOAP API. The default batch size is 500 records, but the query developer can adjust that value programmatically in the query call.")

## Related Topics

- queryMore with the Apex Connector Framework with the Apex Connector Framework (atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore.htm)
