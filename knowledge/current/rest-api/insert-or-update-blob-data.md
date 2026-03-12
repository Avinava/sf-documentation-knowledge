---
title: "Insert or Update Blob Data"
domain: rest-api
topic: insert-or-update-blob-data
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:34.964Z
estimatedTokens: 2822
keywords: [Insert, Blob, Data, sObject, Basic, Rows, Collections, resources, binary, large, objects, blobs, Salesforce, images, PDFs]
---

# Insert or Update Blob Data

> You can use the sObject Basic Information, sObject Rows, or sObject
                Collections resources to insert or update binary large objects (blobs) in
            Salesforce, such as images or PDFs. You can upload files or binary data of any type to
            any standard object that contains a blob field.

# Insert or Update Blob Data

You can use the [sObject Basic Information](atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm "Retrieves basic metadata for a specified object, or creates a new record for the specified object."), [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records."), or [sObject Collections](atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm "Executes actions on multiple records in one request. Use sObject Collections to reduce the number of round-trips between the client and server. The response bodies and HTTP statuses of the requests are returned in a single response body. The entire request counts as a single call toward your API limits. This resource is available in API version 42.0 and later.") resources to insert or update binary large objects (blobs) in Salesforce, such as images or PDFs. You can upload files or binary data of any type to any standard object that contains a blob field.

To insert and update blob data, create a multipart request body. The first part of the request body contains non-binary field data, such as the description or name of the new record. The second part contains the binary data of the file you’re uploading. The request body must conform to the MIME multipart content-type standard. For more information, see the W3C Standard for multipart content types.

If you use the sObject Basic Information or sObject Rows resources, the maximum file size for uploads is 2 GB for ContentVersion objects and 500 MB for all other eligible standard objects. If you use the sObject Collections resource, the maximum total size of all files in a single request is 500 MB.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

You can insert or update blob data using a non-multipart message, but you are limited to 50 MB of text data or 37.5 MB of base64–encoded data.

These sections provide examples of how to insert or update blob data using a multipart content-type request. The request bodies for these examples use JSON formatting.

## Inserting a Document with Blob Data

This example request and request body creates a Document record that contains the binary data of a PDF file. In addition to the binary data of the file itself, the request body also specifies other field data, including the FolderId, which is required for the Document object.

If you don’t have a Folder record for the new Document record in Salesforce, you must create one using the sObject Basic Information resource before you can follow this example. Make sure the Type field of the Folder record is Document.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_rest)

#### Tip

After you successfully send the request, you can view the new Document in Salesforce Classic. Salesforce Lightning doesn’t display Documents in the user interface.

Example request for creating a Document

```

```

Example request body for creating a Document

This request body represents the contents of NewDocument.json. The binary data for the PDF content has been omitted for brevity and replaced with “Binary data goes here.” An actual request contains the full binary content.

```

```

Example response body

On success, the ID of the new Document is returned.

```

```

Example error response

```

```

## Updating a Document with Blob Data

This example updates an existing Document record. Depending on the contents of the request body, you can update the fields of the record, the binary data associated with it, or both.

If you want to update only the record fields, the request body doesn’t require the multipart content type.

Example request for updating binary data in a Document object

```

```

Example request body for updating binary data in a Document object

This request body represents the contents of UpdateDocument.json. This example updates the binary data of the record, as well as the Name and Keywords fields. If you want to update only the binary data, you can remove the lines of code with the Name and Keywords fields.

The binary data for the PDF content has been omitted for brevity and replaced with “Updated document binary goes here.” An actual request contains the full binary content.

```

```

Example response body for updating fields in a Document object

None returned

Error responses

See [Status Codes and Error Responses](atlas.en-us.api_rest.meta/api_rest/errorcodes.htm).

## Inserting a ContentVersion

This example inserts a new ContentVersion. In addition to the binary data of the file itself, this code also provides values for other fields, such as the ReasonForChange and PathOnClient. This message contains the ContentDocumentId because a ContentVersion is always associated with a ContentDocument.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_rest)

#### Tip

The ContentVersion object doesn’t support updates. Therefore, you can’t update a ContentVersion. You can only insert a new ContentVersion. You can see the results of your changes on the Content tab.

Example usage for inserting a ContentVersion

```

```

Example request body for inserting a ContentVersion

This request body represents the contents of the file NewContentVersion.json. The binary data for the PDF content has been omitted for brevity and replaced with “Binary data goes here.” An actual request contains the full binary content.

```

```

Example response body for inserting a ContentVersion

```

```

Error responses for inserting a ContentVersion

See [Status Codes and Error Responses](atlas.en-us.api_rest.meta/api_rest/errorcodes.htm).

## Using sObject Collections to Insert a Collection of Blob Records

This example inserts a collection of new Documents. In addition to the binary data of the files themselves, this code also specifies other field data, such as the Description and Name for each record in the collection.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_rest)

#### Tip

After you successfully send the request, you can view the new Document in Salesforce Classic. Salesforce Lightning doesn’t display Documents in the user interface.

Attributes

If you’re using sObject Collections with blob data, you must specify certain attribute values in addition to type in the request body’s attributes map.

| Parameter | Description |
| --- | --- |
| binaryPartName | Required for blob data. A unique identifier for the binary part. |
| binaryPartNameAlias | Required for blob data. The name of the field in which the binary data is inserted or updated. |

Example for creating Documents

```

```

Example request body for creating Documents

This code is the contents of newdocuments.json. The binary data for the PDF content has been omitted for brevity and replaced with “Binary data goes here.” An actual request contains the full binary content.

```

```

Example response body for creating Documents

On success, the IDs of the new Documents are returned.

```

```

For more information, see [sObject Collections](atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm#resources_composite_sobjects_collections "Executes actions on multiple records in one request. Use sObject Collections to reduce the number of round-trips between the client and server. The response bodies and HTTP statuses of the requests are returned in a single response body. The entire request counts as a single call toward your API limits. This resource is available in API version 42.0 and later.").

## Multipart Message Considerations

Following are some considerations for the format of a multipart message when you insert or update blob data.

Boundary String

-   Separates the various parts of a multipart request body.
-   Must be specified in the Content-Type header of multipart request.
-   Can be up to 70 characters.
-   Can’t be a string value that appears anywhere in any part of the request body.
-   Includes a two hyphen (--) prefix for the first boundary string.
-   Includes a two hyphen (--) suffix for the last boundary string.

Content-Disposition Header

-   Required in each part of the request body.
-   Must have form-data as a value and a name attribute.
    -   In the non-binary part of the request body, use any value for the name attribute.
    -   For single documents, in the binary part of the request body, use the name attribute to specify the name of the blob data field for the object. For example, the name of the blob data field for the Document object is Body.
    -   For documents inserted or updated using sObject Collections, use the name attribute in each binary part of the request body to specify a unique identifier for that part. These identifiers are referenced by the non-binary part of the request body.
-   Must contain a filename attribute for the binary part that represents the name of the local file.

Content-Type Header

-   Required in each part of the multipart request body.
-   Supports the application/json and application/xml content types for the non-binary part of the multipart request body.
-   Supports any content type for the binary part of the multipart request body.

New Line

A new line must be added between the header and the data for each part of the multipart request body. As you can see in the examples, a new line separates the Content-Type and Content-Disposition headers from the JSON or binary data.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/dome_sobject_rich_text_image_retrieve.htm "Get an Image from a Rich Text Area Field")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/dome_sobject_blob_retrieve.htm "Get Blob Data")

#### See Also

-   [sObject Basic Information](atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm "Retrieves basic metadata for a specified object, or creates a new record for the specified object.")

-   [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.")

-   [sObject Collections](atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm "Executes actions on multiple records in one request. Use sObject Collections to reduce the number of round-trips between the client and server. The response bodies and HTTP statuses of the requests are returned in a single response body. The entire request counts as a single call toward your API limits. This resource is available in API version 42.0 and later.")

-   [Get Blob Data](atlas.en-us.api_rest.meta/api_rest/dome_sobject_blob_retrieve.htm "Use the sObject Blob Get resource to get blob data for a given record. To get blob data, a record with blob data must exist in Salesforce.")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Document/ -H "Authorization: Bearer token" -H "Content-Type: multipart/form-data; boundary="boundary_string"" --data-binary @NewDocument.json
```

```
--boundary_string
Content-Disposition: form-data; name="entity_document";
Content-Type: application/json

{  
    "Description" : "Marketing brochure for Q1 2011",
    "Keywords" : "marketing,sales,update",
    "FolderId" : "005D0000001GiU7",
    "Name" : "Marketing Brochure Q1",
    "Type" : "pdf"
}

--boundary_string
Content-Type: application/pdf
Content-Disposition: form-data; name="Body"; filename="2011Q1MktgBrochure.pdf"

Binary data goes here.
--boundary_string--
```

```
{
    "id" : "015D0000000N3ZZIA0",
    "errors" : [ ],
    "success" : true
}
```

```
{
    "fields" : [ "FolderId" ],
    "message" : "Folder ID: id value of incorrect type: 005D0000001GiU7",
    "errorCode" : "MALFORMED_ID"
}
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/Document/015D0000000N3ZZIA0 -H "Authorization: Bearer token" -H "Content-Type: multipart/form-data; boundary="boundary_string"" --data-binary @UpdateDocument.json -X PATCH
```

## Related Topics

- sObject Basic Information (atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm)
- sObject Rows (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm)
- sObject
                Collections (atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm)
- Status Codes and Error Responses (atlas.en-us.api_rest.meta/api_rest/errorcodes.htm)
- sObject Collections (atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/dome_sobject_rich_text_image_retrieve.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/dome_sobject_blob_retrieve.htm)
- Get Blob Data (atlas.en-us.api_rest.meta/api_rest/dome_sobject_blob_retrieve.htm)
