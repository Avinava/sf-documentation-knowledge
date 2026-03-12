---
title: "Introduction to Bulk API 2.0 and Bulk API"
domain: api-asynch
topic: introduction-to-bulk-api-20-and-bulk-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.183Z
estimatedTokens: 366
keywords: [Introduction, Bulk, API, 2.0, Salesforce, APIs, REST, principles, optimized, working, large, data, insert, upsert, records]
---

# Introduction to Bulk API 2.0 and Bulk API

> Both Salesforce Bulk APIs are based on REST principles and are optimized for working
        with large sets of data. Use them to insert, update, upsert, or delete many records
            asynchronously. You submit a request and come back for the results later.
        Salesforce processes the request in the background.

# Introduction to Bulk API 2.0 and Bulk API

Both Salesforce Bulk APIs are based on REST principles and are optimized for working with large sets of data. Use them to insert, update, upsert, or delete many records *asynchronously*. You submit a request and come back for the results later. Salesforce processes the request in the background.

Any data operation that includes more than 2,000 records is a good candidate for Bulk API 2.0 to successfully prepare, execute, and manage an *asynchronous* workflow that uses the Bulk framework. Jobs with fewer than 2,000 records should involve “bulkified” *synchronous* calls in REST (for example, Composite) or SOAP.

Using Bulk API 2.0 or Bulk API requires basic familiarity with software development, web services, and the Salesforce user interface. Because both Bulk APIs are asynchronous, Salesforce doesn’t guarantee a service level agreement.

-   **[What’s the Difference Between Bulk API 2.0 and Bulk API?](atlas.en-us.api_asynch.meta/api_asynch/bulk_common_diff_two_versions.htm)**
    Although Bulk API 2.0's predecessor, “Bulk API”, is available, use Bulk API 2.0 instead of Bulk API if you want a more streamlined workflow. Bulk API 2.0 provides a simple interface to load large amounts of data into your Salesforce org and to perform bulk queries on your org data. Its design is more consistent and better integrated with other Salesforce APIs. Bulk API 2.0 also has the advantage of future innovation.

## Related Topics

- What’s the Difference Between Bulk API 2.0 and Bulk API? (atlas.en-us.api_asynch.meta/api_asynch/bulk_common_diff_two_versions.htm)
