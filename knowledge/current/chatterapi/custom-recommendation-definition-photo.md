---
title: "Custom Recommendation Definition Photo"
domain: chatterapi
topic: custom-recommendation-definition-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.349Z
estimatedTokens: 995
keywords: [Custom, Recommendation, Definition, Photo, upload, modify]
---

# Custom Recommendation Definition Photo

> Get information about, upload, modify, or delete the photo for a
      custom recommendation definition.

# Custom Recommendation Definition Photo

Get information about, upload, modify, or delete the photo for a custom recommendation definition.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

To use an existing file as the recommendation definition photo, pass the file ID in the fileId property of the request body or in the fileId request parameter.

To upload a binary file as a recommendation definition photo, you must send it in a multipart/form-data message. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

```

```

Available version

33.0

Requires Chatter

Yes

HTTP methods

GET, PUT, DELETE

Request body for PUT

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

Request parameters for PUT

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

Response body for GET and PUT

[Photo](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm "Photo.")

#### See Also

-   [Create and Schedule Custom Recommendations with Audiences](atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm "Create and schedule custom recommendations with audiences.")

## Code Examples

```
/connect/recommendation-definitions/recommendationDefinitionId/photo
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
- Create and Schedule Custom Recommendations with Audiences (atlas.en-us.chatterapi.meta/chatterapi/quickreference_create_custom_rec.htm)
