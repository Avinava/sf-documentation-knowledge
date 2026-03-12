---
title: "Use Compression for Bulk API 2.0 Query Responses"
domain: api-asynch
topic: use-compression-for-bulk-api-20-query-responses
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.526Z
estimatedTokens: 439
keywords: [Compression, Bulk, API, 2.0, Query, Responses, jobs, compress, reduces, network, traffic, improves, time]
---

# Use Compression for Bulk API 2.0 Query Responses

> For query jobs, Bulk API 2.0 can compress the response body, which reduces
  network traffic and improves response time.

# Use Compression for Bulk API 2.0 Query Responses

For query jobs, Bulk API 2.0 can compress the *response body*, which reduces network traffic and improves response time.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_asynch)

#### Tip

If encoding is enabled for Bulk API 2.0 Query job responses, there is a significant improvement in performance of query result downloads. This not the total query time, but a reduction in the time to download the results.

Responses are compressed if the client makes a request using the Accept-Encoding header, with a value of gzip. Bulk API 2.0 compresses the response in gzip format and sends the response to the client with a Content-Encoding: gzip *response* header. If a request is made using the Accept-Encoding header with a value other than gzip, the encoding type is ignored, and the response isn’t compressed.

As an example, if a [Get Results for a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_get_job_results.htm "Gets the results for a query job. The job must have the state JobComplete.") request is made with the Accept-Encoding: gzip header, the response looks something like:

```

```

Bulk API 2.0 follows the HTTP 1.1 standards for response compression, as described in [Using Compression](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_rest_compression.htm). Most clients automatically support compressed responses. Even though you request a compressed response, the REST framework sometimes doesn’t send back the response in a compressed format. Visit [https://developer.salesforce.com/page/Tools](https://developer.salesforce.com/page/Tools "HTML (New Window)") for more information on particular clients.

## Code Examples

```
HTTP/1.1 200 OK 
Date: Tue, 09 Oct 2012 18:36:45 GMT 
Content-Type: text/csv; charset=UTF-8 
Content-Encoding: gzip 
Transfer-Encoding: chunked

...compressed response body...
```

## Related Topics

- Get Results for a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_get_job_results.htm)
