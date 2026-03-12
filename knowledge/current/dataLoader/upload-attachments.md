---
title: "Upload Attachments"
domain: dataLoader
topic: upload-attachments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.234Z
estimatedTokens: 505
keywords: [Upload, Attachments, Data, Loader, Salesforce]
---

# Upload Attachments

> Use Data Loader to upload attachments to Salesforce.

# Upload Attachments

Use Data Loader to upload attachments to Salesforce.

Before uploading attachments, note the following:

-   If you intend to upload with Bulk API, verify that **Upload Bulk API Batch as Zip File** on the **Settings** | **Settings** page is enabled.
-   If you are migrating attachments from a source Salesforce org to a target org, begin by requesting a data export for the source org. On the Schedule Export page, select **Include Attachments** to include the Attachment.csv file in your export. You can use this CSV file to upload the attachments. .

Confirm that the CSV file you want to use for attachment importing contains these required columns. Each column represents a Salesforce field. The CSV file can also include other optional Attachment fields, such as Description.

-   ParentId—Salesforce ID of the parent record
-   Name—Name of the attachment file, such as myattachment.jpg
-   Body—Absolute path to the attachment on your local drive

    Make sure that the values in the Body column contain the full path of the attachments on your computer. For example, if an attachment named myattachment.jpg is the folder C:\\Export, Body must specify C:\\Export\\myattachment.jpg. Your CSV file looks like this example:

    ```

    ```


Proceed with an insert or upsert operation (see [Insert, Update, or Delete Data Using Data Loader](atlas.en-us.dataLoader.meta/dataLoader/inserting_updating_or_deleting_data.htm "Use the Data Loader wizards to add, modify, or delete records. The upsert wizard combines inserting and updating a record. If a record in your file matches an existing record, the existing record is updated with the values in your file. If no match is found, a new record is created. When you hard-delete records, the deleted records are not stored in the Recycle Bin and are eligible for deletion. For more information, see Configure Data Loader.")). For the select data objects step, select **Show all Salesforce objects** and the attachment object name in the list.

## Code Examples

```
ParentId,Name,Body
        50030000000VDowAAG,attachment1.jpg,C:\Export\attachment1.jpg
        701300000000iNHAAY,attachment2.doc,C:\Export\files\attachment2.doc
        50030000000VJowBBG,attachment_word_document.doc,C:\Export\attachment_word_document.doc
```

## Related Topics

- Insert, Update, or
                                        Delete Data Using Data Loader (atlas.en-us.dataLoader.meta/dataLoader/inserting_updating_or_deleting_data.htm)
