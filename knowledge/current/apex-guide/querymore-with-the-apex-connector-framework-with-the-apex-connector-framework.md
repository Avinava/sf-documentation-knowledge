---
title: "queryMore with the Apex Connector Framework with the Apex
            Connector Framework"
domain: apex-guide
topic: querymore-with-the-apex-connector-framework-with-the-apex-connector-framework
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.862Z
keywords: [queryMore, Apex, Connector, Framework]
---

# queryMore with the Apex Connector Framework with the Apex
            Connector Framework

# queryMore with the Apex Connector Framework with the Apex Connector Framework

Custom adapters for Salesforce Connect don’t automatically support the queryMore method in API queries. However, your implementation must be able to break up large result sets into batches and iterate over them by using the queryMore method in the SOAP API. The default batch size is 500 records, but the query developer can adjust that value programmatically in the query call.

To support queryMore, your implementation must indicate whether more data exists than what’s in the current batch. When the Lightning Platform knows that more data exists, your API queries return a QueryResult object that’s similar to the following.

```

```

-   **[Support queryMore by Using Server-Driven Paging by Using Server-Driven Paging](atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore_server_driven_paging.htm)**  
    With server-driven paging, the external system controls the paging and ignores any batch boundaries or page sizes that are specified in queries. To enable server-driven paging, declare the QUERY\_PAGINATION\_SERVER\_DRIVEN capability in your DataSource.Provider class.
-   **[Support queryMore by Using Client-Driven Paging](atlas.en-us.apexcode.meta/apexcode/apex_connector_querymore_client_driven_paging.htm)**  
    With client-driven paging, you use LIMIT and OFFSET clauses to page through result sets.