---
title: "addEntityFields(fieldNames)"
domain: apex-reference
topic: addentityfieldsfieldnames
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.006Z
estimatedTokens: 552
keywords: [addEntityFields, fieldNames, Adds, signed, Record, component, appears, Visualforce, that’s, placed, Usage]
---

# addEntityFields(fieldNames)

> Adds a set of fields to the list of object fields that are returned in the signed
  request Record object when the component appears on a Visualforce page that’s placed on an
  object.

# addEntityFields(fieldNames)

Adds a set of fields to the list of object fields that are returned in the signed request Record object when the component appears on a Visualforce page that’s placed on an object.

## Signature

public void addEntityFields(Set<String\> fieldNames)

## Parameters

fieldNames

Type: [SET](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The set of object field names that you need to add to the list of returned fields. If an item in the set is ‘\*’, all fields that the user has permission to view are added.

## Return Value

Type: Void

## Usage

When you use the <apex:canvasApp\> component to display a canvas app on a Visualforce page, and that page is associated with an object (placed on the page layout, for example), you can specify fields to be returned from the related object. See the [Canvas Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/ "HTML (New Window)") for more information on the Record object.

Use addEntityFields() to add a set of one or more fields to the list of object fields that are returned in the signed request Record object. By default the list of fields includes ID. You can add fields by name or add all fields that the user has permission to view by adding a set that includes ‘\*’ as one of the strings.

You can inspect the configured list of fields by using [Canvas.EnvironmentContext.getEntityFields()](atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_getEntityFields.htm "Retrieves the list of object fields that are returned in the signed request Record object when the component appears on a Visualforce page that’s placed on an object.").

## Example

This example adds the Name, BillingAddress, and YearStarted fields to the list of object fields. This example assumes that the canvas app will appear in a Visualforce page that’s associated with the Account page layout.

```

```

## Code Examples

```
Canvas.EnvironmentContext env = renderContext.getEnvironmentContext();

// Add Name, BillingAddress and YearStarted to fields (assumes we'll run from the Account detail page)
Set<String> fields = new Set<String>{'Name','BillingAddress','YearStarted'};
env.addEntityFields(fields);
```

## Related Topics

- SET (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Canvas.EnvironmentContext.getEntityFields() (atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_getEntityFields.htm)
