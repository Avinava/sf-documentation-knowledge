---
title: "Use Compression for Bulk API 2.0 Ingest Responses"
domain: api-asynch
topic: use-compression-for-bulk-api-20-ingest-responses
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.456Z
estimatedTokens: 360
keywords: [Compression, Bulk, API, 2.0, Ingest, Responses, jobs, compress, reduces, network, traffic, improves, time]
---

# Use Compression for Bulk API 2.0 Ingest Responses

> For ingest jobs, Bulk API 2.0 can compress the response body, which reduces
    network traffic and improves response time.

# Use Compression for Bulk API 2.0 Ingest Responses

For ingest jobs, Bulk API 2.0 can compress the *response body*, which reduces network traffic and improves response time.

Responses are compressed if the client makes a request using the Accept-Encoding header, with a value of gzip. Bulk API 2.0 compresses the response in gzip format and sends the response to the client with a Content-Encoding: gzip *response* header. If a request is made using the Accept-Encoding header with a value other than gzip, the encoding type is ignored, and the response isn’t compressed.

As an example, if a [Get Job Successful Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_successful_results.htm "Retrieves a list of successfully processed records for a completed job.") request is made with the Accept-Encoding: gzip header, the response looks something like:

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

- Get Job Successful Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_successful_results.htm)
