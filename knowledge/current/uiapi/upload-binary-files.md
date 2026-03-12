---
title: "Upload Binary Files"
domain: uiapi
topic: upload-binary-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.051Z
estimatedTokens: 713
keywords: [Upload, Binary, Files, record, Base64, data, Multipart, Form-Data, JSON]
---

# Upload Binary Files

> If a record has a Base64 field, you can upload binary data to the
      field when you create or update a record.

# Upload Binary Files

If a record has a Base64 field, you can upload binary data to the field when you create or update a record.

The field determines the binary data file size limit. For example, the ContentNote.Content field has a different limit than the Attachment.Body field. For information about fields, see [Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm "HTML (New Window)") in *Object Reference for Salesforce and Lightning Platform*.

There are two ways to upload a binary file in request.

-   [Upload Binary Files in a Multipart/Form-Data Request](#multipart)
-   [Upload Binary Files in a JSON Request Body](#json)

## Upload Binary Files in a Multipart/Form-Data Request

To upload a binary file, create a multipart request with a part that contains the JSON request body required by the resource, and a part for each file you want to upload. Each file must have its own part. To upload binary data to multiple fields, add a part for each field. The part names must match the field names.

Let’s [create](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm#ui_api_resources_records_create "Create or clone a record.") a ContentNote record and upload a binary file to its [Content](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentnote.htm "HTML (New Window)") field, which is the content or body of the note.

This [curl](https://curl.haxx.se/ "HTML (New Window)") example performs a multi-part request that contains the JSON request body and the binary file.

```

```

The first part, starting with \-F, contains the JSON request body that the /ui-api/records resource requires. The request body contains the API name of the record (ContentNote) and the title of the record (My List of Things). The part name must be json.

The second part, starting with the second \-F, contains the binary file. The part name must match the name of the Base64 field to which the data is uploaded. The ContentNote Base64 field name is Content, and the plain text file we’re uploading is note.txt.

## Upload Binary Files in a JSON Request Body

The JSON format doesn’t support binary data. To upload a binary file in a JSON payload, encode the file using [Base64](https://en.wikipedia.org/wiki/Base64) encoding.

In this sample Record Input JSON request body, the Content property contains the file as a Base64 encoded string.

```

```

This curl example creates a ContentNote record and uploads the file.

```

```

#### See Also

-   [Create or Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm "Create or clone a record.")

-   [Update a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_patch.htm "Update a record's data.")

## Code Examples

```
curl -v -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' 
  -F 'json={"apiName": "ContentNote","fields": {"Title": "My List of Things"}};type=application/json' 
  -F 'Content=@note.txt;type=application/octet-stream' 
  -X POST 'http://{instance-name}.salesforce.com/services/data/v66.0/ui-api/records'
```

```
{ 
"apiName": "ContentNote", 
"fields": { 
  "Content": "SGksIFRoaXMgaXMgYmFzZTY0",
  "Title": "Sample Title" 
  } 
}
```

```
curl -X POST -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' 
  -H 'Content-Type: application/json' -H "Content-type: application/json" 
  -d '{"apiName": "ContentNote","fields": {"Content": "SGksIFRoaXMgaXMgYmFzZTY0","Title": "Sample Title"} }' 
  'http://{instance-name}.salesforce.com/services/data/v66.0/ui-api/records'
```

## Related Topics

- create (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm)
- Create or Clone a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm)
- Update a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_patch.htm)
