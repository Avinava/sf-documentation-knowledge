---
title: "Enable Bulk API"
domain: dataLoader
topic: enable-bulk-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.249Z
estimatedTokens: 287
keywords: [Enable, Bulk, API, optimized, load, large, number, records, asynchronously, It’s, faster, SOAP-based, due, parallel, processing]
---

# Enable Bulk API

> Bulk API is optimized to load or delete a large number of
      records asynchronously. It’s faster than the SOAP-based API due to parallel processing and
      fewer network round-trips. By default, Data Loader uses the SOAP-based API to process
      records.

# Enable Bulk API

Bulk API is optimized to load or delete a large number of records asynchronously. It’s faster than the SOAP-based API due to parallel processing and fewer network round-trips. By default, Data Loader uses the SOAP-based API to process records.

To configure Data Loader to use Bulk API for inserting, updating, upserting, deleting, and hard deleting records:

1.  To start Data Loader, double-click the Data Loader icon on your Desktop or in your Applications folder.
2.  Choose **Settings** | **Settings**.
3.  Select the Use Bulk API option.
4.  Click **OK**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

-   You can also select the Enable serial mode for Bulk API option. Processing in parallel can cause database contention. When contention is severe, the load can fail. Serial mode processes batches one at a time, however it can increase the processing time for a load.
-   Caution: You can hard delete records when you configure Data Loader to Use Bulk API. Keep in mind that hard-deleted records are immediately deleted and can’t be recovered from the Recycle Bin.
