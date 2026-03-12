---
title: "LockResult Class"
domain: apex-reference
topic: lockresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.410Z
estimatedTokens: 893
namespace: Approval
keywords: [LockResult, result, record, lock, returned, System.Approval.lock, method., Usage, Example, getErrors, getId, isSuccess]
---

# LockResult Class

> The result of a record lock returned by a System.Approval.lock() method.

**Namespace:** `Approval`

# LockResult Class

The result of a record lock returned by a System.Approval.lock() method.

## Namespace

[Approval](atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm "The Approval namespace provides classes and methods for approval processes.")

## Usage

The System.Approval.lock() methods return Approval.LockResult objects. Each element in a LockResult array corresponds to an element in the ID or sObject array passed as a parameter to a lock method. The first element in the LockResult array corresponds to the first element in the ID or sObject array, the second element corresponds to the second element, and so on. If only one ID or sObject is passed in, the LockResult array contains a single element.

## Example

The following example obtains and iterates through the returned Approval.LockResult objects. It locks some queried accounts using Approval.lock with a false second parameter to allow partial processing of records on failure. Next, it iterates through the results to determine whether the operation was successful for each record. It writes the ID of every record that was processed successfully to the debug log, or writes error messages and failed fields of the failed records.

```

```

-   **[LockResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_Approval_LockResult_methods)**


#### See Also

-   [Approval Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_methods_system_approval "Contains methods for processing approval requests and setting approval-process locks and unlocks on records.")


## LockResult Methods

The following are methods for LockResult.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_Approval_LockResult_getErrors)**
    If an error occurred, returns an array of one or more database error objects, providing the error code and description.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_Approval_LockResult_getId)**
    Returns the ID of the sObject you are trying to lock.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_Approval_LockResult_isSuccess)**
    A Boolean value that is set to true if the lock operation is successful for this object, or false otherwise.

### getErrors()

If an error occurred, returns an array of one or more database error objects, providing the error code and description.

#### Signature

public List<Database.Error> getErrors()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods)\>

### getId()

Returns the ID of the sObject you are trying to lock.

#### Signature

public Id getId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Usage

If the field contains a value, the object was locked. If the field is empty, the operation was not successful.

### isSuccess()

A Boolean value that is set to true if the lock operation is successful for this object, or false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```apex
// Query the accounts to lock
Account[] accts = [SELECT Id from Account WHERE Name LIKE 'Acme%'];
// Lock the accounts
Approval.LockResult[] lrList = Approval.lock(accts, false);

// Iterate through each returned result
for(Approval.LockResult lr : lrList) {
    if (lr.isSuccess()) {
        // Operation was successful, so get the ID of the record that was processed
        System.debug('Successfully locked account with ID: ' + lr.getId());
    }
    else {
        // Operation failed, so get all errors                
        for(Database.Error err : lr.getErrors()) {
            System.debug('The following error has occurred.');                    
            System.debug(err.getStatusCode() + ': ' + err.getMessage());
            System.debug('Account fields that affected this error: ' + err.getFields());
        }
    }
}
```

## Related Topics

- Approval (atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm)
- LockResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm)
- Approval Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm)
- getErrors() (atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm)
- getId() (atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm)
- isSuccess() (atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Database.Error (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
