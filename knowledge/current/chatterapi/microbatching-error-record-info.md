---
title: "Microbatching Error Record Info"
domain: chatterapi
topic: microbatching-error-record-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.714Z
estimatedTokens: 408
keywords: [Microbatching, Error, Record, Info]
---

# Microbatching Error Record Info

> Microbatching error record information.

# Microbatching Error Record Info

Microbatching error record information.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contentDocumentIds | String[] | List of content document IDs used to create content document links between files and records. | Small, 56.0 | 56.0 |
| createdDate | String | Created date of the failed record. | Small, 54.0 | 54.0 |
| errorCategory | String | Error category of the failed record. | Small, 54.0 | 54.0 |
| errorCode | String | API error code associated with the failed record. | Small, 54.0 | 54.0 |
| errorMessage | String | Error message associated with the failed record. | Small, 54.0 | 54.0 |
| groupBy | String | Optional grouping associated with the failed record. | Small, 54.0 | 54.0 |
| keyPrefix | String | Key prefix of the failed record. | Small, 54.0 | 54.0 |
| networkId | String | Experience Cloud site ID of the failed record. | Small, 54.0 | 54.0 |
| processType | String | Process type of the failed record. | Small, 54.0 | 54.0 |
| recordUUID | String | Record UUID of the failed record. | Small, 54.0 | 54.0 |
| requestBody | Microbatching Error Record Info Request Body[] | Request body of the failed record. | Small, 54.0 | 54.0 |
| retryCount | Integer | Manual resubmission retry count. | Small, 54.0 | 54.0 |
| status | String | Status of the failed record. | Small, 54.0 | 54.0 |

#### See Also

-   [Microbatching Error Record Info Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_microbatching_error_record_info_collection.htm "Collection of microbatching error records.")

## Related Topics

- Microbatching Error Record Info Request Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_microbatching_error_record_info_request_body.htm)
- Microbatching Error Record Info Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_microbatching_error_record_info_collection.htm)
