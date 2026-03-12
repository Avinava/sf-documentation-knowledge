---
title: "Employee Banner Photo"
domain: chatterapi
topic: employee-banner-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.952Z
estimatedTokens: 799
keywords: [Employee, Banner, Photo, upload, crop]
---

# Employee Banner Photo

> Get, upload and crop, and delete an employee banner
    photo.

# Employee Banner Photo

Get, upload and crop, and delete an employee banner photo.

To use an image from the Files page as the employee banner photo, pass the file ID in the request body or the request parameters.

To upload a binary file as the employee banner photo, send it in a multipart/form-data message. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

```

```

Available version

51.0

HTTP methods

GET, POST, DELETE

Request body for POST

Root XML tag

<bannerPhoto>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cropHeight | Integer | Height of the crop rectangle in pixels. | Optional | 36.0 |
| cropWidth | Integer | Width of the crop rectangle in pixels. | Optional | 36.0 |
| cropX | Integer | X position of the crop rectangle from the left edge of the image in pixels. Top left is position (0,0). | Optional | 36.0 |
| cropY | Integer | Y position of the crop rectangle from the top edge of the image in pixels. Top left is position (0,0). | Optional | 36.0 |
| fileId | String | 18 character ID of an existing file. The key prefix must be 069 and the file must be an image and be smaller than 2 GB.NoteImages uploaded on the Group page and on the User page don’t have file IDs and therefore can’t be used. | Required to use an existing file | 36.0 |
| versionNumber | Integer | Version number of an existing file. If not provided, the latest version is used. | Optional | 36.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cropHeight | Integer | Height of the crop rectangle in pixels. | Optional | 51.0 |
| cropWidth | Integer | Width of the crop rectangle in pixels. | Optional | 51.0 |
| cropX | Integer | X position of the crop rectangle from the left edge of the image in pixels. Top left is position (0,0). | Optional | 51.0 |
| cropY | Integer | Y position of the crop rectangle from the top edge of the image in pixels. Top left is position (0,0). | Optional | 51.0 |
| fileId | String | 18 character ID of an existing file. The key prefix must be 069 and the file must be an image and be smaller than 2 GB. | Required to use an existing file | 51.0 |
| versionNumber | Integer | Version number of an existing file. If not provided, the latest version is used. | Optional | 51.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Photos are processed asynchronously and may not be visible right away.

Response body for GET and POST

[Banner Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_photo.htm "A banner photo.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/employee-profiles/employeeId/banner-photo
```

```
{   "cropHeight" : "120",
    "cropWidth" : "240",
    "fileId" : "069D00000001IOh"
}
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Banner Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_photo.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
