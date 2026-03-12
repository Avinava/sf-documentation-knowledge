---
title: "About URIs"
domain: api-asynch
topic: about-uris
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.049Z
estimatedTokens: 374
keywords: [URIs, send, HTTP, requests, URI, perform, operations, Bulk, API]
---

# About URIs

> You send HTTP requests to a URI to perform operations with
      Bulk API.

# About URIs

You send HTTP requests to a URI to perform operations with Bulk API.

The URI where you send HTTP requests has this format:

https://Web\_Services\_SOAP\_endpoint\_hostame/services/async/APIversion/Resource\_address

Think of the part of the URI through the API version as a base URI that’s used for all operations. The part after the API version (Resource\_address) varies depending on the job or batch being processed. For example, if you're working with version 66.0 of Bulk API in a production org, your base URI would be https://MyDomainName.my.salesforce.com/services/async/66.0.

You can find the My Domain name and My Domain login URL for your org on the My Domain page in Setup. Or, to get the hostname of your My Domain login URL in Apex, use the getMyDomainHostname() method of the System.DomainCreator class.

#### See Also

-   [Quick Start: Bulk API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm "You process a set of records by creating a job that contains one or more batches. The job specifies which object is being processed and what type of operation is being used. Ingest jobs are defined by CSV, XML, JSON, or binary attachments. Query jobs are defined by a SOQL statement.")

-   [Work with Batches](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_intro.htm "A batch is a set of records sent to the server in an HTTP POST request. Each batch is processed independently by the server, not necessarily in the order it’s received.")

## Related Topics

- Quick Start: Bulk API (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_intro.htm)
- Work with Batches (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_intro.htm)
