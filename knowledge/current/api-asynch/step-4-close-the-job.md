---
title: "Step 4: Close the Job"
domain: api-asynch
topic: step-4-close-the-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.239Z
estimatedTokens: 297
keywords: [Step, Close, Job, you're, finished, submitting, batches, Salesforce, Closing, tells, monitoring, meaningful, statistics, progress]
---

# Step 4: Close the Job

> When you're finished submitting batches to Salesforce, close the job. Closing the job
    tells Salesforce that you're done submitting batches for the job, which allows the monitoring
    page in Salesforce to return more meaningful statistics on the progress of the job.

# Step 4: Close the Job

When you're finished submitting batches to Salesforce, close the job. Closing the job tells Salesforce that you're done submitting batches for the job, which allows the monitoring page in Salesforce to return more meaningful statistics on the progress of the job.

1.  Create a text file called close\_job.txt containing the following text:

    ```

    ```

2.  Using a command-line window, execute the following cURL command:

    curl https://**instance**.salesforce.com/services/async/66.0/job/**jobId** -H "X-SFDC-Session: **sessionId**" -H "Content-Type: application/xml; charset=UTF-8" -d @close\_job.txt

    **instance** is the portion of the <serverUrl\> element and **sessionId** is the <sessionId\> element that you noted in the login response. **jobId** is the job ID that was returned when you created the job.

    This cURL command updates the job resource state from Open to Closed.


#### See Also

-   [Step Three: Close a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm "Close a job by sending a POST request to this URI. The request URI identifies the job to close. When a job is closed, no more batches can be added.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <state>Closed</state>
</jobInfo>
```

## Related Topics

- Step Three: Close a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_close.htm)
