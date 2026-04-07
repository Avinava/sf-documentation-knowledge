---
title: "Update and Crop a User Photo"
domain: chatterapi
topic: update-and-crop-a-user-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.391Z
estimatedTokens: 279
keywords: [Crop, User, Photo]
---

# Update and Crop a User Photo

> Update and crop a user photo.

# Update and Crop a User Photo

Update and crop a user photo.

This example crops an existing photo (a photo that has already been uploaded). You can also upload and crop a photo. To upload a new photo, use a multipart/form-data request. See [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

[/connect/user-profiles/userId/photo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_user_profiles_photo.htm#connect_resources_user_profiles_photo "The user profile photo. Get, post, and crop the photo.")

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

-   [Update and Crop a Group Photo](atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_group_photo.htm "Update and crop a Chatter group photo.")

## Code Examples

```
{   "cropSize" : "240",
    "cropX" : "20",
    "cropY" : "20",
    "fileId" : "069D00000001IOh"
}
```

```
/services/data/v66.0/connect/user-profiles
/me/photo?cropSize=240&cropX=20&cropY=20&fileId=069D00000001IOh
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- /connect/user-profiles/userId/photo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_user_profiles_photo.htm)
- Photo
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_photo_input.htm)
- Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm)
- Update and Crop a Group Photo (atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_group_photo.htm)
