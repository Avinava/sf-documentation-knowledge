---
title: "Use Bulk Query"
domain: api-asynch
topic: use-bulk-query
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.306Z
estimatedTokens: 1020
keywords: [Bulk, Query, add, batch, job, Content-Type, text, csv, application, xml, json, depending, content, created, actual]
---

# Use Bulk Query

> When you add a batch to a bulk query job,
      the Content-Type in the header for the request must be text/csv, application/xml, or application/json, depending on the content type specified when
      the job was created. The actual SOQL statement supplied for the batch is in plain text
      format.

# Use Bulk Query

When you add a batch to a bulk query job, the Content-Type in the header for the request must be text/csv, application/xml, or application/json, depending on the content type specified when the job was created. The actual SOQL statement supplied for the batch is in plain text format.

URI

/services/async/APIversion/job/jobid/batch

Bulk Query Request

```

```

Bulk API query supports both query and queryAll operations. The queryAll operation returns records that have been deleted because of a merge or delete. The queryAll operation also returns information about archived Task and Event records. For more information, see [queryAll()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_queryall.htm) in the SOAP API Developer Guide.

Relationship queries traverse parent-to-child and child-to-parent relationships between objects to filter and return results. You can use SOQL relationships in bulk queries. For more information about SOQL relationships, see [Using Relationship Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_using.htm#sforce_api_calls_soql_relationships_query_using) in the SOQL and SOSL Reference.

Bulk API doesn’t support queries with any of the following:

-   GROUP BY, OFFSET, or TYPEOF clauses
-   Aggregate functions such as COUNT()
-   Date functions in GROUP BY clauses (date functions in WHERE clauses are supported)
-   Compound address fields or compound geolocations fields

## Requests, and Responses

These are example Bulk Query requests and responses.

Create Bulk Query Batch HTTP Request

```

```

Create Bulk Query Batch HTTP Response Body

```

```

Get Batch Information for All Batches in a Job HTTP Request (used when PK chunking is enabled)

```

```

Get Batch Information for All Batches in a Job HTTP Response Body

```

```

Get Batch Results HTTP Request

```

```

Get Batch Results HTTP Response Body

```

```

Get Bulk Query Results HTTP Request

```

```

Get Bulk Query Results HTTP Response Body

```

```

XML Responses for Queries that Include ID

If you use XML for the ContentType of a Query Job, then a query that includes ID returns the ID field twice in the XML response data. Similarly, a query that does not include ID returns a single null ID field in the XML response data. For example, a query for SELECT ID, FirstName, LastName FROM Contact might return an XML response with records like:

```

```

This is expected behavior and something to be aware of if you are accessing the full XML response data and not using WSC to access the web service response. For more information, see [Queries and the Partner WSDL](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_partner_queries.htm) in the *SOAP API Developer Guide*.

## Java Example Using WSC

This example logs in to an organization using the Partner API, then instantiates a BulkConnection object using the service endpoint from the Partner API login.

```

```

#### See Also

-   [How Bulk Queries Are Processed](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_bulk_query_processing.htm "The bulk query workflow begins when you create a bulk query job and add one or more batches to the query job. When a bulk query is processed, Salesforce attempts to execute the query. If the query doesn’t execute within the standard 2-minute timeout limit, the job fails and a QUERY_TIMEOUT error is returned. In this case, rewrite a simpler query, and resubmit the batch.")

-   [PK Chunking](atlas.en-us.api_asynch.meta/api_asynch/async_api_headers_enable_pk_chunking.htm "Use the primary key (PK) chunking request header to enable automatic PK chunking for a bulk query job. PK chunking splits bulk queries on large tables into chunks based on the record IDs, or primary keys, of the queried records.")

-   [Walk Through a Bulk Query Sample](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough.htm "This code sample uses cURL to query several account records.")

## Code Examples

```
POST baseURI/job/750x00000000014/batch
X-SFDC-Session: 4f1a00D30000000K7zB!ARUAQDqAHcM...
Content-Type: [either text/csv, application/xml, or application/json depending on job]

[plain text SOQL statement]
```

```
POST baseURI/job/750x00000000014/batch
X-SFDC-Session: 4f1a00D30000000K7zB!ARUAQDqAHcM...
Content-Type: text/csv; charset=UTF-8

SELECT Name, Description__c FROM Merchandise__c
```

```
<?xmlversion="1.0" encoding="UTF-8"?>
<batchInfo
  xmlns="http://www.force.com/2009/06/asyncapi/dataload">
    <id>751x00000000079AAA</id>
    <jobId>750x00000000014</jobId>
    <state>Queued</state>
    <createdDate>2009-09-01T17:44:45.000Z</createdDate>
    <systemModstamp>2009-09-01T17:44:45.000Z</systemModstamp>
    <numberRecordsProcessed>0</numberRecordsProcessed>
    <numberRecordsFailed>0</numberRecordsFailed>
    <totalProcessingTime>0</totalProcessingTime>
    <apiActiveProcessingTime>0</apiActiveProcessingTime>
    <apexProcessingTime>0</apexProcessingTime>
</batchInfo>
```

```
GET baseURI/job/750x00000000014/batch
X-SFDC-Session: 4f1a00D30000000K7zB!ARUAQDqAHcM...
```

```
<?xml version="1.0" encoding="UTF-8"?><batchInfoList
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
 <batchInfo>
  <id>751D00000004YjwIAE</id>
  <jobId>750D00000004T5OIAU</jobId>
  <state>NotProcessed</state>
  <createdDate>2011-03-10T00:59:47.000Z</createdDate>
  <systemModstamp>2011-03-10T01:00:19.000Z</systemModstamp>
  <numberRecordsProcessed>0</numberRecordsProcessed>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>0</totalProcessingTime>
  <apiActiveProcessingTime>0</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
 </batchInfo>
 <batchInfo>
  <id>751D00000004Yk1IAE</id>
  <jobId>750D00000004T5OIAU</jobId>
  <state>Completed</state>
  <createdDate>2011-03-10T00:59:47.000Z</createdDate>
  <systemModstamp>2011-03-10T01:00:19.000Z</systemModstamp>
  <numberRecordsProcessed>100000</numberRecordsProcessed>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>1000</totalProcessingTime>
  <apiActiveProcessingTime>1000</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
 </batchInfo>
 <batchInfo>
  <id>751D00000004Yk2IAE</id>
  <jobId>750D00000004T5OIAU</jobId>
  <state>Completed</state>
  <createdDate>2011-03-10T00:59:47.000Z</createdDate>
  <systemModstamp>2011-03-10T01:00:19.000Z</systemModstamp>
  <numberRecordsProcessed>100000</numberRecordsProcessed>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>1000</totalProcessingTime>
  <apiActiveProcessingTime>1000</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
 </batchInfo>
 <batchInfo>
  <id>751D00000004Yk6IAE</id>
  <jobId>750D00000004T5OIAU</jobId>
  <state>Completed</state>
  <createdDate>2011-03-10T00:59:47.000Z</createdDate>
  <systemModstamp>2011-03-10T01:00:19.000Z</systemModstamp>
  <numberRecordsProcessed>100000</numberRecordsProcessed>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>1000</totalProcessingTime>
  <apiActiveProcessingTime>1000</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
 </batchInfo>
 <batchInfo>
  <id>751D00000004Yk7IAE</id>
  <jobId>750D00000004T5OIAU</jobId>
  <state>Completed</state>
  <createdDate>2011-03-10T00:59:47.000Z</createdDate>
  <systemModstamp>2011-03-10T01:00:19.000Z</systemModstamp>
  <numberRecordsProcessed>50000</numberRecordsProcessed>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>500</totalProcessingTime>
  <apiActiveProcessingTime>500</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
 </batchInfo>
</batchInfoList>
```

## Related Topics

- How Bulk Queries Are Processed (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_bulk_query_processing.htm)
- PK Chunking (atlas.en-us.api_asynch.meta/api_asynch/async_api_headers_enable_pk_chunking.htm)
- Walk Through a Bulk Query Sample (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough.htm)
