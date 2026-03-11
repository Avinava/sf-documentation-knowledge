---
title: "getParametersAsJSON()"
domain: apex-reference
topic: getparametersasjson
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.122Z
keywords: [getParametersAsJSON, Signature, Return, Value, Usage, Example]
---

# getParametersAsJSON()

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