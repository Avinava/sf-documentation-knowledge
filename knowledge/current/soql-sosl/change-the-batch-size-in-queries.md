---
title: "Change the Batch Size in Queries"
domain: soql-sosl
topic: change-the-batch-size-in-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.505Z
estimatedTokens: 452
keywords: [Change, Batch, Size, Queries, query, determines, number, rows, results, that’s, made, REST, API, SOAP, WSC]
---

# Change the Batch Size in Queries

> The batch size for a query determines the number of rows that are returned in the query results. You can change the batch size that’s returned in queries made using both REST API and SOAP
		API.

# Change the Batch Size in Queries

The batch size for a query determines the number of rows that are returned in the query results. You can change the batch size that’s returned in queries made using both REST API and SOAP API.

The default and the maximum for query result batch size is 2,000 records. However, to optimize performance, the returned batch size can be lower than the max or what's set in the request, based on the size and complexity of records queried.

In REST API, use the batchSize field in the [query options header](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/headers_queryoptions.htm) to change the number of results returned in a single query. For more information, see [Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm) in the REST API Developer Guide.

In SOAP API, change the batch size in the QueryOptions header before invoking the query() call. Salesforce Web Service Connector (WSC) clients can set the batch size by calling setQueryOptions() on the connection object. For more information, see [query()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_query.htm) in the SOAP API Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

If the SOQL statement selects two or more custom fields of type long text, the batch size can’t be greater than 200 records. This limit prevents large SOAP messages from being returned.

## WSC (Java) Example to Set the Batch Size

The following Java WSC (Java) code example sets the batch size to 250records.

```

```

## C# (.NET) Example to Set the Batch Size

The following C# (.NET) code example sets the batch size to 250records.

```

```

## Code Examples

```apex
public void queryOptionsSample() {
  connection.setQueryOptions(250);
}
```

```apex
private void queryOptionsSample() 
{
    binding.QueryOptionsValue = new QueryOptions();

    binding.QueryOptionsValue.batchSize = 250;
    binding.QueryOptionsValue.batchSizeSpecified = true;
}
```
