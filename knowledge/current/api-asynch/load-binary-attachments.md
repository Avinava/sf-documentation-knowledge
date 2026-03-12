---
title: "Load Binary Attachments"
domain: api-asynch
topic: load-binary-attachments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.330Z
estimatedTokens: 319
keywords: [Load, Binary, Attachments, Bulk, API, Attachment, objects, Salesforce, CRM, Content]
---

# Load Binary Attachments

> The Bulk API can load binary attachments, which can be Attachment objects or Salesforce
  CRM Content.

# Load Binary Attachments

The Bulk API can load binary attachments, which can be Attachment objects or Salesforce CRM Content.

-   **[Create a request.txt File](atlas.en-us.api_asynch.meta/api_asynch/binary_create_request_file.htm)**
    A batch is represented by a zip file, which contains a CSV, XML, or JSON file called request.txt that contains references to the binary attachments and the binary attachments themselves. This differs from CSV, XML, or JSON batch files that don’t include binary attachments. These batch files don’t need a zip or a request.txt file.
-   **[Create a Zip Batch File with Binary Attachments](atlas.en-us.api_asynch.meta/api_asynch/binary_create_zip.htm)**
    To submit your binary attachments as a batch, you create a zip batch file .
-   **[Create a Job for Batches with Binary Attachments](atlas.en-us.api_asynch.meta/api_asynch/binary_create_job.htm)**
    You can use cURL to create a job for batches containing Attachment records.
-   **[Create a Batch with Binary Attachments](atlas.en-us.api_asynch.meta/api_asynch/binary_create_batch.htm)**
    After creating the job, you’re ready to create a batch of Attachment records. You send data in batches in separate HTTP POST requests. In this example, you create and submit one batch.

## Related Topics

- Create a request.txt File (atlas.en-us.api_asynch.meta/api_asynch/binary_create_request_file.htm)
- Create a Zip Batch File with Binary Attachments (atlas.en-us.api_asynch.meta/api_asynch/binary_create_zip.htm)
- Create a Job for Batches with Binary Attachments (atlas.en-us.api_asynch.meta/api_asynch/binary_create_job.htm)
- Create a Batch with Binary Attachments (atlas.en-us.api_asynch.meta/api_asynch/binary_create_batch.htm)
