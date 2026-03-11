---
title: "setBannerPhotoWithAttributes(communityId, userId,
      bannerPhoto)"
domain: apex-reference
topic: setbannerphotowithattributescommunityid-userid-bannerphoto
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [setBannerPhotoWithAttributes, communityId, userId, bannerPhoto, Set, crop, uploaded, file, user’s, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setBannerPhotoWithAttributes(communityId, userId,
      bannerPhoto)

> Set and crop an uploaded file as a user’s banner
    photo.

### setBannerPhotoWithAttributes(communityId, userId, bannerPhoto)

Set and crop an uploaded file as a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String communityId, String userId, ConnectApi.BannerPhotoInput bannerPhoto)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user.

bannerPhoto

Type: [ConnectApi.BannerPhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_banner_photo.htm "A banner photo.")

A ConnectApi.BannerPhotoInput object that specifies the ID and version of the file, and how to crop the file.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.