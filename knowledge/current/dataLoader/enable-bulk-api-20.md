---
title: "Enable Bulk API 2.0"
domain: dataLoader
topic: enable-bulk-api-20
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.252Z
estimatedTokens: 277
keywords: [Enable, Bulk, API, 2.0, Select, option, insert, upsert, hard-delete, records, optimized, load, asynchronously, Supports, OAuth]
---

# Enable Bulk API 2.0

> Select this option to use Bulk API 2.0 to insert, update, upsert, delete, and
  hard-delete records. Bulk API 2.0 is optimized to load or delete many records asynchronously.
  Supports all OAuth 2.0 flows supported by other Salesforce REST APIs. Bulk API 2.0's design is
  more consistent and better integrated with other Salesforce APIs. Bulk API 2.0 also has the
  advantage of future innovation. By default, Data Loader uses the SOAP-based API to process
  records.

# Enable Bulk API 2.0

Select this option to use Bulk API 2.0 to insert, update, upsert, delete, and hard-delete records. Bulk API 2.0 is optimized to load or delete many records asynchronously. Supports all OAuth 2.0 flows supported by other Salesforce REST APIs. Bulk API 2.0's design is more consistent and better integrated with other Salesforce APIs. Bulk API 2.0 also has the advantage of future innovation. By default, Data Loader uses the SOAP-based API to process records.

To configure Data Loader to use Bulk API 2.0 for inserting, updating, upserting, deleting, and hard deleting records:

1.  To start Data Loader, double-click the Data Loader icon on your Desktop or in your Applications folder.
2.  Choose **Settings** | **Settings**.
3.  Select the Use Bulk API 2.0 option.
4.  Click **OK**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

Caution: You can hard delete records when you configure Data Loader to Use Bulk API 2.0. Keep in mind that hard-deleted records are immediately deleted and can’t be recovered from the Recycle Bin.
