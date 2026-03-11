---
title: "setPhoto(communityId, userId, fileId,
    versionNumber)"
domain: apex-reference
topic: setphotocommunityid-userid-fileid-versionnumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [setPhoto, communityId, userId, fileId, versionNumber, Set, uploaded, file, user’s, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setPhoto(communityId, userId, fileId,
    versionNumber)

> Set an uploaded file as a user’s photo.

### setPhoto(communityId, userId, fileId, versionNumber)

Set an uploaded file as a user’s photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhoto(String communityId, String userId, String fileId, Integer versionNumber)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an uploaded file. The file must be an image, and be smaller than 2 GB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the existing file. Specify either an existing version number, or null to get the latest version.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.