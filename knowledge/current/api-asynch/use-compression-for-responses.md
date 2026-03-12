---
title: "Use Compression for Responses"
domain: api-asynch
topic: use-compression-for-responses
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.217Z
estimatedTokens: 322
keywords: [Compression, Responses, API, version, 27.0, later, Bulk, compress, data, reduces, network, traffic, improves, time]
---

# Use Compression for Responses

> In API version 27.0 and later, Bulk API can compress response data which reduces network
    traffic and improves response time.

# Use Compression for Responses

In API version 27.0 and later, Bulk API can compress response data which reduces network traffic and improves response time.

Responses are compressed if the client makes a request using the Accept-Encoding header, with a value of gzip. Bulk API compresses the response in gzip format and sends the response to the client with a Content-Encoding: gzip response header. If a request is made using the Accept-Encoding header with a value other than gzip, the encoding type is ignored, and the response is not compressed.

As an example, if a [Batch Results](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm "Get results of a batch that completed processing by sending a GET request to this URI. If the batch is a CSV file, the response is in CSV format. If the batch is an XML or JSON file, the response is in XML or JSON format, respectively.") request is made with the Accept-Encoding: gzip header, the response looks something like:

```

```

Bulk API follows the HTTP 1.1 standards for response compression. Most clients automatically support compressed responses. Visit [https://developer.salesforce.com/page/Tools](https://developer.salesforce.com/page/Tools "HTML (New Window)") for more information on particular clients.

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

- Batch Results (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
