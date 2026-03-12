---
title: "Client Application Design"
domain: api
topic: client-application-design
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.710Z
estimatedTokens: 639
keywords: [Client, Application, Design, Although, Bulk, API, 2.0, best, choice, loading, large, numbers, records, SOAP-based, There]
---

# Client Application Design

> Although the Bulk API 2.0 is the best choice for loading large numbers of records, you can also
   use the SOAP-based API. There are many ways you can design your application to improve the speed
   of data loads:

# Client Application Design

Although the Bulk API 2.0 is the best choice for loading large numbers of records, you can also use the SOAP-based API. There are many ways you can design your application to improve the speed of data loads:

-   **Use persistent connections.** Opening a socket takes time, mostly when opening a socket stems from the SSL/TLS negotiation. Without SSL or TLS, the API request would not be secure. Included in the HTTP 1.1 specification is support for reusing sockets among requests (persistent connections) instead of having to re-open a socket per request as in HTTP 1.0. Whether your client supports persistent connections depends on the SOAP stack you are using. By default, .NET uses persistent connections. If you change the configuration to use the Apache http-commons libraries, your client will be compliant with the HTTP 1.1 specification and use persistent connections.

    For information about HTTP 1.1, see [http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1).


-   **Minimize the number of requests.** There is some processing associated with each request, so to save time your client should batch as many records per request as possible. Set batchSize to the limit of 2,000. If that is not the most efficient batch size, the API will change it. For more information about setting batch sizes, see [QueryOptions](atlas.en-us.api.meta/api/sforce_api_header_queryoptions.htm "Specifies the preferred batch size for queries. The system sometimes creates batches that are larger or smaller than the specified size to maximize performance.").
-   **Minimize the size of the requests.** Your client application should send as many records per request as possible, but it should also send as small a request as possible to reduce network transmission time. To minimize the request size, use compression on both the request and the response. Gzip is the most popular type of compression, and there are multiple posts on the community boards at the [Lightning Platform Developer Boards](http://community.salesforce.com/sforce?category.id=developers) that describe how to implement compression with different SOAP stacks. The full Gzip analysis and discussion is available at Simon Fell's blog: [http://www.pocketsoap.com/weblog/2005/12/1583.html](http://www.pocketsoap.com/weblog/2005/12/1583.html).
-   **Do Not Design a Multi-Threaded Client Application.** Multi-threading is not allowed for a single client application using the SOAP-based API.

## Related Topics

- QueryOptions (atlas.en-us.api.meta/api/sforce_api_header_queryoptions.htm)
