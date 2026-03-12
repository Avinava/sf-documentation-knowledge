---
title: "Execute a SOQL Query that Includes
            Deleted Items"
domain: rest-api
topic: execute-a-soql-query-that-includes-deleted-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.033Z
estimatedTokens: 416
keywords: [Execute, SOQL, Query, Includes, Deleted, Items, QueryAll, resource, execute, query, includes, information, records, deleted, because, merge, delete., rather, automatically, filter]
---

# Execute a SOQL Query that Includes
            Deleted Items

> Use the QueryAll resource to execute a SOQL query that includes information about
            records that have been deleted because of a merge or delete. Use QueryAll rather than
            Query, because the Query resource will automatically filter out items that have been
            deleted.

# Execute a SOQL Query that Includes Deleted Items

Use the QueryAll resource to execute a SOQL query that includes information about records that have been deleted because of a merge or delete. Use QueryAll rather than Query, because the Query resource will automatically filter out items that have been deleted.

The following query requests the value from the Name field from all deleted Merchandise\_\_c records, in an organization that has one deleted Merchandise\_\_c record. The same query using Query instead of QueryAll would return no records, because Query automatically filters out any deleted record from the result set.

Example usage for executing a query for deleted Merchandise\_\_c records

```

```

Example request body for executing a query

none required

Example response body for executing a query

```

```

## Retrieving the Remaining SOQL Query Results

If the initial query returns only part of the results, the end of the response will contain a field called nextRecordsUrl. For example, you might find this attribute at the end of your query:

```

```

In such cases, request the next batch of records and repeat until all records have been retrieved. These requests use nextRecordsUrl, and do not include any parameters.

Although the nextRecordsUrl has query in the URL, it still provides the remaining results from the initial QueryAll request. The remaining results include deleted records that matched the initial query.

Example usage for retrieving the remaining results

```

```

Example request body for retrieving the remaining results

none required

Example response body for retrieving the remaining results

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/queryAll/?q=SELECT+Name+from+Merchandise__c+WHERE+isDeleted+=+TRUE -H "Authorization: Bearer token"
```

```
{
    "done" : true,
    "totalSize" : 1,
    "records" : 
    [ 
        {  
            "attributes" : 
            {    
                "type" : "Merchandise__c",    
                "url" : "/services/data/v66.0/sobjects/Merchandise__c/a00D0000008pQRAIX2"  
            },  
            "Name" : "Merchandise 1"
        }, 
    ]
}
```

```
"nextRecordsUrl" : "/services/data/v66.0/query/01gD0000002HU6KIAW-2000"
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/query/01gD0000002HU6KIAW-2000 -H "Authorization: Bearer token"
```

```
{
    "done" : true,
    "totalSize" : 3214,
    "records" : [...]
}
```
