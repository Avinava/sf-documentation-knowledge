---
title: "Update and Crop a Group Photo"
domain: chatterapi
topic: update-and-crop-a-group-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:24.395Z
estimatedTokens: 272
keywords: [Crop, Group, Photo, Chatter]
---

> Update and crop a Chatter group photo.

# Update and Crop a Group Photo

Update and crop a Chatter group photo.

This example crops an existing photo (a photo that has already been uploaded). You can also upload and crop a photo. To upload a new photo, use a multipart/form-data request. See [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

[/chatter/groups/groupId/photo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupPhoto.htm "The photo for the specified group. Get, post, crop, and delete the photo.")

HTTP method

POST

Request body

[Photo Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_photo_input.htm "Describes a photo input.")

Request body example

```

```

Request parameters

cropSize, cropX, cropY, fileId

Request parameter example

```

```

Returns

[Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm "Photo.")

#### See Also

-   [Update and Crop a User Photo](atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_user_photo.htm "Update and crop a user photo.")

## Code Examples

```
{   "cropSize" : "240",
    "cropX" : "20",
    "cropY" : "20",
    "fileId" : "069D00000001IOh"
}
```

```
/services/data/v66.0/chatter/groups/0F9300000008ORJ
/photo?cropSize=240&cropX=20&cropY=20&fileId=069D00000001IOh
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- /chatter/groups/groupId/photo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups_GroupPhoto.htm)
- Photo
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_photo_input.htm)
- Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm)
- Update and Crop a User Photo (atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_user_photo.htm)
