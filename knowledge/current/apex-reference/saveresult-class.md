---
title: "SaveResult Class"
domain: apex-reference
topic: saveresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.553Z
estimatedTokens: 1230
namespace: Database
keywords: [SaveResult, result, insert, update, DML, operation, returned, Database, method., Usage, Example, getErrors, getId, Versioned, Behavior, Changes, isSuccess]
---

# SaveResult Class

> The result of an insert or update DML operation returned
by a Database method.

**Namespace:** `Database`

# SaveResult Class

The result of an insert or update DML operation returned by a Database method.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

An array of SaveResult objects is returned with the insert and update database methods. Each element in the SaveResult array corresponds to the sObject array passed as the sObject\[\] parameter in the Database method, that is, the first element in the SaveResult array matches the first element passed in the sObject array, the second element corresponds with the second element, and so on. If only one sObject is passed in, the SaveResult array contains a single element.

A SaveResult object is generated when a new or existing Salesforce record is saved.

## Example

The following example shows how to obtain and iterate through the returned Database.SaveResult objects. It inserts two accounts using Database.insert with a false second parameter to allow partial processing of records on failure. One of the accounts is missing the Name required field, which causes a failure. Next, it iterates through the results to determine whether the operation was successful or not for each record. It writes the ID of every record that was processed successfully to the debug log, or error messages and fields of the failed records. This example generates one successful operation and one failure.

```

```

#### See Also

-   [Error Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")

-   [DuplicateError Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm#apex_class_Database_DuplicateError "Contains information about an error that occurred when an attempt was made to save a duplicate record. Use if your organization has set up duplicate rules, which are part of the Duplicate Management feature.")


## SaveResult Methods

The following are methods for SaveResult. All are instance methods.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_Database_SaveResult_getErrors)**
    If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns an empty set.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_Database_SaveResult_getId)**
    Returns the ID of the sObject you were trying to insert or update.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_Database_SaveResult_isSuccess)**
    Returns a Boolean that is set to true if the DML operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns an empty set.

#### Signature

public Database.Error\[\] getErrors()

#### Return Value

Type: [Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\[\]

### getId()

Returns the ID of the sObject you were trying to insert or update.

#### Signature

public ID getId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Versioned Behavior Changes

In API version 53.0 and later, the method returns the sObject ID. However, if record locking fails during the update operation, the method returns a null value.

In API version 52.0 and earlier, the method returned a null value if the record wasn’t updated successfully.

### isSuccess()

Returns a Boolean that is set to true if the DML operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

This example shows the code used to process duplicate records, which are detected when there is an unsuccessful save due to an error. This code is part of a custom application that implements duplicate management when users add a contact. See [DuplicateResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") to check out the entire sample applicaton.

```

```

## Code Examples

```apex
// Create two accounts, one of which is missing a required field
Account[] accts = new List<Account>{
    new Account(Name='Account1'),
    new Account()};
Database.SaveResult[] srList = Database.insert(accts, false);

// Iterate through each returned result
for (Database.SaveResult sr : srList) {
    if (sr.isSuccess()) {
        // Operation was successful, so get the ID of the record that was processed
        System.debug('Successfully inserted account. Account ID: ' + sr.getId());
    }
    else {
        // Operation failed, so get all errors                
        for(Database.Error err : sr.getErrors()) {
            System.debug('The following error has occurred.');                    
            System.debug(err.getStatusCode() + ': ' + err.getMessage());
            System.debug('Account fields that affected this error: ' + err.getFields());
        }
    }
}
```

```
if (!saveResult.isSuccess()) { ... }
```

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- Error Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- DuplicateError Class (atlas.en-us.apexref.meta/apexref/apex_class_Database_DuplicateError.htm)
- getErrors() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm)
- getId() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm)
- isSuccess() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm)
- Database.Error (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- DuplicateResult Class (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm)
