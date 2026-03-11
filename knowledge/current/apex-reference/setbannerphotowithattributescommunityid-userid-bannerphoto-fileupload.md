---
title: "setBannerPhotoWithAttributes(communityId, userId, bannerPhoto,
      fileUpload)"
domain: apex-reference
topic: setbannerphotowithattributescommunityid-userid-bannerphoto-fileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [setBannerPhotoWithAttributes, communityId, userId, bannerPhoto, fileUpload, Set, crop, file, hasn’t, uploaded, user’s, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# setBannerPhotoWithAttributes(communityId, userId, bannerPhoto,
      fileUpload)

> Set and crop a file that hasn’t been uploaded as a user’s banner
      photo.

### setBannerPhotoWithAttributes(communityId, userId, bannerPhoto, fileUpload)

Set and crop a file that hasn’t been uploaded as a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String communityId, String userId, ConnectApi.BannerPhotoInput bannerPhoto, ConnectApi.BinaryInput fileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user.

bannerPhoto

Type: [ConnectApi.BannerPhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_banner_photo.htm "A banner photo.")

A ConnectApi.BannerPhotoInput object specifying the cropping parameters.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.