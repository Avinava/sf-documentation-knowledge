---
title: "setBannerPhoto(employeeId, fileId,
    versionNumber)"
domain: apex-reference
topic: setbannerphotoemployeeid-fileid-versionnumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.096Z
keywords: [setBannerPhoto, employeeId, fileId, versionNumber, Set, uploaded, file, employee’s, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setBannerPhoto(employeeId, fileId,
    versionNumber)

> Set an uploaded file as an employee’s banner photo.

### setBannerPhoto(employeeId, fileId, versionNumber)

Set an uploaded file as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BannerPhoto setBannerPhoto(String employeeId, String fileId, Integer versionNumber)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the uploaded file to use as the employee banner photo. The file must be an image and be smaller than 2 GB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the file. Specify an existing version number or, to get the latest version, specify null.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")