---
title: "setPhoto(communityId, groupId, fileUpload)"
domain: apex-reference
topic: setphotocommunityid-groupid-fileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [setPhoto, communityId, groupId, fileUpload, Set, file, hasn’t, uploaded, group, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Sample]
---

# setPhoto(communityId, groupId, fileUpload)

> Set a file that hasn’t been uploaded as the group
    photo.

### setPhoto(communityId, groupId, fileUpload)

Set a file that hasn’t been uploaded as the group photo.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhoto(String communityId, String groupId, ConnectApi.BinaryInput fileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

#### Sample: Uploading a New File and Using It as a Group Photo

When a group is created, it doesn’t have a group photo. You can upload a photo and set it as the group photo.

```

```