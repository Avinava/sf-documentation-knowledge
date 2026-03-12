---
title: "addFields(fieldNames)"
domain: pages
topic: addfieldsfieldnames
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.525Z
estimatedTokens: 229
keywords: [addFields, fieldNames, Visualforce, loaded, accessible, referenced, markup, adds, controller, explicitly, access, well, Usage]
---

# addFields(fieldNames)

> When a Visualforce page is
  loaded, the fields accessible to the page are based on the fields referenced in the Visualforce markup. This method adds a
  reference to each field specified in fieldNames so that
  the controller can explicitly access those fields as well.

# addFields(fieldNames)

When a Visualforce page is loaded, the fields accessible to the page are based on the fields referenced in the Visualforce markup. This method adds a reference to each field specified in fieldNames so that the controller can explicitly access those fields as well.

## Signature

public Void addFields(List<String\> fieldNames)

## Parameters

fieldNames

Type: List<String>

## Return Value

Type: Void

## Usage

This method should be called before a record has been loaded—typically, it's called by the controller's constructor. If this method is called outside of the constructor, you must use the reset() method before calling addFields().

The strings in fieldNames can either be the API name of a field, such as AccountId, or they can be explicit relationships to fields, such as something\_\_r.myField\_\_c.

This method is only for controllers used by dynamicVisualforce bindings.
