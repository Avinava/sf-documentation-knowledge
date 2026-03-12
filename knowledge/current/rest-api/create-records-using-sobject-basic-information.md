---
title: "Create Records Using sObject Basic Information"
domain: rest-api
topic: create-records-using-sobject-basic-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.817Z
estimatedTokens: 432
keywords: [Records, sObject, Basic, Creates, new, record]
---

# Create Records Using sObject Basic Information

> Creates a new record for a specified object based on field values in the request
		body.

# Create Records Using sObject Basic Information

Creates a new record for a specified object based on field values in the request body.

You must specify values for required fields in the request body. Specifying values for other fields is optional.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/

Formats

JSON, XML

HTTP Method

POST

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| Content-Type | An optional header, specifying the format for the request and response. Possible choices are:Content-Type: application/jsonContent-Type: application/xml |
| sObject | The name of the object. For example, Account.A required path parameter. |

## Example

-   For an example of creating a new record using POST, see [Create a Record](atlas.en-us.api_rest.meta/api_rest/dome_sobject_create.htm "Use the *** resource to create new records. You supply the required field values in the request data, and send the request using the POST HTTP method. The response body contains the ID of the new record if the call is successful.").
-   For an example of create a new record along with providing blob data for the record, see [Insert or Update Blob Data](atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm "You can use the sObject Basic Information, sObject Rows, or sObject Collections resources to insert or update binary large objects (blobs) in Salesforce, such as images or PDFs. You can upload files or binary data of any type to any standard object that contains a blob field.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

## Related Topics

- Create a Record (atlas.en-us.api_rest.meta/api_rest/dome_sobject_create.htm)
- Insert or Update Blob Data (atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm)
