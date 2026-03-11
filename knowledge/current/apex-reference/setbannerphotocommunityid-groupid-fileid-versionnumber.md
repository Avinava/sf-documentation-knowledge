---
title: "setBannerPhoto(communityId, groupId, fileId,
      versionNumber)"
domain: apex-reference
topic: setbannerphotocommunityid-groupid-fileid-versionnumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [setBannerPhoto, communityId, groupId, fileId, versionNumber, Set, uploaded, file, group, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setBannerPhoto(communityId, groupId, fileId,
      versionNumber)

> Set an uploaded file as the group banner photo.

### setBannerPhoto(communityId, groupId, fileId, versionNumber)

Set an uploaded file as the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto setBannerPhoto(String communityId, String groupId, String fileId, Integer versionNumber)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the group.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the already uploaded file. The key prefix must be 069, and the image must be smaller than 8 MB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the existing file. Specify either an existing version number or, to get the latest version, specify null.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.