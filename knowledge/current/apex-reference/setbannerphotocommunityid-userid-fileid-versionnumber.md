---
title: "setBannerPhoto(communityId, userId, fileId,
      versionNumber)"
domain: apex-reference
topic: setbannerphotocommunityid-userid-fileid-versionnumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [setBannerPhoto, communityId, userId, fileId, versionNumber, Set, uploaded, file, user’s, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setBannerPhoto(communityId, userId, fileId,
      versionNumber)

> Set an uploaded file as a user’s banner photo.

### setBannerPhoto(communityId, userId, fileId, versionNumber)

Set an uploaded file as a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto setBannerPhoto(String communityId, String userId, String fileId, Integer versionNumber)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the uploaded file to use as the user banner. The key prefix must be 069, and the image must be smaller than 8 MB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the file. Specify an existing version number or, to get the latest version, specify null.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.