---
title: "updateRecommendationDefinitionPhotoWithAttributes(communityId,
      recommendationDefinitionId, photo, fileUpload)"
domain: apex-reference
topic: updaterecommendationdefinitionphotowithattributescommunityid-recommendationdefin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.702Z
keywords: [updateRecommendationDefinitionPhotoWithAttributes, communityId, recommendationDefinitionId, photo, fileUpload, Update, custom, recommendation, definition, file, hasn’t, uploaded, requires, cropping., API, Version, Requires, Chatter, Signature, Parameters]
---

# updateRecommendationDefinitionPhotoWithAttributes(communityId,
      recommendationDefinitionId, photo, fileUpload)

> Update a custom recommendation definition photo with a file that
      hasn’t been uploaded and requires cropping.

### updateRecommendationDefinitionPhotoWithAttributes(communityId, recommendationDefinitionId, photo, fileUpload)

Update a custom recommendation definition photo with a file that hasn’t been uploaded and requires cropping.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo updateRecommendationDefinitionPhotoWithAttributes(String communityId, String recommendationDefinitionId, ConnectApi.PhotoInput photo, ConnectApi.BinaryInput fileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationDefinitionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation definition.

photo

Type: [ConnectApi.PhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm#apex_connectapi_input_PhotoInput "Specify how to crop a photo that has already been uploaded.")

A ConnectApi.PhotoInput object specifying the cropping parameters.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm#apex_connectapi_output_photo "Profile photo.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.