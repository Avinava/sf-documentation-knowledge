---
title: "Get Blob Data"
domain: rest-api
topic: get-blob-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.062Z
estimatedTokens: 516
keywords: [Get, Blob, Data, sObject, resource, get, blob, data, given, record., record, must, exist, Salesforce., Note, Example, retrieving, Document]
---

# Get Blob Data

> Use the sObject Blob Get resource to get blob data for a
   given record. To get blob data, a record with blob data must exist in
  Salesforce.

# Get Blob Data

Use the sObject Blob Get resource to get blob data for a given record. To get blob data, a record with blob data must exist in Salesforce.

Only certain standard objects have blob fields, such as Attachment, ContentNote, ContentVersion, Document, Folder, and Note.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The sObject Blob Get resource isn’t compatible with Composite API requests, because it returns binary data instead of data in JSON or XML formats. Instead, make individual sObject Blob Get requests to retrieve blob data.

The following example gets the blob data for the Document record that was created in [Insert or Update Blob Data](atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm "You can use the sObject Basic Information, sObject Rows, or sObject Collections resources to insert or update binary large objects (blobs) in Salesforce, such as images or PDFs. You can upload files or binary data of any type to any standard object that contains a blob field.").

## Example for retrieving blob data from a Document record

```

```

Example request body

none required

Example response body

Document body content is returned in binary form. The response content type isn’t JSON or XML since the returned data is binary. You can save the returned binary data to a file to store and access it.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm "Insert or Update Blob Data")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_recently_viewed.htm "Working with Recently Viewed Information")

#### See Also

-   [Insert or Update Blob Data](atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm "You can use the sObject Basic Information, sObject Rows, or sObject Collections resources to insert or update binary large objects (blobs) in Salesforce, such as images or PDFs. You can upload files or binary data of any type to any standard object that contains a blob field.")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Document/015D0000000N3ZZIA0/body -H "Authorization: Bearer token"
```

## Related Topics

- Insert or Update Blob Data (atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_recently_viewed.htm)
