---
title: "addEntityField(fieldName)"
domain: apex-reference
topic: addentityfieldfieldname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.110Z
keywords: [addEntityField, fieldName, Signature, Parameters, Return, Value, Usage, Example]
---

# addEntityField(fieldName)

# addEntityField(fieldName)

Adds a field to the list of object fields that are returned in the signed request Record object when the component appears on a Visualforce page that’s placed on an object.

## Signature

public void addEntityField(String fieldName)

## Parameters

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The object field name that you need to add to the list of returned fields., Using ‘\*’ adds all fields that the user has permission to view.

## Return Value

Type: Void

## Usage

When you use the <apex:canvasApp\> component to display a canvas app on a Visualforce page, and that page is associated with an object (placed on the page layout, for example), you can specify fields to be returned from the related object. See the [Canvas Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/ "HTML (New Window)") for more information on the Record object.

Use addEntityField() to add a field to the list of object fields that are returned in the signed request Record object. By default the list of fields includes ID. You can add fields by name or add all fields that the user has permission to view by calling addEntityField('\*').

You can inspect the configured list of fields by using [Canvas.EnvironmentContext.getEntityFields()](atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_getEntityFields.htm "Retrieves the list of object fields that are returned in the signed request Record object when the component appears on a Visualforce page that’s placed on an object.").

## Example

This example adds the Name and BillingAddress fields to the list of object fields. This example assumes the canvas app will appear in a Visualforce page that's associated with the Account page layout.

```

```