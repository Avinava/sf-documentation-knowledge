---
title: "Get an Image from a Rich Text Area Field"
domain: rest-api
topic: get-an-image-from-a-rich-text-area-field
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.003Z
keywords: [Get, Image, Rich, Text, Area, Field, Note, Obtain, Reference, Retrieve]
---

# Get an Image from a Rich Text Area Field

# Get an Image from a Rich Text Area Field

Use the [sObject Rich Text Image Get](atlas.en-us.api_rest.meta/api_rest/resources_sobject_rich_text_image_retrieve.htm "Gets the specified image data from a specific rich text area field in a given record. To get an image, you must have a record with an image uploaded to a rich text area field.") resource to retrieve an image from a rich text area field. In this example, we retrieve an image from a custom rich text field of a Lead record called LeadPhotoRichText\_\_c. We assume that an image has already been uploaded to this field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This example doesn’t work with the EmailMessage object.

## Obtain the Image Reference ID

Before you can retrieve the image with a request, you must first obtain the refid from the rich text field. Use the [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") resource to retrieve the field information for the Lead record.

```

```

Here’s an example of abridged output from the request.

```

```

You can see from the LeadPhotoRichText\_\_c field that the refid of the image is 0EM5e000000B9LQ. Use this value in the next step to retrieve the image.

## Retrieve the Image

Use the Lead record ID, rich text field name, and image refid to retrieve the image. The response returns the image as encoded data with the same file type as it was uploaded with. Save the returned data as an image file with the appropriate file type using the \--output filename parameter.

```

```

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_searches_and_queries.htm "Working with Searches and Queries")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm "Insert or Update Blob Data")