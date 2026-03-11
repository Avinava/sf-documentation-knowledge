---
title: "FormulaRecalcResult Methods"
domain: apex-reference
topic: formularecalcresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.412Z
keywords: [FormulaRecalcResult, Methods, error, occurs, during, formula, recalculation, array, database, objects, along, codes, descriptions, returned., getErrors, Signature, Return, Value, getSObject, isSuccess]
---

# FormulaRecalcResult Methods

> If an error occurs during formula recalculation, an array of one or
      more database error objects, along with error codes and descriptions, is
    returned.

## FormulaRecalcResult Methods

The following are methods for FormulaRecalcResult.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_System_FormulaRecalcResult_getErrors)**  
    If an error occurs during formula recalculation, an array of one or more database error objects, along with error codes and descriptions, is returned.
-   **[getSObject()](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_System_FormulaRecalcResult_getSObject)**  
    Returns the sObject with formulas recalculated.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_System_FormulaRecalcResult_isSuccess)**  
    Returns a Boolean value that is set to true if the formula recalculation process completed successfully; otherwise, it is set to false.

### getErrors()

If an error occurs during formula recalculation, an array of one or more database error objects, along with error codes and descriptions, is returned.

#### Signature

public List<System.FormulaRecalcFieldError> getErrors()

#### Return Value

Type: List<[FormulaRecalcFieldError Class](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcFieldError.htm#apex_class_System_FormulaRecalcFieldError "The return type of the FormulaRecalcResult.getErrors method.")\>

### getSObject()

Returns the sObject with formulas recalculated.

#### Signature

public SObject getSObject()

#### Return Value

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

### isSuccess()

Returns a Boolean value that is set to true if the formula recalculation process completed successfully; otherwise, it is set to false.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")