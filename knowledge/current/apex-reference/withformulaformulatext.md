---
title: "withFormula(formulaText)"
domain: apex-reference
topic: withformulaformulatext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.487Z
keywords: [withFormula, formulaText, Required., Sets, formula, expression, build, method, uses, create, instance., Signature, Parameters, Return, Value]
---

# withFormula(formulaText)

> Required. Sets the formula expression that the build() method uses to create the formula instance.

### withFormula(formulaText)

Required. Sets the formula expression that the build() method uses to create the formula instance.

#### Signature

public FormulaEval.FormulaBuilder withFormula(String formulaText)

#### Parameters

formulaText

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")