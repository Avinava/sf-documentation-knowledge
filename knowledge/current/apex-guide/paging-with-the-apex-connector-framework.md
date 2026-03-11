---
title: "Paging with the Apex Connector Framework"
domain: apex-guide
topic: paging-with-the-apex-connector-framework
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.861Z
keywords: [Paging, Apex, Connector, Framework, See]
---

# Paging with the Apex Connector Framework

# Paging with the Apex Connector Framework

When displaying a large set of records in the user interface, Salesforce breaks the set into batches and displays one batch. You can then page through those batches. However, custom adapters for Salesforce Connect don’t automatically support paging of any kind. To support paging through external object data that’s obtained by a custom adapter, implement server-driven or client-driven paging.

With server-driven paging, the external system controls the paging and ignores any batch boundaries or page sizes that are specified in queries. To enable server-driven paging, declare the QUERY\_PAGINATION\_SERVER\_DRIVEN capability in your DataSource.Provider class. Also, your Apex code must generate a query token and use it to determine and fetch the next batch of results.

With client-driven paging, you use LIMIT and OFFSET clauses to page through result sets. Factor in the offset and maxResults properties in the DataSource.QueryContext to determine which rows to return. For example, suppose that the result set has 20 rows with numeric ExternalID values from 1 to 20. If we ask for an offset of 5 and maxResults of 5, we expect to get the rows with IDs 6–10. We recommend that you do all filtering in the external system, outside of Apex, using methods that the external system supports.

#### See Also

-   [*Apex Reference Guide*: QueryContext Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm "Apex Reference Guide: QueryContext Class - HTML (New Window)")