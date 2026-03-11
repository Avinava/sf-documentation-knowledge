---
title: "setPhotoWithAttributes(communityId, userId,
    photo)"
domain: apex-reference
topic: setphotowithattributescommunityid-userid-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [setPhotoWithAttributes, communityId, userId, photo, Set, crop, uploaded, file, user’s, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setPhotoWithAttributes(communityId, userId,
    photo)

> Set and crop an uploaded file as a user’s photo.

### setPhotoWithAttributes(communityId, userId, photo)

Set and crop an uploaded file as a user’s photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhotoWithAttributes(String communityId, String userId, ConnectApi.PhotoInput photo)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

photo

Type: [ConnectApi.PhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm "Specify how to crop a photo that has already been uploaded.")

A ConnectApi.PhotoInput object specifying the file ID, version number, and cropping parameters.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.