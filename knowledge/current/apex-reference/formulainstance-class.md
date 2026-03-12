---
title: "FormulaInstance Class"
domain: apex-reference
topic: formulainstance-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.975Z
estimatedTokens: 979
namespace: FormulaEval
keywords: [FormulaInstance, evaluate, formula, instance, Usage, contextObject, getReferencedFields]
---

# FormulaInstance Class

> Contains a method to evaluate the formula instance.

**Namespace:** `FormulaEval`

# FormulaInstance Class

Contains a method to evaluate the formula instance.

## Namespace

[FormulaEval](atlas.en-us.apexref.meta/apexref/apex_namespace_formulaeval.htm "The FormulaEval namespace provides classes and methods to evaluate dynamic formulas for SObjects and Apex objects. Use the methods to avoid unnecessary DML statements to recalculate formula field values or evaluate dynamic formula expressions.")

## Example

global class MotorYacht { global Integer lengthInYards; global Integer numOfGuestCabins; global String name; global Account owner; }

MotorYacht aBoat = new MotorYacht(); aBoat.lengthInYards = 52; aBoat.numOfGuestCabins = 4; aBoat.name = 'RV Foo'; FormulaEval.FormulaInstance isItSuper = Formula.builder() .withReturnType(FormulaEval.FormulaReturnType.STRING) .withType(MotorYacht.class) .withFormula('IF(lengthInYards < 100, "Not Super", "Super")') .build(); isItSuper.evaluate(aBoat); //=> "Not Super" aBoat.owner = new Account(Name='Acme Watercraft', Site='New York'); FormulaEval.FormulaInstance ownerDetails = Formula.builder() .withReturnType(FormulaEval.FormulaReturnType.STRING) .withType(MotorYacht.class) .withFormula('owner.Name & " (" & owner.Site & ")"') .build(); ownerDetails.evaluate(aBoat); //=> "Acme Watercraft (New York)"

## Usage

The context type in the withType method must be a global, user-defined Apex class. Any fields or properties that the formula references must also be global.

-   **[FormulaInstance Methods](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm#apex_formulaeval_FormulaInstance_methods)**


## FormulaInstance Methods

The following are methods for FormulaInstance.

-   **[evaluate(contextObject)](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm#apex_formulaeval_FormulaInstance_evaluate)**
    Calculates the formula expression and returns the formula output.
-   **[getReferencedFields()](atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm#apex_formulaeval_FormulaInstance_getReferencedFields)**
    Returns a set of strings that denote the field names referenced in a formula.

### evaluate(contextObject)

Calculates the formula expression and returns the formula output.

#### Signature

public Object evaluate(Object contextObject)

#### Parameters

contextObject

Type: Object

An instance of the Apex class as generated with the FormulaBuilder.builder() method.

#### Return Value

Type: Object

Apex type that corresponds to the Apex class as configured by the withType() method in the FormulaBuilder class.

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

## Related Topics

- FormulaEval (atlas.en-us.apexref.meta/apexref/apex_namespace_formulaeval.htm)
- FormulaInstance Methods (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm)
- evaluate(contextObject) (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm)
- getReferencedFields() (atlas.en-us.apexref.meta/apexref/apex_class_formulaeval_FormulaInstance.htm)
- Set (atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
