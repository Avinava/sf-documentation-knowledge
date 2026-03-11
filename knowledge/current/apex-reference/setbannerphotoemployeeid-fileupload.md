---
title: "setBannerPhoto(employeeId, fileUpload)"
domain: apex-reference
topic: setbannerphotoemployeeid-fileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.096Z
keywords: [setBannerPhoto, employeeId, fileUpload, Set, file, hasn’t, uploaded, employee’s, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setBannerPhoto(employeeId, fileUpload)

> Set a file that hasn’t been uploaded as an employee’s banner photo.

### setBannerPhoto(employeeId, fileUpload)

Set a file that hasn’t been uploaded as an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BannerPhoto setBannerPhoto(String employeeId, ConnectApi.BinaryInput fileUpload)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.