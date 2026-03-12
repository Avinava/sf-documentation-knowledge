---
title: "Employee Photo"
domain: chatterapi
topic: employee-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.960Z
estimatedTokens: 900
keywords: [Employee, Photo, upload, crop]
---

# Employee Photo

> Get, upload and crop, and delete an employee photo.

# Employee Photo

Get, upload and crop, and delete an employee photo.

To use an image from the Files page as the employee photo, pass the file ID in the request body or the request parameters.

To upload a binary file as the employee photo, send it in a multipart/form-data message. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

To display employee profile photos in a feed, cache the employee photos. Then use the photoVersionId property of the Photo response body to determine when to update a photo. This technique helps you avoid running over limits and may improve mobile client performance.

Resource

```

```

Available version

51.0

HTTP methods

GET, POST, DELETE

Request body for POST

Root XML tag

<photo>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cropSize | Integer | The length, in pixels, of any edge of the crop square. | Required to crop an uploaded file or an existing file. | 29.0 |
| cropX | Integer | The position X, in pixels, from the left edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 29.0 |
| cropY | Integer | The position Y, in pixels, from the top edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 29.0 |
| fileId | String | 18 character ID of an existing file. The key prefix must be 069 and the file must be an image and be smaller than 2 GB.NoteImages uploaded on the Group page and on the User page don’t have file IDs and therefore can’t be used. | Required to choose an existing file. | 25.0 |
| versionNumber | Integer | Version number of an existing file. If not provided, the latest version is used. | Optional | 25.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cropSize | Integer | The length, in pixels, of any edge of the crop square. | Required to crop an uploaded file or an existing file. | 51.0 |
| cropX | Integer | The position X, in pixels, from the left edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 51.0 |
| cropY | Integer | The position Y, in pixels, from the top edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 51.0 |
| fileId | String | ID of an existing file. The file must be an image and be smaller than 2 GB. | Required to choose an existing file. | 51.0 |
| versionNumber | Integer | Version number of an existing file. If not provided, the latest version is used. | Optional | 51.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Photos are processed asynchronously and may not be visible right away.

Response body for GET and POST

[Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm#connect_responses_pictures "Photo.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/employee-profiles/employeeId/photo
```

```
{   "cropSize" : "120",
    "cropX" : "0",
    "cropY" : "0",
    "fileId" : "069D00000001IOh"
}
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
