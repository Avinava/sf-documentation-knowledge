---
title: "setPhoto(communityId, groupId, fileId,
            versionNumber)"
domain: apex-reference
topic: setphotocommunityid-groupid-fileid-versionnumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [setPhoto, communityId, groupId, fileId, versionNumber, Set, uploaded, file, group, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Sample]
---

# setPhoto(communityId, groupId, fileId,
            versionNumber)

> Set an uploaded file as the group photo.

### setPhoto(communityId, groupId, fileId, versionNumber)

Set an uploaded file as the group photo.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhoto(String communityId, String groupId, String fileId, Integer versionNumber)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a file already uploaded. The key prefix must be 069, and the file must be an image that is smaller than 2 GB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the existing file. Specify either an existing version number or, to get the latest version, specify null.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

#### Sample: Updating a Group Photo with an Existing File

When a group is created, it doesn’t have a group photo. You can set an existing photo that has already been uploaded to Salesforce as the group photo. The key prefix must be 069 and the file size must be less than 2 GB.

```

```