---
title: "updateRecommendationDefinitionPhoto(communityId,
      recommendationDefinitionId, fileUpload)"
domain: apex-reference
topic: updaterecommendationdefinitionphotocommunityid-recommendationdefinitionid-fileup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [updateRecommendationDefinitionPhoto, communityId, recommendationDefinitionId, fileUpload, Update, custom, recommendation, definition, photo, file, hasn’t, uploaded., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateRecommendationDefinitionPhoto(communityId,
      recommendationDefinitionId, fileUpload)

> Update a custom recommendation definition photo with a file that
      hasn’t been uploaded.

### updateRecommendationDefinitionPhoto(communityId, recommendationDefinitionId, fileUpload)

Update a custom recommendation definition photo with a file that hasn’t been uploaded.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo updateRecommendationDefinitionPhoto(String communityId, String recommendationDefinitionId, ConnectApi.BinaryInput fileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationDefinitionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation definition.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm#apex_connectapi_output_photo "Profile photo.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.