---
title: "updateRecommendationDefinitionPhoto(communityId,
      recommendationDefinitionId, fileId, versionNumber)"
domain: apex-reference
topic: updaterecommendationdefinitionphotocommunityid-recommendationdefinitionid-fileid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [updateRecommendationDefinitionPhoto, communityId, recommendationDefinitionId, fileId, versionNumber, Update, custom, recommendation, definition, photo, uploaded, file., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateRecommendationDefinitionPhoto(communityId,
      recommendationDefinitionId, fileId, versionNumber)

> Update a custom recommendation definition photo with an uploaded
      file.

### updateRecommendationDefinitionPhoto(communityId, recommendationDefinitionId, fileId, versionNumber)

Update a custom recommendation definition photo with an uploaded file.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo updateRecommendationDefinitionPhoto(String communityId, String recommendationDefinitionId, String fileId, Integer versionNumber)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationDefinitionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation definition.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a file already uploaded. The file must be an image, and be smaller than 2 GB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the existing file. Specify either an existing version number, or null to get the latest version.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm#apex_connectapi_output_photo "Profile photo.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.