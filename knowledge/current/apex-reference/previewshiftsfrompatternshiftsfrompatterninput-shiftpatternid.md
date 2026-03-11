---
title: "previewShiftsFromPattern(shiftsFromPatternInput,
      shiftPatternId)"
domain: apex-reference
topic: previewshiftsfrompatternshiftsfrompatterninput-shiftpatternid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.119Z
keywords: [previewShiftsFromPattern, shiftsFromPatternInput, shiftPatternId, Preview, 000, shifts, pattern., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# previewShiftsFromPattern(shiftsFromPatternInput,
      shiftPatternId)

> Preview up to 2,000 shifts from a pattern.

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