---
title: "ConnectApi.PhotoInput"
domain: apex-reference
topic: connectapiphotoinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.172Z
estimatedTokens: 688
keywords: [ConnectApi.PhotoInput, Specify, how, crop, photo, already, uploaded.]
---

# ConnectApi.PhotoInput

> Specify how to crop a photo that has already been uploaded.

# ConnectApi.PhotoInput

Specify how to crop a photo that has already been uploaded.

| Property | Type | Description | Available version |
| --- | --- | --- | --- |
| cropSize | Integer | The length, in pixels, of any edge of the crop square. | 29.0 |
| cropX | Integer | The position X, in pixels, from the left edge of the image to the start of the crop square. Top left is position (0,0). | 29.0 |
| cropY | Integer | The position Y, in pixels, from the top edge of the image to the start of the crop square. Top left is position (0,0). | 29.0 |
| fileId | String | 18 character ID of an existing file. The key prefix must be 069 and the file must be an image and be smaller than 2 GB.NoteImages uploaded on the Group page and on the User page don’t have file IDs and therefore can’t be used. | 25.0 |
| versionNumber | Integer | Version number of the existing content. If not provided, the latest version is used. | 25.0 |

#### See Also

-   [setPhotoWithAttributes(communityId, groupId, photo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setPhotoWithAttributes "Set and crop an uploaded file as the group photo.")

-   [setPhotoWithAttributes(communityId, groupId, photo, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setPhotoWithAttributes_2 "Set and crop a file that hasn’t been uploaded as the group photo.")

-   [updateRecommendationDefinitionPhotoWithAttributes(communityId, recommendationDefinitionId, photo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateRecommendationDefinitionPhotoWithAttributes_5 "Update a custom recommendation definition photo with an uploaded file that requires cropping.")

-   [updateRecommendationDefinitionPhotoWithAttributes(communityId, recommendationDefinitionId, photo, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_updateRecommendationDefinitionPhotoWithAttributes_6 "Update a custom recommendation definition photo with a file that hasn’t been uploaded and requires cropping.")

-   [setPhotoWithAttributes(communityId, userId, photo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setPhotoWithAttributes "Set and crop an uploaded file as a user’s photo.")

-   [setPhotoWithAttributes(communityId, userId, photo, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm#apex_ConnectAPI_UserProfiles_setPhotoWithAttributes_2 "Set and crop a file that hasn’t been uploaded as a user’s photo.")

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- setPhotoWithAttributes(communityId, groupId, photo) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- setPhotoWithAttributes(communityId, groupId, photo, fileUpload) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- updateRecommendationDefinitionPhotoWithAttributes(communityId, recommendationDefinitionId, photo) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm)
- updateRecommendationDefinitionPhotoWithAttributes(communityId, recommendationDefinitionId, photo, fileUpload) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm)
- setPhotoWithAttributes(communityId, userId, photo) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm)
- setPhotoWithAttributes(communityId, userId, photo, fileUpload) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_UserProfiles_static_methods.htm)
