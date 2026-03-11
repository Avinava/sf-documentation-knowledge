---
title: "Formula Class"
domain: apex-reference
topic: formula-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.404Z
keywords: [Formula, Class, Updates, recalculates, formula, fields, input, SObjects., recalculateFormulas, sobjects, Signature, Parameters, Return, Value, Usage, Example]
---

# Formula Class

> Updates (recalculates) all formula fields on the input
    SObjects.

### recalculateFormulas(sobjects)

Updates (recalculates) all formula fields on the input SObjects.

#### Signature

public static List<System.FormulaRecalcResult> recalculateFormulas(List<SObject> sobjects)

#### Parameters

sobjects

Type: List<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

List of sObjects whose formula fields are to be recalculated.

#### Return Value

Type: List<[FormulaRecalcResult Class](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_class_System_FormulaRecalcResult "The return type of the Formula.recalculateFormulas method.")\>

#### Usage

Recalculate formula fields on new or queried SObjects. If all data is present on the SObjects, SOQL limits are not affected. If the data required to evaluate a formula field is missing, that data is retrieved and limits are changed accordingly.

The new formula values are stored in the SObjects themselves and overwrite previous values of formula fields.

#### Example

```

```