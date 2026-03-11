---
title: "withType(contextType)"
domain: apex-reference
topic: withtypecontexttype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.487Z
keywords: [withType, contextType, Sets, Apex, type, corresponds, class, used, build, method, SObject, type., Signature, Parameters, Return, Value, Example]
---

# withType(contextType)

> Sets the Apex type that corresponds to the Apex class used with the build() method to SObject type.

### withType(contextType)

Sets the Apex type that corresponds to the Apex class used with the build() method to SObject type.

#### Signature

public formulaeval.FormulaBuilder withType(Schema.SObjectType contextSObjectType)

#### Parameters

contextSObjectType

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

An instance of the SObject type.

#### Return Value

Type: [FormulaEval.FormulaBuilder](#apex_class_formulaeval_FormulaBuilder "Contains methods to build and validate user-defined formulas.")

#### Example

This example uses an SObject type as an input in the withType() method to build and evaluate a formula.

```

```