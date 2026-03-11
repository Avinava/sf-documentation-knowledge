---
title: "setBannerPhotoWithAttributes(employeeId,
    bannerPhoto)"
domain: apex-reference
topic: setbannerphotowithattributesemployeeid-bannerphoto
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.096Z
keywords: [setBannerPhotoWithAttributes, employeeId, bannerPhoto, Set, crop, uploaded, file, employee’s, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setBannerPhotoWithAttributes(employeeId,
    bannerPhoto)

> Set and crop an uploaded file as an employee’s banner photo.

### setBannerPhotoWithAttributes(employeeId, bannerPhoto)

Set and crop an uploaded file as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String employeeId, ConnectApi.BannerPhotoInput bannerPhoto)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

bannerPhoto

Type: [ConnectApi.BannerPhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_banner_photo.htm "A banner photo.")

A ConnectApi.BannerPhotoInput object that specifies the ID and version of the file, and how to crop the file.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.