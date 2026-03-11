---
title: "getReferencedFields()"
domain: apex-reference
topic: getreferencedfields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.490Z
keywords: [getReferencedFields, Returns, set, strings, denote, field, names, referenced, formula., Signature, Return, Value, Usage, Example]
---

# getReferencedFields()

> Returns a set of strings that denote the field names referenced in a formula.

### getReferencedFields()

Returns a set of strings that denote the field names referenced in a formula.

#### Signature

public Set<String> getReferencedFields()

#### Return Value

Type: [Set](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Usage

A formula is built and evaluated in the context of the current namespace of the subscriber org. If you package a formula that references fields, the fields must be fully qualified with the namespace name.

#### Example

FormulaEval.FormulaInstance ff = Formula.builder() .withType(Schema.Account.class) .withReturnType(FormulaEval.FormulaReturnType.STRING) .withFormula('name & website') .build();   // Returns the field names 'name', and 'website' required to process the formula Set<String> fieldNames = ff.getReferencedFields();   // Use the list of field names to generate dynamic soql String queryStr = 'select ' + string.join(fieldNames, ', ') + ' from Account limit 1'; List<sObject> accounts = Database.query(queryStr); string formulaOutput = (string)ff.evaluate(accounts\[0\]); System.debug(formulaOutput);