---
title: "Banner Photo Input"
domain: chatterapi
topic: banner-photo-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.051Z
estimatedTokens: 271
keywords: [Banner, Photo, Input]
---

# Banner Photo Input

> A banner photo.

# Banner Photo Input

A banner photo.

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

## Code Examples

```
{   "cropHeight" : "120",
    "cropWidth" : "240",
    "fileId" : "069D00000001IOh"
}
```
