---
title: "setPhoto(employeeId, fileId, versionNumber)"
domain: apex-reference
topic: setphotoemployeeid-fileid-versionnumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.096Z
keywords: [setPhoto, employeeId, fileId, versionNumber, Set, uploaded, file, employee’s, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setPhoto(employeeId, fileId, versionNumber)

> Set an uploaded file as an employee’s photo.

### setPhoto(employeeId, fileId, versionNumber)

Set an uploaded file as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Photo setPhoto(String employeeId, String fileId, Integer versionNumber)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the uploaded file to use as the employee photo. The file must be an image and be smaller than 2 GB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the file. Specify an existing version number or, to get the latest version, specify null.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.