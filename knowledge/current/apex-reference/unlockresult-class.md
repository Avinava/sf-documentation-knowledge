---
title: "UnlockResult Class"
domain: apex-reference
topic: unlockresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.417Z
estimatedTokens: 910
namespace: Approval
keywords: [UnlockResult, result, record, unlock, returned, System.Approval.unlock, method., Usage, Example, getErrors, getId, isSuccess]
---

# UnlockResult Class

> The result of a record unlock, returned by a System.Approval.unlock() method.

**Namespace:** `Approval`

# UnlockResult Class

The result of a record unlock, returned by a System.Approval.unlock() method.

## Namespace

[Approval](atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm "The Approval namespace provides classes and methods for approval processes.")

## Usage

The System.Approval.unlock() methods return Approval.UnlockResult objects. Each element in an UnlockResult array corresponds to an element in the ID or sObject array passed as a parameter to an unlock method. The first element in the UnlockResult array corresponds to the first element in the ID or sObject array, the second element corresponds to the second element, and so on. If only one ID or sObject is passed in, the UnlockResult array contains a single element.

## Example

The following example shows how to obtain and iterate through the returned Approval.UnlockResult objects. It locks some queried accounts using Approval.unlock with a false second parameter to allow partial processing of records on failure. Next, it iterates through the results to determine whether the operation was successful for each record. It writes the ID of every record that was processed successfully to the debug log, or writes error messages and failed fields of the failed records.

```

```

-   **[UnlockResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_Approval_UnlockResult_methods)**


#### See Also

-   [Approval Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_methods_system_approval "Contains methods for processing approval requests and setting approval-process locks and unlocks on records.")


## UnlockResult Methods

The following are methods for UnlockResult.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_Approval_UnlockResult_getErrors)**
    If an error occurred, returns an array of one or more database error objects, providing the error code and description.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_Approval_UnlockResult_getId)**
    Returns the ID of the sObject you are trying to unlock.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_Approval_UnlockResult_isSuccess)**
    A Boolean value that is set to true if the unlock operation is successful for this object, or false otherwise.

### getErrors()

If an error occurred, returns an array of one or more database error objects, providing the error code and description.

#### Signature

public List<Database.Error> getErrors()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods)\>

### getId()

Returns the ID of the sObject you are trying to unlock.

#### Signature

public Id getId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Usage

If the field contains a value, the object was unlocked. If the field is empty, the operation was not successfult.

### isSuccess()

A Boolean value that is set to true if the unlock operation is successful for this object, or false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```apex
// Query the accounts to unlock
Account[] accts = [SELECT Id from Account WHERE Name LIKE 'Acme%'];

for(Account acct:accts) {
   // Create an approval request for the account
   Approval.ProcessSubmitRequest req1 =
           new Approval.ProcessSubmitRequest();
   req1.setComments('Submitting request for approval.');
   req1.setObjectId(acct.id);

   // Submit the record to specific process and skip the criteria evaluation
   req1.setProcessDefinitionNameOrId('PTO_Request_Process');
   req1.setSkipEntryCriteria(true);

   // Submit the approval request for the account
   Approval.ProcessResult result = Approval.process(req1);

   // Verify the result
   System.assert(result.isSuccess());
}

// Unlock the accounts
Approval.UnlockResult[] urList = Approval.unlock(accts, false);

// Iterate through each returned result
for(Approval.UnlockResult ur : urList) {
    if (ur.isSuccess()) {
        // Operation was successful, so get the ID of the record that was processed
        System.debug('Successfully unlocked account with ID: ' + ur.getId());
    }
    else {
        // Operation failed, so get all errors                
        for(Database.Error err : ur.getErrors()) {
            System.debug('The following error has occurred.');                    
            System.debug(err.getStatusCode() + ': ' + err.getMessage());
            System.debug('Account fields that affected this error: ' + err.getFields());
        }
    }
}
```

## Related Topics

- Approval (atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm)
- UnlockResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm)
- Approval Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm)
- getErrors() (atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm)
- getId() (atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm)
- isSuccess() (atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Database.Error (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
