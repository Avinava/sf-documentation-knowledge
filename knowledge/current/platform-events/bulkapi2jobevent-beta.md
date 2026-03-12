---
title: "BulkApi2JobEvent (Beta)"
domain: platform-events
topic: bulkapi2jobevent-beta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.364Z
estimatedTokens: 478
keywords: [BulkApi2JobEvent, Beta, Notifies, subscribers, changes, status, Bulk, API, 2.0, query, jobs, URLs, downloading, partial, results]
---

# BulkApi2JobEvent (Beta)

> Notifies subscribers of changes to the status of Bulk API 2.0 query jobs and provides URLs for downloading partial results.
		This object is available in API version 63.0 and
		later.

# BulkApi2JobEvent (Beta)

Notifies subscribers of changes to the status of Bulk API 2.0 query jobs and provides URLs for downloading partial results. This object is available in API version 63.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Bulk API V2 query standard platform events is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Diretctory](https://ptd.salesforce.com/?_ga=2.247987783.1372150065.1709219475-629000709.1639001992). Use of this pilot or beta service is at the Customer's sole discretion.

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Streaming API Subscription Channel

/event/BulkApi2JobEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| Type | TypepicklistDescriptionRequired. The type of event, either JOB_STATE or RESULT. |
| JobIdentifier | TypestringDescriptionRequired. The Bulk API 2 query job’s ID. |
| JobState | TypepicklistDescriptionRequired. The Bulk API 2 query job’s status.Possible values are:Open—Salesforce received the job request.UploadComplete—The job is queued and ready to be processed.InProgress—Salesforce is processing the job.JobComplete—Salesforce finished processing the job request.Failed—The job failed.Abort—The job has been aborted. See Abort a Query Job. |
| ResultType | TypepicklistPropertiesNillableDescriptionThe Bulk API 2 query job’s processing status, either PARTIAL or FINAL. |
| ResultUrl | TypestringPropertiesNillableDescriptionThe URL for retrieving the Bulk API 2 query job results. |
