---
title: "Photo Input"
domain: chatterapi
topic: photo-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.475Z
estimatedTokens: 428
keywords: [Photo, Input]
---

# Photo Input

> Describes a photo input.

# Photo Input

Describes a photo input.

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

#### See Also

-   [Update and Crop a Group Photo](atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_group_photo.htm "Update and crop a Chatter group photo.")

-   [Update and Crop a User Photo](atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_user_photo.htm "Update and crop a user photo.")

-   [Create and Schedule Custom Recommendations with Audiences](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm "Create and schedule custom recommendations with audiences.")

## Code Examples

```
{   "cropSize" : "120",
    "cropX" : "0",
    "cropY" : "0",
    "fileId" : "069D00000001IOh"
}
```

## Related Topics

- Update and Crop a Group Photo (atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_group_photo.htm)
- Update and Crop a User Photo (atlas.en-us.chatterapi.meta/chatterapi/quickreference_update_crop_user_photo.htm)
- Create and Schedule Custom Recommendations with Audiences (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm)
