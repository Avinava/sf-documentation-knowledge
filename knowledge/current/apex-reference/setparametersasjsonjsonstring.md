---
title: "setParametersAsJSON(jsonString)"
domain: apex-reference
topic: setparametersasjsonjsonstring
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.372Z
estimatedTokens: 408
keywords: [setParametersAsJSON, jsonString, custom, canvas, app., Usage, Example]
---

# setParametersAsJSON(jsonString)

> Sets the custom parameters for the canvas app.

# setParametersAsJSON(jsonString)

Sets the custom parameters for the canvas app.

## Signature

public void setParametersAsJSON(String jsonString)

## Parameters

jsonString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The custom parameters that you need to set, serialized into a JSON format string.

## Return Value

Type: Void

## Usage

Use this method to set the current custom parameters for the canvas app. The parameters must be provided in a JSON string. You can use the [System.JSON.serialize(objectToSerialize)](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_System_Json_serialize "Serializes Apex objects into JSON content.") method to serialize a map into a JSON string.

Setting the custom parameters will overwrite the custom parameters that are set for the current request. If you need to modify the current custom parameters, first get the current set of custom parameters by using [getParametersAsJSON()](atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_getParametersAsJSON.htm "Retrieves the current custom parameters for the canvas app. Parameters are returned as a JSON string."), modify the retrieved parameter set as needed, and then use this modified set in your call to setParametersAsJSON().

If the provided JSON string exceeds 32KB, a System.CanvasException will be thrown.

## Example

This example gets the current custom parameters, adds a new newCustomParam parameter with a value of ‘TESTVALUE’, and sets the current custom parameters.

```

```

## Code Examples

```apex
Canvas.EnvironmentContext env = renderContext.getEnvironmentContext();

// Get current custom params
Map<String, Object> previousParams = 
    (Map<String, Object>) JSON.deserializeUntyped(env.getParametersAsJSON());

// Add a new custom param
previousParams.put('newCustomParam','TESTVALUE');

// Now replace the parameters with the current parameters plus our new custom param
env.setParametersAsJSON(JSON.serialize(previousParams));
```

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- System.JSON.serialize(objectToSerialize) (atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm)
- getParametersAsJSON() (atlas.en-us.apexref.meta/apexref/apex_canvas_EnvironmentContext_getParametersAsJSON.htm)
