---
title: "Group Photo"
domain: chatterapi
topic: group-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.563Z
estimatedTokens: 925
keywords: [Group, Photo, post, crop]
---

# Group Photo

> The photo for the specified group. Get, post, crop, and
   delete the photo.

# Group Photo

The photo for the specified group. Get, post, crop, and delete the photo.

To use an image from the Files page as a group photo (existing content), pass the file ID in the fileId property of the request body or in the fileId request parameter. Images uploaded on the Group page don’t have a file ID and can’t be used as the fileId.

To upload a binary file as a group photo, you must send it in a multipart/form-data message. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

```

```

```

```

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET, POST, DELETE, or HEAD

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
| cropSize | Integer | The length, in pixels, of any edge of the crop square. | Required to crop an uploaded file or an existing file. | 29.0 |
| cropX | Integer | The position X, in pixels, from the left edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 29.0 |
| cropY | Integer | The position Y, in pixels, from the top edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 29.0 |
| fileId | String | 18 character ID of an existing file. The key prefix must be 069 and the file size must be less than 2 GB.NoteFiles uploaded on the Group page and on the User Profile page don’t have a file ID and can’t be posted or cropped. Files uploaded on the Files page have a file ID and can be posted and cropped. | Required to choose an existing file. | 25.0 |
| versionNumber | Integer | Version number of the existing content. If not provided, the latest version is used. | Optional | 25.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Photos are processed asynchronously and may not be visible right away.

Response body for GET or HEAD

[Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm "Photo.")

Response body for POST

[Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm "Photo.")

#### See Also

-   [Update and Crop a Group Photo](atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_group_photo.htm "Update and crop a Chatter group photo.")

## Code Examples

```
/chatter/groups/groupId/photo
```

```
/connect/communities/communityId/chatter/groups/groupId/photo
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
- Update and Crop a Group Photo (atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_group_photo.htm)
