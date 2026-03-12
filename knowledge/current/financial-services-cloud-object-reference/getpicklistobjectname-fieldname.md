---
title: "getPicklist(objectName, fieldName)"
domain: financial-services-cloud-object-reference
topic: getpicklistobjectname-fieldname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.106Z
estimatedTokens: 128
keywords: [getPicklist, objectName, fieldName, accepts, picklist, API, Version]
---

# getPicklist(objectName, fieldName)

> This method accepts an object name and picklist field and returns the picklist
    values.

# getPicklist(objectName, fieldName)

This method accepts an object name and picklist field and returns the picklist values.

## API Version

60.0

## Signature

public static List<Map<String, String\>> getPicklist(String objectName, String fieldName)

## Parameters

objectName

Type: String

The name of the object that contains the picklist field.

fieldName

Type: String

The name of the picklist field.

## Return Value

Type: List<Map<String, String>>

Returns the values of the specified picklist field.
