---
title: "setPhotoWithAttributes(employeeId, photo,
    fileUpload)"
domain: apex-reference
topic: setphotowithattributesemployeeid-photo-fileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.096Z
keywords: [setPhotoWithAttributes, employeeId, photo, fileUpload, Set, crop, file, hasn’t, uploaded, employee’s, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setPhotoWithAttributes(employeeId, photo,
    fileUpload)

> Set and crop a file that hasn’t been uploaded as an employee’s photo.

### setPhotoWithAttributes(employeeId, photo, fileUpload)

Set and crop a file that hasn’t been uploaded as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Photo setPhotoWithAttributes(String employeeId, ConnectApi.PhotoInput photo, ConnectApi.BinaryInput fileUpload)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

photo

Type: [ConnectApi.PhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm "Specify how to crop a photo that has already been uploaded.")

A ConnectApi.PhotoInput object specifying the cropping parameters.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.