---
title: "ConnectApi.BannerPhotoInput"
domain: apex-reference
topic: connectapibannerphotoinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.649Z
estimatedTokens: 252
keywords: [ConnectApi.BannerPhotoInput, banner, photo]
---

# ConnectApi.BannerPhotoInput

> A banner photo.

# ConnectApi.BannerPhotoInput

A banner photo.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cropHeight | Integer | Height of the crop rectangle in pixels. | Optional | 36.0 |
| cropWidth | Integer | Width of the crop rectangle in pixels. | Optional | 36.0 |
| cropX | Integer | X position of the crop rectangle from the left edge of the image in pixels. Top left is position (0,0). | Optional | 36.0 |
| cropY | Integer | Y position of the crop rectangle from the top edge of the image in pixels. Top left is position (0,0). | Optional | 36.0 |
| fileId | String | 18 character ID of an existing file. The key prefix must be 069 and the file must be an image and be smaller than 2 GB.NoteImages uploaded on the Group page and on the User page don’t have file IDs and therefore can’t be used. | Required | 36.0 |
| versionNumber | Integer | Version number of an existing file. If not provided, the latest version is used. | Optional | 36.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
