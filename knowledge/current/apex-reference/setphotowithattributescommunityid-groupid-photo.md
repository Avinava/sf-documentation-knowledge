---
title: "setPhotoWithAttributes(communityId, groupId,
  photo)"
domain: apex-reference
topic: setphotowithattributescommunityid-groupid-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [setPhotoWithAttributes, communityId, groupId, photo, Set, crop, uploaded, file, group, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setPhotoWithAttributes(communityId, groupId,
  photo)

> Set and crop an uploaded file as the group photo.

### setPhotoWithAttributes(communityId, groupId, photo)

Set and crop an uploaded file as the group photo.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhotoWithAttributes(String communityId, String groupId, ConnectApi.PhotoInput photo)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

photo

Type: [ConnectApi.PhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm "Specify how to crop a photo that has already been uploaded.")

A ConnectApi.PhotoInput object that specifies the ID and version of the file, and how to crop the file.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.