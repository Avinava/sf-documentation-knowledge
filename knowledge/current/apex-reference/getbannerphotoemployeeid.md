---
title: "getBannerPhoto(employeeId)"
domain: apex-reference
topic: getbannerphotoemployeeid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.096Z
keywords: [getBannerPhoto, employeeId, Get, employee’s, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getBannerPhoto(employeeId)

> Get an employee’s banner photo.

### getBannerPhoto(employeeId)

Get an employee’s banner photo.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BannerPhoto getBannerPhoto(String employeeId)

#### Parameters

employeeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the employee.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")