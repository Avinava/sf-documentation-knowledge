---
title: "getEntityFields()"
domain: apex-reference
topic: getentityfields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.353Z
estimatedTokens: 508
keywords: [getEntityFields, Retrieves, list, fields, returned, signed, request, Record, component, appears, Visualforce, page, that’s, placed, object., Usage, Example]
---

# getEntityFields()

> Retrieves the list of object fields that are returned in the signed request Record
        object when the component appears on a Visualforce page that’s placed on an
        object.

# getEntityFields()

Retrieves the list of object fields that are returned in the signed request Record object when the component appears on a Visualforce page that’s placed on an object.

## Signature

public List<String\> getEntityFields()

## Return Value

Type: LIST<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

## Usage

When you use the <apex:canvasApp\> component to display a canvas app on a Visualforce page, and that page is associated with an object (placed on the page layout, for example), you can specify fields to be returned from the related object. See the [Canvas Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/ "HTML (New Window)") for more information on the Record object.

Use getEntityFields() to retrieve the list of object fields that are returned in the signed request Record object. By default the list of fields includes ID. The list of fields can be configured by using the [Canvas.EnvironmentContext.addEntityField(fieldName)](atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_addEntityField.htm "Adds a field to the list of object fields that are returned in the signed request Record object when the component appears on a Visualforce page that’s placed on an object.") or [Canvas.EnvironmentContext.addEntityFields(fieldNames)](atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_addEntityFields.htm "Adds a set of fields to the list of object fields that are returned in the signed request Record object when the component appears on a Visualforce page that’s placed on an object.") methods.

## Example

This example gets the current list of object fields and retrieves each item in the list, printing each field name to the debug log.

```

```

If the canvas app that’s using this lifecycle code was run from the detail page of an Account, the debug log output might look like:

```

```

## Code Examples

```apex
Canvas.EnvironmentContext env = renderContext.getEnvironmentContext();

List<String> entityFields = env.getEntityFields();
for (String fieldVal : entityFields) {
    System.debug('Environment Context entityField: ' + fieldVal);
}
```

```
Environment Context entityField: Id
```

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Canvas.EnvironmentContext.addEntityField(fieldName) (atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_addEntityField.htm)
- Canvas.EnvironmentContext.addEntityFields(fieldNames) (atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_addEntityFields.htm)
