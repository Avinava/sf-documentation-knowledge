---
title: "QuickActionResult Methods"
domain: apex-reference
topic: quickactionresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.711Z
keywords: [QuickActionResult, Methods, error, occurs, array, database, objects, along, codes, descriptions, returned., getErrors, Signature, Return, Value, getIds, getSuccessMessage, isCreated, isSuccess]
---

# QuickActionResult Methods

> If an error occurs, an array of one or more database error
objects, along with error codes and descriptions, is returned.

## QuickActionResult Methods

The following are methods for QuickActionResult. All are instance methods.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_QuickAction_QuickActionResult_getErrors)**  
    If an error occurs, an array of one or more database error objects, along with error codes and descriptions, is returned.
-   **[getIds()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_QuickAction_QuickActionResult_getIds)**  
    The IDs of the QuickActions being processed.
-   **[getSuccessMessage()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_QuickAction_QuickActionResult_getSuccessMessage)**  
    Returns the success message associated with the quick action.
-   **[isCreated()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_QuickAction_QuickActionResult_isCreated)**  
    Returns true if the action is created; otherwise, false.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_QuickAction_QuickActionResult_isSuccess)**  
    Returns true if the action completes successfully; otherwise, false.

### getErrors()

If an error occurs, an array of one or more database error objects, along with error codes and descriptions, is returned.

#### Signature

public List<Database.Error> getErrors()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\>

### getIds()

The IDs of the QuickActions being processed.

#### Signature

public List<Id> getIds()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

### getSuccessMessage()

Returns the success message associated with the quick action.

#### Signature

public String getSuccessMessage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### isCreated()

Returns true if the action is created; otherwise, false.

#### Signature

public Boolean isCreated()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isSuccess()

Returns true if the action completes successfully; otherwise, false.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")