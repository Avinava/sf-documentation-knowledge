---
title: "treatNumericNullAsZero(isNumericNullZero)"
domain: apex-reference
topic: treatnumericnullaszeroisnumericnullzero
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.487Z
keywords: [treatNumericNullAsZero, isNumericNullZero, Optional., Indicates, whether, null, numeric, data, type, treated, zero, while, evaluating, formula, build, method., Signature, Parameters, Return, Value]
---

# treatNumericNullAsZero(isNumericNullZero)

> Optional. Indicates whether a null for a numeric data type is treated as zero while
    evaluating the formula with the build()
    method.

### treatNumericNullAsZero(isNumericNullZero)

Optional. Indicates whether a null for a numeric data type is treated as zero while evaluating the formula with the build() method.

#### Signature

public FormulaEval.FormulaBuilder treatNumericNullAsZero(Boolean isNumericNullZero)

#### Parameters

isNumericNullZero

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, null for numeric is treated as zero. The default value is false.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")