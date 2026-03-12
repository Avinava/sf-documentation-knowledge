---
title: "User Profiles Banner Photo"
domain: chatterapi
topic: user-profiles-banner-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.804Z
estimatedTokens: 867
keywords: [User, Profiles, Banner, Photo]
---

# User Profiles Banner Photo

> Get, create, or delete the banner photo for a user.

# User Profiles Banner Photo

Get, create, or delete the banner photo for a user.

To use an image from the Files page as a user banner photo, pass the file ID in the fileId property of the request body or in the fileId request parameter. Images uploaded on the User Profile page don’t have a file ID and can’t be used as the fileId.

To upload a binary file as the user banner photo, send it in a multipart/form-data message. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

```

```

```

```

Available version

36.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, POST, DELETE

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

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cropHeight | Integer | The length of an edge in pixels of the crop rectangle. | Optional | 36.0 |
| cropWidth | Integer | The width of an edge in pixels of the crop rectangle. | Optional | 36.0 |
| cropX | Integer | The position X in pixels from the left edge of the image to start the crop square. Top left is position (0,0). | Optional | 36.0 |
| cropY | Integer | The position Y in pixels from the top edge of the image to start the crop square. Top left is position (0,0). | Optional | 36.0 |
| fileId | String | ID of an existing file. The key prefix must be 069 and the file size must be less than 8 MB.NoteImages uploaded on the Group page and on the User page don’t have file IDs and therefore can’t be used. | Required to use an existing file | 36.0 |
| versionNumber | Integer | Version number of an existing file. If not provided, the latest version is used. | Optional | 36.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Photos are processed asynchronously and may not be visible right away.

Response body for GET and POST

[Banner Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_photo.htm "A banner photo.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/user-profiles/userId/banner-photo
```

```
/connect/communities/communityId/user-profiles/userId/banner-photo
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
