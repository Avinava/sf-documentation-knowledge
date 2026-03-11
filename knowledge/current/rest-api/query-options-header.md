---
title: "Query Options Header"
domain: rest-api
topic: query-options-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:25.070Z
keywords: [Query, Options, Header, Field, Name, Values]
---

# Query Options Header

# Query Options Header

Specifies options used in a query, such as the query results batch size. Use this request header with the Query resource.

## Header Field Name and Values

Field name

Sforce-Query-Options

Field values

-   batchSize—A numeric value that specifies the number of records returned for a query request. Child objects count toward the number of records for the batch size. For example, in relationship queries, multiple child objects are returned per parent row returned.
    
    The default is 2,000; the minimum is 200, and the maximum is 2,000. There is no guarantee that the requested batch size is the actual batch size. Changes are made as necessary to maximize performance.
    

Example

Sforce-Query-Options: batchSize=1000