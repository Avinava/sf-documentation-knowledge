---
title: "FieldService Class"
domain: apex-reference
topic: fieldservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.193Z
estimatedTokens: 724
namespace: ConnectApi
keywords: [FieldService, Preview, create, shifts, pattern., createShiftsFromPattern, shiftsFromPatternInput, shiftPatternId, API, Version, Requires, Chatter, previewShiftsFromPattern]
---

# FieldService Class

> Preview and create shifts from a pattern.

**Namespace:** `ConnectApi`

# FieldService Class

Preview and create shifts from a pattern.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## FieldService Methods

These methods are for FieldService. All methods are static.

-   **[createShiftsFromPattern(shiftsFromPatternInput, shiftPatternId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FieldService_static_methods.htm#apex_ConnectAPI_FieldService_newShiftsFromPattern_2)**
    Create up to 2,000 shifts from a pattern.
-   **[previewShiftsFromPattern(shiftsFromPatternInput, shiftPatternId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FieldService_static_methods.htm#apex_ConnectAPI_FieldService_previewShiftsFromPattern_1)**
    Preview up to 2,000 shifts from a pattern.

### createShiftsFromPattern(shiftsFromPatternInput, shiftPatternId)

Create up to 2,000 shifts from a pattern.

#### API Version

51.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ShiftsFromPattern createShiftsFromPattern(ConnectApi.ShiftsFromPatternInput shiftsFromPatternInput, String shiftPatternId)

#### Parameters

shiftsFromPatternInput

Type: [ConnectApi.ShiftsFromPatternInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_new_shifts_from_pattern.htm "Shifts from a pattern.")

A ConnectApi.ShiftsFromPatternInput object providing the pattern.

shiftPatternId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the shift pattern.

#### Return Value

Type: [ConnectApi.ShiftsFromPattern](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_new_shifts_from_pattern.htm "Shifts created from a pattern.")

### previewShiftsFromPattern(shiftsFromPatternInput, shiftPatternId)

Preview up to 2,000 shifts from a pattern.

#### API Version

51.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ShiftsFromPattern previewShiftsFromPattern(ConnectApi.ShiftsFromPatternInput shiftsFromPatternInput, String shiftPatternId)

#### Parameters

shiftsFromPatternInput

Type: [ConnectApi.ShiftsFromPatternInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_new_shifts_from_pattern.htm "Shifts from a pattern.")

A ConnectApi.ShiftsFromPatternInput object providing the pattern.

shiftPatternId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the shift pattern.

#### Return Value

Type: [ConnectApi.ShiftsFromPattern](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_new_shifts_from_pattern.htm "Shifts created from a pattern.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createShiftsFromPattern(shiftsFromPatternInput, shiftPatternId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FieldService_static_methods.htm)
- previewShiftsFromPattern(shiftsFromPatternInput, shiftPatternId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_FieldService_static_methods.htm)
- ConnectApi.ShiftsFromPatternInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_new_shifts_from_pattern.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ShiftsFromPattern (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_new_shifts_from_pattern.htm)
