---
title: "setPhotoWithAttributes(employeeId, photo)"
domain: apex-reference
topic: setphotowithattributesemployeeid-photo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.096Z
keywords: [setPhotoWithAttributes, employeeId, photo, Set, crop, uploaded, file, employee’s, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setPhotoWithAttributes(employeeId, photo)

> Set and crop an uploaded file as an employee’s photo.

### setPhotoWithAttributes(employeeId, photo)

Set and crop an uploaded file as an employee’s photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Photo setPhotoWithAttributes(String employeeId, ConnectApi.PhotoInput photo)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

photo

Type: [ConnectApi.PhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm "Specify how to crop a photo that has already been uploaded.")

A ConnectApi.PhotoInput object specifying the file ID, version number, and cropping parameters.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

Photos are processed asynchronously and might not be visible right away.