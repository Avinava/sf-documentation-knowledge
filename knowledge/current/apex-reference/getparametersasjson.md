---
title: "getParametersAsJSON()"
domain: apex-reference
topic: getparametersasjson
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.358Z
estimatedTokens: 289
keywords: [getParametersAsJSON, Retrieves, current, custom, canvas, app., returned, JSON, string., Usage, Example]
---

# getParametersAsJSON()

> Retrieves the current custom parameters for the canvas app. Parameters are returned
        as a JSON string.

# getParametersAsJSON()

Retrieves the current custom parameters for the canvas app. Parameters are returned as a JSON string.

## Signature

public String getParametersAsJSON()

## Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Usage

Use this method to get the current custom parameters for the canvas app. The parameters are returned in a JSON string that can be de-serialized by using the [System.JSON.deserializeUntyped(jsonString)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_deserializeUntyped "Deserializes the specified JSON string into collections of primitive data types.") method.

Custom parameters can be modified by using the [Canvas.EnvironmentContext.setParametersAsJSON(jsonString)](atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_setParametersAsJSON.htm "Sets the custom parameters for the canvas app.") string.

## Example

This example gets the current custom parameters, de-serializes them into a map, and prints the results to the debug log.

```

```

## Code Examples

```apex
Canvas.EnvironmentContext env = renderContext.getEnvironmentContext();

// Get current custom params
Map<String, Object> currentParams = 
    (Map<String, Object>) JSON.deserializeUntyped(env.getParametersAsJSON());
System.debug('Environment Context custom paramters: ' + currentParams);
```

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- System.JSON.deserializeUntyped(jsonString) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- Canvas.EnvironmentContext.setParametersAsJSON(jsonString) (atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_setParametersAsJSON.htm)
