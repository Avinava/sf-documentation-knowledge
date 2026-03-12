---
title: "Step 6: Retrieve Batch Results"
domain: api-asynch
topic: step-6-retrieve-batch-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.258Z
estimatedTokens: 430
keywords: [Step, Retrieve, Batch, Results, Completed, result, status, individual, records]
---

# Step 6: Retrieve Batch Results

> When a batch is Completed, you must retrieve the
  batch result to see the status of individual records.

# Step 6: Retrieve Batch Results

When a batch is Completed, you must retrieve the batch result to see the status of individual records.

Retrieve the results for an individual batch by running the following cURL command:

curl https://**instance**.salesforce.com/services/async/66.0/job/**jobId**/batch/**batchId**/result -H "X-SFDC-Session: **sessionId**"

**instance** is the portion of the <serverUrl\> element and **sessionId** is the <sessionId\> element that you noted in the login response. jobId is the job ID that was returned when you created the job. **batchId** is the batch ID that was returned when you added a batch to the job.

Salesforce returns a response with data such as this:

```

```

The response body is a CSV file with a row for each row in the batch request. If a record was created, the ID is contained in the row. If a record was updated, the value in the Created column is false. If a record failed, the Error column contains an error message.

#### See Also

-   [Get Batch Results](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm "Get results of a batch that completed processing by sending a GET request to this URI. If the batch is a CSV file, the response is in CSV format. If the batch is an XML or JSON file, the response is in XML or JSON format, respectively.")

-   [Handle Failed Records in Batches](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm "A batch can have a Completed state even if some or all of the records failed. If a subset of records failed, the successful records aren't rolled back. Likewise, even if the batch has a Failed state or if a job is aborted, some records could have completed successfully.")

## Code Examples

```
"Id","Success","Created","Error"
"003x0000004ouM4AAI","true","true",""
"003x0000004ouM5AAI","true","true",""
```

## Related Topics

- Get Batch Results (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_results.htm)
- Handle Failed Records in Batches (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_failed_records.htm)
