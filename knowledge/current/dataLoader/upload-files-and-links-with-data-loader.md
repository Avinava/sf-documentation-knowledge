---
title: "Upload Files and Links with Data Loader"
domain: dataLoader
topic: upload-files-and-links-with-data-loader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.258Z
estimatedTokens: 783
keywords: [Upload, Files, Links, Data, Loader, bulk, Salesforce]
---

# Upload Files and Links with Data Loader

> Use Data Loader to bulk upload files and links into Salesforce.

# Upload Files and Links with Data Loader

Use Data Loader to bulk upload files and links into Salesforce.

Before uploading documents or links, note the following.

-   If you intend to upload with Bulk API, verify that **Upload Bulk API Batch as Zip File** on the **Settings** | **Settings** page is enabled.
-   When you upload a document from your local drive using Data Loader, specify the path in the VersionData and PathOnClient fields in the CSV file. VersionData identifies the location and extracts the format, and PathOnClient identifies the type of document being uploaded.
-   When you upload a link using the Data Loader, specify the URL in ContentUrl. Don’t use PathOnClient or VersionData to upload links.
-   If you’re updating content that you’ve already uploaded:
    -   Perform the Insert function.
    -   Include a ContentDocumentId column with an 18-character ID. Salesforce uses this information to determine that you’re updating content. When you map the ContentDocumentId, the updates are added to the content file. If you don’t include the ContentDocumentId, the content is treated as new, and the content file isn’t updated. Visit [ContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm) to learn more.

1.  Create a CSV file with the following fields.

    | Field | Description |
    | --- | --- |
    | Title | The file name |
    | Description | (Optional.) The file or link description. If there are commas in the description, use double quotes around the text. |
    | VersionData | The complete file path on your local drive (for uploading documents only). Files are converted to base64 encoding on upload. This action adds approximately 30% to the file size. |
    | PathOnClient | The complete file path on your local drive (for uploading documents only). |
    | ContentUrl | The URL (for uploading links only). |
    | OwnerId | (Optional). The file owner, defaults to the user uploading the file. |
    | FirstPublishLocationId | The library ID. |
    | RecordTypeId | The record type ID.To determine the RecordTypeId values for your organization using Data Loader, follow the steps in Exporting Data. The following is a sample SOQL query:Select Id, Name FROM RecordType WHERE SobjectType = 'ContentVersion' |
    | TagsCsv | Optional tag |

    A sample CSV file is:

    ```

    ```

2.  Upload the CSV file for the ContentVersion object (see [Insert, Update, or Delete Data Using Data Loader](atlas.en-us.dataLoader.meta/dataLoader/inserting_updating_or_deleting_data.htm "Use the Data Loader wizards to add, modify, or delete records. The upsert wizard combines inserting and updating a record. If a record in your file matches an existing record, the existing record is updated with the values in your file. If no match is found, a new record is created. When you hard-delete records, the deleted records are not stored in the Recycle Bin and are eligible for deletion. For more information, see Configure Data Loader.")). All documents and links are available in the specified library.

## Code Examples

```
Title,Description,VersionData,PathOnClient,OwnerId,FirstPublishLocationId,RecordTypeId,TagsCsv
testfile,"This is a test file, use for bulk upload",c:\files\testfile.pdf,c:\files\testfile.pdf,005000000000000,058700000004Cd0,012300000008o2sAQG,one
```

## Related Topics

- Exporting Data (atlas.en-us.dataLoader.meta/dataLoader/exporting_data.htm)
- Insert, Update, or Delete Data Using Data
            Loader (atlas.en-us.dataLoader.meta/dataLoader/inserting_updating_or_deleting_data.htm)
