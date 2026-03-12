---
title: "Support queryMore by Using Client-Driven
        Paging"
domain: apex-guide
topic: support-querymore-by-using-client-driven-paging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.042Z
estimatedTokens: 512
keywords: [Support, queryMore, Client-Driven, Paging, LIMIT, OFFSET, clauses, result]
---

# Support queryMore by Using Client-Driven
        Paging

> With client-driven paging, you use LIMIT and
            OFFSET clauses to page through result
        sets.

# Support queryMore by Using Client-Driven Paging

With client-driven paging, you use LIMIT and OFFSET clauses to page through result sets.

If the external system can return the total size of the result set for each query, declare the QUERY\_TOTAL\_SIZE capability in your DataSource.Provider class. Make sure that each search or query returns the totalSize value in the DataSource.TableResult. If the total size is larger than the number of rows that are returned in the batch, we generate a nextRecordsUrl link and set the done flag to false. We also set the totalSize in the TableResult to the value that you supply.

If the external system can’t return the total size for each query, don’t declare the QUERY\_TOTAL\_SIZE capability in your DataSource.Provider class. Whenever we do a query through your custom adapter, we ask for one extra row. For example, if you run the query SELECT ExternalId FROM Sample LIMIT 5, we call the query method on the DataSource.Connection object with a DataSource.QueryContext that has the maxResults property set to 6. The presence or absence of that sixth row in the result set indicates whether more data is available. We assume, however, that the data set we query against doesn’t change between queries. If the data set changes between queries, you might see repeated rows or not get all results.

Ultimately, accessing external data works most efficiently when you retrieve small amounts of data and the data set that you query against changes infrequently.

#### See Also

-   [queryMore with the Apex Connector Framework with the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore.htm "Custom adapters for Salesforce Connect don’t automatically support the queryMore method in API queries. However, your implementation must be able to break up large result sets into batches and iterate over them by using the queryMore method in the SOAP API. The default batch size is 500 records, but the query developer can adjust that value programmatically in the query call.")

## Related Topics

- queryMore with the Apex Connector Framework with the Apex Connector Framework (atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore.htm)
