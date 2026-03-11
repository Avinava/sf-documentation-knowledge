---
title: "setPhoto(communityId, userId, fileUpload)"
domain: apex-reference
topic: setphotocommunityid-userid-fileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [setPhoto, communityId, userId, fileUpload, Set, file, hasn’t, uploaded, user’s, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setPhoto(communityId, userId, fileUpload)

> Set a file that hasn’t been uploaded as a user’s photo.

### setPhoto(communityId, userId, fileUpload)

Set a file that hasn’t been uploaded as a user’s photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhoto(String communityId, String userId, ConnectApi.BinaryInput fileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.