---
title: "Errors"
domain: api-asynch
topic: errors
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.278Z
estimatedTokens: 1081
keywords: [Errors, Operations, perform, Bulk, API, trigger, error, codes, common, action, possibly, triggered, 2.0]
---

# Errors

> Operations that you perform with Bulk API can trigger error codes. This list shows the
  most common error codes and the Bulk API action that possibly triggered them.

# Errors

Operations that you perform with Bulk API can trigger error codes. This list shows the most common error codes and the Bulk API action that possibly triggered them.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_asynch)

#### Tip

For HTTP response codes, see [Status Codes and Error Responses](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/errorcodes.htm).

ClientInputError

The operation failed with an unknown client-side error.

For binary attachments, the request content is provided both as an input stream and an attachment.

ExceededQuota

The job or batch you tried to create exceeds the allowed number for the past 24-hour period.

FeatureNotEnabled

Bulk API isn’t enabled for this organization.

InvalidBatch

The batch ID specified in a batch update or query is invalid.

This error code is returned for binary attachments when the zip content is malformed or these conditions occur:

-   The request.txt file can't be found, can't be read, is a directory, or contains invalid content.
-   The decompressed size of a binary attachment is too large.
-   The size of the zip file is too large.
-   The total decompressed size of all the binary attachments is too large.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

A StatusCode of INVALID\_FIELD is returned for the following conditions:

-   A binary file referenced in the batch data is missing or is a directory.
-   A binary file referenced in the batch data doesn't start with #.

For more information about binary attachment limits, see "General Limits" in [Bulk API and Bulk API 2.0 Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm).

InvalidJob

The job ID specified in a query or update for a job, or a create, update, or query for batches is invalid.

The user attempted to create a job using a zip content type in API version 19.0 or earlier.

InvalidJobState

The job state specified in a job update operation is invalid.

InvalidOperation

The operation specified in a URI for a job is invalid. Check the spelling of “job” in the URI.

InvalidSessionId

The session ID specified is invalid.

InvalidUrl

The URI specified is invalid.

InvalidUser

Either the user sending a Bulk API request doesn't have the correct permission, or the job or batch specified was created by another user.

InvalidXML

XML contained in the request body is invalid.

Timeout

The connection timed out. This error is thrown if Salesforce takes too long to process a batch. For more information on timeout limits, see "Limits Specific to Ingest Jobs" in [Bulk API and Bulk API 2.0 Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm). If you get a timeout error when processing a batch, split your batch into smaller batches, and try again.

TooManyLockFailure

Too many lock failures while processing the current batch. This error may be returned during processing of a batch. To resolve, analyze the batches for lock conflicts. See "General Limits" in [Bulk API and Bulk API 2.0 Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm).

Unknown

Exception with unknown cause occurred.

In addition, Bulk API uses the same status codes and exception codes as SOAP API. For more information on these codes, see “ExceptionCode” in the [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#exception_code_topic).

#### See Also

-   [Handle Failed Records in Batches](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm "A batch can have a Completed state even if some or all of the records failed. If a subset of records failed, the successful records aren't rolled back. Likewise, even if the batch has a Failed state or if a job is aborted, some records could have completed successfully.")

## Related Topics

- Handle Failed Records in Batches (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm)
- Troubleshooting Ingest Timeouts (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_troubleshooting_timeouts.htm)
- Troubleshooting Query Timeouts (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_troubleshoot_query_timeouts.htm)
- General Guidelines for Data Loads (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_guidelines.htm)
