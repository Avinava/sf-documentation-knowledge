---
title: "Microbatching Errors Resubmission"
domain: chatterapi
topic: microbatching-errors-resubmission
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.794Z
estimatedTokens: 465
keywords: [Microbatching, Errors, Resubmission, Resubmit, error, records]
---

# Microbatching Errors Resubmission

> Resubmit microbatching error records.

# Microbatching Errors Resubmission

Resubmit microbatching error records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

InvalidSetup and NonRetryable categories of errors aren’t supported by this API. If you resubmit errors of those categories, they aren’t reprocessed.

Resource

```

```

/connect/microbatching/errors/resubmission (version 54.0 only)

Available version

54.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| earliestDate | String | ISO 8601 date string for the oldest date from which to resubmit records. The results include errors that occurred on the oldest date. | Optional | 54.0 |
| errorCode | String | Error code associated with the failed record. | Optional | 54.0 |
| keyPrefix | String | Object keyPrefix that a specified processType is tied to in the microbatching framework. | Optional | 54.0 |
| latestDate | String | ISO 8601 date string for the most recent date from which to resubmit records. The results include errors that occurred on the most recent date. | Optional | 54.0 |
| pageSize | Integer | Specifies the maximum number of records to resubmit. Valid values are from 1 through 1500. If unspecified, the default is 1500. | Optional | 54.0 |
| pageToken | String | Page token specifying the last submission. The response returns the nextPageToken. If unspecified, the first page is returned. | Optional | 54.0 |
| processType | String | Logical name of the flow in the microbatching framework. Values are:LEAD_MSSELF_REGISTRATION | Required | 54.0 |

Response body for POST

[Microbatching Error Resubmission](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_microbatching_error_resubmission.htm "Microbatching error resubmission.")

## Code Examples

```
/connect/communities/communityId/microbatching/errors/resubmission
```

## Related Topics

- Microbatching Error Resubmission (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_microbatching_error_resubmission.htm)
