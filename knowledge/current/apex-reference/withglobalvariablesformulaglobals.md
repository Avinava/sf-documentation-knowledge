---
title: "withGlobalVariables(formulaGlobals)"
domain: apex-reference
topic: withglobalvariablesformulaglobals
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.487Z
keywords: [withGlobalVariables, formulaGlobals, Optional., Sets, list, global, variables, referenced, formula, expression, created, build, method., Signature, Parameters, Return, Value]
---

# withGlobalVariables(formulaGlobals)

> Optional. Sets the list of global variables that can be referenced in the formula
    expression created with the build() method.

### withGlobalVariables(formulaGlobals)

Optional. Sets the list of global variables that can be referenced in the formula expression created with the build() method.

#### Signature

public FormulaEval.FormulaBuilder withGlobalVariables(List<formulaeval.FormulaGlobal> formulaGlobals)

#### Parameters

formulaGlobals

Type: List<FormulaEval.[FormulaGlobal](atlas.en-us.apexref.meta/apexref/apex_enum_formulaeval_FormulaGlobal.htm "Specifies a global variable that references data in your organization in the withGlobalVariables(formulaGlobals) method.")\>

Uses values from the FormulaGlobal enum.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")