---
title: "Handle Failed Records in Batches"
domain: api-asynch
topic: handle-failed-records-in-batches
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.064Z
estimatedTokens: 917
keywords: [Handle, Failed, Records, Batches, batch, Completed, state, subset, successful, aren't, rolled, back, Likewise, job, aborted]
---

# Handle Failed Records in Batches

> A batch can have a Completed state even if some or all of the records failed. If a subset of records
    failed, the successful records aren't rolled back. Likewise, even if the batch has a Failed state or if a job is aborted, some records could have completed
    successfully.

# Handle Failed Records in Batches

A batch can have a Completed state even if some or all of the records failed. If a subset of records failed, the successful records aren't rolled back. Likewise, even if the batch has a Failed state or if a job is aborted, some records could have completed successfully.

When you get the batch results, it's important to look at the Success field for each result row to ensure that all rows were processed successfully. If a record wasn’t processed successfully, the Error column includes more information about the failure.

To identify failed records and log them to an error file:

1.  Wait for the batch to finish processing. See [Get Information for a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm "Get information about an existing batch by sending a GET request to this URI.") and [Interpret Batch State](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm "This list gives you more details about the various states, also known as statuses, of a batch. The batch state informs you whether to proceed to get the results, or whether you must wait or fix errors related to your request.").
2.  [Get the batch results](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm "Get results of a batch that completed processing by sending a GET request to this URI. If the batch is a CSV file, the response is in CSV format. If the batch is an XML or JSON file, the response is in XML or JSON format, respectively.").

    This sample CSV batch result shows an error for the last record because the LastName field was missing:

    ```

    ```

3.  Parse the results for each record:
    1.  Track the record number for each result record. Each result record corresponds to a record in the batch. The results are returned in the same order as the records in the batch request. It's important to track the record number in the results so that you can identify the associated failed record in the batch request.
    2.  If the Success field is false, the row wasn’t processed successfully. Otherwise, the record was processed successfully, and you can proceed to check the result for the next record.
    3.  Get the contents of the Error column.
    4.  Write the contents of the corresponding record in the batch request to an error file on your computer. Append the information from the Error column. If you don't cache the batch request that you submitted, you can [retrieve the batch request](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm "Get a batch request by sending a GET request to the following URI. This is available in API version 19.0 and later.") from Salesforce.

After you examine each result record, you can manually fix each record in the error file and submit these records in a new batch. To check that each record processed successfully, repeat the previous steps.

-   [← Previous](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm "Get Batch Results")

#### See Also

-   [Add a Batch to a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm "Add a new batch to a job by sending a POST request to this URI. The request body contains a list of records for processing.")

-   [Errors](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_errors.htm "Operations that you perform with Bulk API can trigger error codes. This list shows the most common error codes and the Bulk API action that possibly triggered them.")

-   [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.")

## Code Examples

```
"Id","Success","Created","Error"
"003D000000Q89kQIAR","true","true",""
"003D000000Q89kRIAR","true","true",""
"","false","false","REQUIRED_FIELD_MISSING:Required fields are missing: [LastName]:LastName --"
```

## Related Topics

- Get Information for a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm)
- Interpret Batch State (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm)
- Get the batch results (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
- retrieve the batch request (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_request.htm)
- ← Previous (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
- Add a Batch to a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm)
- Errors (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_reference_errors.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)
