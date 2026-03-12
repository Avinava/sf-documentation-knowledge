---
title: "User Profiles Photo"
domain: chatterapi
topic: user-profiles-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.814Z
estimatedTokens: 991
keywords: [User, Profiles, Photo, profile, post, crop]
---

# User Profiles Photo

> The user profile photo. Get, post, and crop the
    photo.

# User Profiles Photo

The user profile photo. Get, post, and crop the photo.

To use an image from the Files page, pass the file ID in the fileId property of the request body or in the fileId request parameter. Images uploaded on the User page and on the Group page don’t have a file ID and can’t be used as the fileId.

To upload a binary file as the user photo, send it in a multipart/form-data message. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

To display user profile photos in a feed, cache the user photos. Then use the photoVersionId property of the Photo response body to determine when to update a photo. This technique helps you avoid running over limits and may improve mobile client performance.

Resource

```

```

```

```

Available version

35.0

Requires Chatter

Yes

HTTP methods

GET, DELETE, or POST

Response body for GET

[Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm#connect_responses_pictures "Photo.")

Request body for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cropSize | Integer | The length, in pixels, of any edge of the crop square. | Required to crop an uploaded file or an existing file. | 35.0 |
| cropX | Integer | The position X, in pixels, from the left edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 35.0 |
| cropY | Integer | The position Y, in pixels, from the top edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 35.0 |
| fileId | String | 18–character ID of an existing file. The key prefix must be 069 and the file size must be less than 2 GB.NoteFiles uploaded on the Group page and on the User Profile page don’t have a file ID and can’t be posted or cropped. Files uploaded on the Files page have a file ID and can be posted and cropped. | Required to choose an existing file. | 35.0 |
| versionNumber | Integer | Version number of an existing file. If not provided, the latest version is used. | Optional | 35.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cropSize | Integer | The length, in pixels, of any edge of the crop square. | Required to crop an uploaded file or an existing file. | 35.0 |
| cropX | Integer | The position X, in pixels, from the left edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 35.0 |
| cropY | Integer | The position Y, in pixels, from the top edge of the image to the start of the crop square. Top left is position (0,0). | Required to crop an uploaded file or an existing file. | 35.0 |
| fileId | String | 18 character ID of an existing file. The key prefix must be 069 and the file size must be less than 2 GB.NoteFiles uploaded on the Group page and on the User Profile page don’t have a file ID and can’t be posted or cropped. Files uploaded on the Files page have a file ID and can be posted and cropped. | Required to choose an existing file. | 35.0 |
| versionNumber | Integer | Version number of the existing content. If not provided, the latest version is used. | Optional | 35.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Photos are processed asynchronously and may not be visible right away.

Response body for POST

[Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm#connect_responses_pictures "Photo.")

#### See Also

-   [Update and Crop a User Photo](atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_user_photo.htm "Update and crop a user photo.")

## Code Examples

```
/connect/user-profiles/userID/photo
```

```
/connect/communities/communityId/user-profiles/userID/photo
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm)
- Update and Crop a User Photo (atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_user_photo.htm)
