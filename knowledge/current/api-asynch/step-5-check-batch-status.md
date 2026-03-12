---
title: "Step 5: Check Batch Status"
domain: api-asynch
topic: step-5-check-batch-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.236Z
estimatedTokens: 493
keywords: [Step, Check, Batch, Status, individual, running, cURL, command]
---

# Step 5: Check Batch Status

> You can check the status of an individual batch by running this cURL
    command.

# Step 5: Check Batch Status

You can check the status of an individual batch by running this cURL command.

curl https://**instance**.salesforce.com/services/async/66.0/job/**jobId**/batch/**batchId** -H "X-SFDC-Session: **sessionId**"

**instance** is the portion of the <serverUrl\> element and **sessionId** is the <sessionId\> element that you noted in the login response. **jobId** is the job ID that was returned when you created the job. **batchId** is the batch ID that was returned when you added a batch to the job.

Salesforce returns an XML response with data such as this:

```

```

If Salesforce can’t read the batch content or if the batch contains errors, such as invalid field names in the CSV header row, the batch state is Failed. When the batch state is Completed, all records in the batch have been processed. However, individual records could have failed. To see the status of individual records, retrieve the batch result.

Checking the status of each individual batch isn't necessary. You can check the status for all batches that are part of the job by running this cURL command:

curl https://**instance**.salesforce.com/services/async/66.0/job/**jobId**/batch -H "X-SFDC-Session: **sessionId**"

#### See Also

-   [Get Information for a Batch](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm "Get information about an existing batch by sending a GET request to this URI.")

-   [Get Information for All Batches in a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm "Get information about all batches in a job by sending a GET request to this URI.")

-   [Interpret Batch State](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm "This list gives you more details about the various states, also known as statuses, of a batch. The batch state informs you whether to proceed to get the results, or whether you must wait or fix errors related to your request.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<batchInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <id>751x00000000079AAA</id>
  <jobId>750x0000000005LAAQ</jobId>
  <state>Completed</state>
  <createdDate>2009-09-01T17:44:45.000Z</createdDate>
  <systemModstamp>2009-09-01T17:44:45.000Z</systemModstamp>
  <numberRecordsProcessed>2</numberRecordsProcessed>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>5820</totalProcessingTime>
  <apiActiveProcessingTime>2166</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
</batchInfo>
```

## Related Topics

- Get Information for a Batch (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info.htm)
- Get Information for All Batches in a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_get_info_all.htm)
- Interpret Batch State (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_interpret_status.htm)
