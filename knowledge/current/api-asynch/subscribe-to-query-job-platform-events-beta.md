---
title: "Subscribe to Query Job Platform Events (Beta)"
domain: api-asynch
topic: subscribe-to-query-job-platform-events-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.593Z
estimatedTokens: 901
keywords: [Subscribe, Query, Job, Platform, Events, Beta, standard, event, BulkApi2JobEvent, status, updates, begin, downloading, results, completes]
---

# Subscribe to Query Job Platform Events (Beta)

> Use the standard platform event BulkApi2JobEvent to get query job status updates and
  begin downloading results before the query job completes.

# Subscribe to Query Job Platform Events (Beta)

Use the standard platform event BulkApi2JobEvent to get query job status updates and begin downloading results before the query job completes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

Bulk API V2 query standard platform events is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Diretctory](https://ptd.salesforce.com/?_ga=2.247987783.1372150065.1709219475-629000709.1639001992). Use of this pilot or beta service is at the Customer's sole discretion.

To enable this beta, follow these steps. You must have either the Modify All Data or the Customize Application permission.

1.  From Setup, in the Quick Find box, enter User Interface, and then select **User Interface**.
2.  On the User Interface page, select **Enable Salesforce Platform Bulk API 2.0 Query Partial Download and Job Completion Events (Beta)**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    Selecting this item asserts that you accept the Beta Services Terms provided at the [Agreements and Terms](https://www.salesforce.com/company/legal/agreements).


1.  Choose a supported subscriber.

    Use the /event/BulkApi2JobEvent channel to subscribe to Bulk API 2 query job platform events when configuring a subscription. See [Subscribing to Platform Events](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_subscribe.htm "HTML (New Window)").

2.  Start a Bulk API 2 query job.

    Your code can process events associated with the job ID in the response body. See [Create a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_create_job.htm "Creates a query job.").


This event indicates job status. The unique ID in JobIentifier is the same ID that you get from the query job response body.

{ "Type" : "JOB\_STATE", "JobIdentifier" : "750xx000004UeCCB", "JobState" : "InProgress", "ResultType" : null, "ResultUrl" : null }

This event indicates that a set of results is available. Your client uses the unique URL in ResultUrl to get the results.

{ "Type" : "RESULT", "JobIdentifier" : "750xx000004UeCCB", "JobState" : "InProgress", "ResultType" : "PARTIAL", "ResultUrl" : "https://mydomain.salesforce.com/services/data/v63.0/jobs/query/750xx000004UeCCB/results?locator:AOTUALft490873ALSH353w4oithw404FKJ" }

This event indicates that only one set of results remains. Your client uses the ResultUrl URL to get the last set of results.

{ "Type" : "RESULT", "JobIdentifier" : "750xx000004UeCCB", "JobState" : "JobComplete", "ResultType" : "FINAL", "ResultUrl" : "https://mydomain.salesforce.com/services/data/v63.0/jobs/query/750xx000004UeCCB/results?locator:aSdEft490873ALSH353w4oithw404jKlM" }

#### See Also

-   [*Platform Events Developer Guide*: BulkApi2JobEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_bulkapi2jobevent.htm "Platform Events Developer Guide: BulkApi2JobEvent - HTML (New Window)")

-   [*Salesforce Developers Blog*: Introducing Events and Partial Downloads in Bulk API 2.0](https://developer.salesforce.com/blogs/2025/01/introducing-events-and-partial-downloads-in-bulk-api-2-0 "Salesforce Developers Blog: Introducing Events and Partial Downloads in Bulk API 2.0 - HTML (New Window)")

## Related Topics

- Create a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_create_job.htm)
