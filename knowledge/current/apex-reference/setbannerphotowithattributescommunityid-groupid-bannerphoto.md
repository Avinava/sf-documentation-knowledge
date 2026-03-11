---
title: "setBannerPhotoWithAttributes(communityId, groupId,
      bannerPhoto)"
domain: apex-reference
topic: setbannerphotowithattributescommunityid-groupid-bannerphoto
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [setBannerPhotoWithAttributes, communityId, groupId, bannerPhoto, Set, crop, uploaded, file, group, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setBannerPhotoWithAttributes(communityId, groupId,
      bannerPhoto)

> Set and crop an uploaded file as the group banner
    photo.

### setBannerPhotoWithAttributes(communityId, groupId, bannerPhoto)

Set and crop an uploaded file as the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String communityId, String groupId, ConnectApi.BannerPhotoInput bannerPhoto)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the group.

bannerPhoto

Type: [ConnectApi.BannerPhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_banner_photo.htm "A banner photo.")

A ConnectApi.BannerPhotoInput object that specifies the ID and version of the file, and how to crop the file.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.