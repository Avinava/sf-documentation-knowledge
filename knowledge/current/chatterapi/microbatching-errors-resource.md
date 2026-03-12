---
title: "Microbatching Errors Resource"
domain: chatterapi
topic: microbatching-errors-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.788Z
estimatedTokens: 1255
keywords: [Microbatching, Errors, Resource]
---

# Microbatching Errors Resource

> Get and delete microbatching errors.

# Microbatching Errors Resource

Get and delete microbatching errors.

Resource

```

```

/connect/microbatching/errors (version 54.0 only)

Available version

54.0

HTTP methods

GET, DELETE

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| earliestDate | String | ISO 8601 date string for the oldest date from which to get records. The results include errors that occurred on the oldest date. | Optional | 54.0 |
| errorCategory | String | Category of the errors. Values are:AdminActionable—Errors caused by conditions that can be fixed by site admins.AutoRetry—Errors that are automatically reprocessed with the Microbatching Errors Resubmission resource.InvalidSetup—Errors caused by invalid setup. Errors of this category can’t be reprocessed with the Microbatching Errors Resubmission resource.NonRetryable—Errors that can’t be reprocessed with the Microbatching Errors Resubmission resource.Unknown—Errors caused by conditions that can’t be fixed by site admins or users.UserActionable—Errors caused by conditions that can be fixed by users.If unspecified, all error categories are returned. | Optional | 54.0 |
| errorCode | String | Error code associated with the failed record. | Optional | 54.0 |
| includeRequest​Body | Boolean | Specifies whether to include the JSON request body in the response (true) or not (false). Only users with the Manage Experiences user permission can include the request body in the response. If unspecified, the default value is false. | Optional | 54.0 |
| latestDate | String | ISO 8601 date string for the most recent date from which to get records. The results include errors that occurred on the most recent date. | Optional | 54.0 |
| pageSize | Integer | Specifies the number of records per page. Valid values are from 1 through 100. If unspecified, the default is 100. | Optional | 54.0 |
| pageToken | String | Token specifying the page of records. Page tokens are returned as part of the response, such as currentPageToken or nextPageToken. If unspecified, the first page is returned. | Optional | 54.0 |
| processType | String | Logical name of the flow in the microbatching framework. Values are:LEAD_MSSELF_REGISTRATION | Required | 54.0 |
| status | String | Status of failed records. Values are:Error—Records in failed state.Reprocessing—Records that are reprocessing. | Optional | 54.0 |

Example GET request with required request parameter

```

```

Example GET request showing correct date format

```

```

Response body for GET

[Microbatching Error Record Info Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_microbatching_error_record_info_collection.htm "Collection of microbatching error records.")

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| earliestDate | String | ISO 8601 date string for the oldest date from which to get records. The results include errors that occurred on the oldest date. | Optional | 54.0 |
| errorCategory | String | Category of the errors. Values are:AdminActionable—Errors caused by conditions that can be fixed by site admins.AutoRetry—Errors that are automatically reprocessed with the Microbatching Errors Resubmission resource.InvalidSetup—Errors caused by invalid setup. Errors of this category can’t be reprocessed with the Microbatching Errors Resubmission resource.NonRetryable—Errors that can’t be reprocessed with the Microbatching Errors Resubmission resource.Unknown—Errors caused by conditions that can’t be fixed by site admins or users.UserActionable—Errors caused by conditions that can be fixed by users.If unspecified, all error categories are deleted. | Optional | 54.0 |
| errorCode | String | Error code associated with the failed record. | Optional | 54.0 |
| latestDate | String | ISO 8601 date string for the most recent date from which to get records. The results include errors that occurred on the most recent date. | Optional | 54.0 |
| pageSize | Integer | Specifies the maximum number of records to delete in a single DELETE request. Valid values are from 1 through 100. If unspecified, the default is 100.If there is more than one page of records to delete, continue making DELETE requests until all the pages of records are deleted. | Optional | 54.0 |
| processType | String | Logical name of the flow in the microbatching framework. Values are:LEAD_MSSELF_REGISTRATION | Required | 54.0 |
| status | String | Status of failed records. Values are:Error—Records in failed state.Reprocessing—Records that are reprocessing. | Optional | 54.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/communities/communityId/microbatching/errors
```

```
/connect/communities/0DBD20000004CZsOAM/microbatching/errors?processType=SELF_REGISTRATION
```

```
connect/communities/0DBD20000004CZsOAM/microbatching/errors?processType=SELF_REGISTRATION&earliestDate=2023-10-02T00:14:15.375Z
```

## Related Topics

- Microbatching Errors Resubmission (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_microbatching_errors_resubmission.htm)
- Microbatching Error Record Info Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_microbatching_error_record_info_collection.htm)
- 204: Successful
              Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
