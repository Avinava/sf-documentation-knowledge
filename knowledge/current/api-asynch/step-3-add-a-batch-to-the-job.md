---
title: "Step 3: Add a Batch to the Job"
domain: api-asynch
topic: step-3-add-a-batch-to-the-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.231Z
estimatedTokens: 708
keywords: [Step, Add, Batch, Job, creating, you’re, ready, contact, records, send, data, batches, separate, HTTP, POST]
---

# Step 3: Add a Batch to the Job

> After creating the job, you’re ready to create a batch of contact records. You send
    data in batches in separate HTTP POST requests. The URI for each request is similar to the one
    you used when creating the job, but you append jobId/batch to the URI.

# Step 3: Add a Batch to the Job

After creating the job, you’re ready to create a batch of contact records. You send data in batches in separate HTTP POST requests. The URI for each request is similar to the one you used when creating the job, but you append **jobId**/batch to the URI.

Format the data as CSV, XML, or JSON if you’re not including binary attachments. For information about binary attachments, see [Load Binary Attachments](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_asynch/binary_intro.htm). For information about batch size limitations, see [Bulk API and Bulk API 2.0 Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm).

This example shows CSV as this is the recommended format. It's your responsibility to divide up your data set in batches that fit within the limits. In this example, we keep it very simple with just a few records.

To add a batch to a job:

1.  Create a CSV file named data.csv with these two records.

    ```

    ```

    The value for the Description field in the last row spans multiple lines, so it’s wrapped in double quotes.

2.  Using a command-line window, execute this cURL command.

    curl https://**instance**.salesforce.com/services/async/66.0/job/**jobId**/batch -H "X-SFDC-Session: **sessionId**" -H "Content-Type: text/csv; charset=UTF-8" --data-binary @data.csv

    **instance** is the portion of the <serverUrl\> element and **sessionId** is the <sessionId\> element that you noted in the login response. **jobId** is the job ID that was returned when you created the job.

    Salesforce returns an XML response with data such as this.

    ```

    ```

    Salesforce doesn’t parse the CSV content or otherwise validate the batch until later. The response only acknowledges that the batch was received.

3.  Note the value of the batch ID returned in the <id\> element. You can use this batch ID later to check the status of the batch.

#### See Also

-   [Prepare CSV Files](atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_preparing.htm "The first row in a CSV file lists the field names for the object that you're processing. Each subsequent row corresponds to a record in Salesforce. A record consists of a series of fields that are delimited by commas. A CSV file can contain multiple records and constitutes a batch.")

-   [Add a Batch to a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm "Add a new batch to a job by sending a POST request to this URI. The request body contains a list of records for processing.")

-   [Limits](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm "Note the following limits specific to Bulk API.")

## Code Examples

```
FirstName,LastName,Department,Birthdate,Description
Tom,Jones,Marketing,1940-06-07Z,"Self-described as ""the top"" branding guru on the West Coast"
Ian,Dury,R&D,,"World-renowned expert in fuzzy logic design. 
Influential in technology purchases."
```

```
<?xml version="1.0" encoding="UTF-8"?>
<batchInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
 <id>751x00000000079AAA</id>
 <jobId>750x0000000005LAAQ</jobId>
 <state>Queued</state>
 <createdDate>2009-09-01T17:44:45.000Z</createdDate>
 <systemModstamp>2009-09-01T17:44:45.000Z</systemModstamp>
 <numberRecordsProcessed>0</numberRecordsProcessed>
 <numberRecordsFailed>0</numberRecordsFailed>
 <totalProcessingTime>0</totalProcessingTime>
 <apiActiveProcessingTime>0</apiActiveProcessingTime>
 <apexProcessingTime>0</apexProcessingTime>
</batchInfo>
```

## Related Topics

- Prepare CSV Files (atlas.en-us.api_asynch.meta/api_asynch/datafiles_csv_preparing.htm)
- Add a Batch to a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_batches_create.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_limits.htm)
