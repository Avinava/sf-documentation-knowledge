---
title: "Create a Job for Batches with Binary Attachments"
domain: api-asynch
topic: create-a-job-for-batches-with-binary-attachments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.321Z
estimatedTokens: 381
keywords: [Job, Batches, Binary, Attachments, cURL, containing, Attachment, records]
---

# Create a Job for Batches with Binary Attachments

> You can use cURL to create a job for batches containing Attachment records.

# Create a Job for Batches with Binary Attachments

You can use cURL to create a job for batches containing Attachment records.

For more information, see [Walkthrough Sending HTTP Requests with cURL](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_requests_intro.htm "With cURL now configured, you can start sending HTTP requests to the Bulk API.").

1.  Create a text file called job.txt containing this text.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    The batches for this job contain data in CSV format, so the contentType field is set to ZIP\_CSV. For XML or JSON batches, use ZIP\_XML or ZIP\_JSON, respectively.

2.  Using a command-line window, execute this cURL command

    curl https://**instance**.salesforce.com/services/async/66.0/job -H "X-SFDC-Session: **sessionId**" -H "Content-Type: application/xml; charset=UTF-8" -d @job.txt

    **instance** is the portion of the <serverUrl\> element and **sessionId** is the <sessionId\> element that you noted in the login response. For more information about logging in, see [Step 1: Log In Using the SOAP API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_login.htm "The Bulk API doesn't provide a login operation, so you must use SOAP API to log in.").

    Salesforce returns an XML response with data such as the following.

    ```

    ```

3.  Note the value of the job ID returned in the <id\> element. Use this ID in subsequent operations.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo xmlns="http://www.force.com/2009/06/asyncapi/dataload">
    <operation>insert</operation>
    <object>Attachment</object>
    <contentType>ZIP_CSV</contentType>
</jobInfo>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <id>750D000000001SRIAY</id>
  <operation>insert</operation>
  <object>Attachment</object>
  <createdById>005D0000001B0VkIAK</createdById>
  <createdDate>2010-08-25T18:52:03.000Z</createdDate>
  <systemModstamp>2010-08-25T18:52:03.000Z</systemModstamp>
  <state>Open</state>
  <concurrencyMode>Parallel</concurrencyMode>
  <contentType>ZIP_CSV</contentType>
  <numberBatchesQueued>0</numberBatchesQueued>
  <numberBatchesInProgress>0</numberBatchesInProgress>
  <numberBatchesCompleted>0</numberBatchesCompleted>
  <numberBatchesFailed>0</numberBatchesFailed>
  <numberBatchesTotal>0</numberBatchesTotal>
  <numberRecordsProcessed>0</numberRecordsProcessed>
  <numberRetries>0</numberRetries>
  <apiVersion>66.0</apiVersion>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>0</totalProcessingTime>
  <apiActiveProcessingTime>0</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
</jobInfo>
```

## Related Topics

- Walkthrough Sending HTTP Requests with cURL (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_requests_intro.htm)
- Step 1: Log In Using the SOAP API (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_login.htm)
