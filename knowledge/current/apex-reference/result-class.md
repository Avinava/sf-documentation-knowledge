---
title: "Result Class"
domain: apex-reference
topic: result-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.894Z
estimatedTokens: 431
namespace: DataWeave
keywords: [Result, retrieve, data, transformed, Script, getValue, getValueAsString]
---

# Result Class

> Contains methods to retrieve data that was transformed using Script class
        methods.

**Namespace:** `DataWeave`

# Result Class

Contains methods to retrieve data that was transformed using Script class methods.

## Namespace

[DataWeave](atlas.en-us.apexref.meta/apexref/apex_namespace_dataweave.htm "The DataWeave namespace provides classes and methods to support the invocation of DataWeave scripts from Apex.")

## Example

See [Script Class](atlas.en-us.apexref.meta/apexref/apex_class_dataweave_Script.htm#apex_class_dataweave_Script "Contains the createScript() method to load DataWeave scripts and the execute() method to obtain script output in a DataWeave.Result object.") for an example to run a DataWeave script from Apex and retrieve the resulting script output.

-   **[Result Methods](atlas.en-us.apexref.meta/apexref/apex_class_dataweave_Result.htm#apex_dataweave_Result_methods)**


## Result Methods

The following are methods for Result.

-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_dataweave_Result.htm#apex_dataweave_Result_getValue)**
    Returns the result of a DataWeave script execution as an object.
-   **[getValueAsString()](atlas.en-us.apexref.meta/apexref/apex_class_dataweave_Result.htm#apex_dataweave_Result_getValueAsString)**
    Returns the result of a DataWeave script execution as a string value.

### getValue()

Returns the result of a DataWeave script execution as an object.

#### Signature

public Object getValue()

#### Return Value

Type: Object

### getValueAsString()

Returns the result of a DataWeave script execution as a string value.

#### Signature

public String getValueAsString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- DataWeave (atlas.en-us.apexref.meta/apexref/apex_namespace_dataweave.htm)
- Script Class (atlas.en-us.apexref.meta/apexref/apex_class_dataweave_Script.htm)
- Result Methods (atlas.en-us.apexref.meta/apexref/apex_class_dataweave_Result.htm)
- getValue() (atlas.en-us.apexref.meta/apexref/apex_class_dataweave_Result.htm)
- getValueAsString() (atlas.en-us.apexref.meta/apexref/apex_class_dataweave_Result.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
