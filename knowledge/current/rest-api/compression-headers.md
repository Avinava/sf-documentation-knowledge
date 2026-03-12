---
title: "Compression Headers"
domain: rest-api
topic: compression-headers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.182Z
estimatedTokens: 347
keywords: [Compression, Headers, compression, header, compress, REST, API, request, response., reduces, bandwidth, required, although, requires, processing, power, client., most, cases, tradeoff]
---

# Compression Headers

> Use a compression header to compress a REST API request or response. Compression reduces
  the bandwidth required for a request, although it requires more processing power at your client.
  In most cases, this tradeoff benefits the overall performance of your application.

# Compression Headers

Use a compression header to compress a REST API request or response. Compression reduces the bandwidth required for a request, although it requires more processing power at your client. In most cases, this tradeoff benefits the overall performance of your application.

REST API supports the gzip and deflate compression algorithms, as defined by the HTTP 1.1 specification. If you’re unsure about which one to use, gzip is more common than deflate.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_rest)

#### Tip

For better performance, we suggest that clients accept and support compression as defined by the HTTP 1.1 specification.

## Request Compression

Include a Content-Encoding: gzip or Content-Encoding: deflate header to compress a request. REST API decompresses any requests before processing.

This example request is compressed with gzip.

```

```

## Response Compression

Salesforce compresses a response only if the request contains an Accept-Encoding: gzip or Accept-Encoding: deflate header. REST API isn’t required to compress the response even if you’ve specified Accept-Encoding, but it normally does. If compressed, the response contains a Content-Encoding header with the compression algorithm so that your client knows to decompress it.

This example request asks for a compressed response.

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/ -H "Authorization: Bearer access-token" -H "Content-Type: application/json" -H "Content-Encoding: gzip" —data-binary @new-account.json -X POST
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/0015e000009sS0DAAU -H "Authorization: Bearer access-token" -H "Content-Type: application/json" -H "Accept-Encoding: gzip" -X GET
```
