---
title: "Create a Batch with Binary Attachments"
domain: api-asynch
topic: create-a-batch-with-binary-attachments
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.315Z
estimatedTokens: 613
keywords: [Batch, Binary, Attachments, creating, job, you’re, ready, Attachment, records, send, data, batches, separate, HTTP, POST]
---

# Create a Batch with Binary Attachments

> After creating the job, you’re ready to create a batch of Attachment records. You send
    data in batches in separate HTTP POST requests. In this example, you create and submit one
    batch.

# Create a Batch with Binary Attachments

After creating the job, you’re ready to create a batch of Attachment records. You send data in batches in separate HTTP POST requests. In this example, you create and submit one batch.

To organize your data in different batches, see [General Guidelines for Data Loads](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_guidelines.htm "For optimal processing time, consider these tips when planning your data loads. Always test your data loads in a sandbox organization first. Processing times can be different in a production organization.").

1.  [Create a zip batch file](atlas.en-us.api_asynch.meta/api_asynch/binary_create_zip.htm "To submit your binary attachments as a batch, you create a zip batch file .").
2.  Name the file, making sure to maintain the ".zip" suffix. For this example, the file is named request.zip.
3.  Using a command-line window, execute this cURL command.

    curl https://**instance**.salesforce.com/services/async/66.0/job/**jobId**/batch -H "X-SFDC-Session: **sessionId**" -H "Content-Type:zip/csv" --data-binary @request.zip

    **instance** is the portion of the <serverUrl\> element and **sessionId** is the <sessionId\> element that you noted in the login response.**jobId** is the job ID that was returned when you created the job.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    The Content-type for the POST request is zip/csv. For XML or JSON batches, use zip/xml or zip/json instead.

    Salesforce returns an XML response with data such as this.

    ```

    ```

    Salesforce doesn’t parse the CSV content or otherwise validate the batch until later. The response only acknowledges that the batch was received.

4.  Note the value of the batch ID returned in the <id\> element. You can use this batch ID later to check the status of the batch.

For details on proceeding to close the associated job, check batch status, and retrieve batch results, see the [Getting Started](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm "Get up and running with Bulk API 2.0 by sending a few requests to Salesforce. This Quick Start takes you from setting up a basic environment to inserting, upserting, and querying records using Bulk API 2.0. Experience how to use Bulk API 2.0 via cURL in a free Salesforce Developer Edition org by authenticating and following the examples.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<batchInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <id>751D000000003uwIAA</id>
  <jobId>750D000000001TyIAI</jobId>
  <state>Queued</state>
  <createdDate>2010-08-25T21:29:55.000Z</createdDate>
  <systemModstamp>2010-08-25T21:29:55.000Z</systemModstamp>
  <numberRecordsProcessed>0</numberRecordsProcessed>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>0</totalProcessingTime>
  <apiActiveProcessingTime>0</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
</batchInfo>
```

## Related Topics

- General
        Guidelines for Data Loads (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_guidelines.htm)
- Create a zip batch file (atlas.en-us.api_asynch.meta/api_asynch/binary_create_zip.htm)
- Getting Started (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart.htm)
