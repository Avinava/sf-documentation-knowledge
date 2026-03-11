---
title: "withReturnType(returnType)"
domain: apex-reference
topic: withreturntypereturntype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.487Z
keywords: [withReturnType, returnType, Required., Sets, formula, output, data, type, instance, created, build, method., Signature, Parameters, Return, Value]
---

# withReturnType(returnType)

> Required. Sets the formula output data type for the formula instance created with the
      build() method.

### withReturnType(returnType)

Required. Sets the formula output data type for the formula instance created with the build() method.

#### Signature

public FormulaEval.FormulaBuilder withReturnType(formulaeval.FormulaReturnType returnType)

#### Parameters

returnType

Type: [FormulaEval.FormulaReturnType](atlas.en-us.apexref.meta/apexref/apex_enum_formulaeval_FormulaReturnType.htm "Specifies the return type for the withReturnType(returnType) method.")

Uses values from the FormulaReturnType enum.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")