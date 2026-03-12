---
title: "Returned Database Errors"
domain: apex-guide
topic: returned-database-errors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.670Z
estimatedTokens: 316
keywords: [Returned, Database, Errors, While, DML, statements, always, exceptions, operation, fails, records, being, processed, rolled, back, either, allow, partial, success, record]
---

# Returned Database Errors

> While DML statements always return exceptions when an operation
fails for one of the records being processed and the operation is
rolled back for all records, Database class methods can either do
so or allow partial success for record processing. In the latter case
of partial processing, Database cl

# Returned Database Errors

While DML statements always return exceptions when an operation fails for one of the records being processed and the operation is rolled back for all records, Database class methods can either do so or allow partial success for record processing. In the latter case of partial processing, Database class methods don’t throw exceptions. Instead, they return a list of errors for any errors that occurred on failed records.

The errors provide details about the failures and are contained in the result of the Database class method. For example, a SaveResult object is returned for insert and update operations. Like all returned results, SaveResult contains a method called getErrors that returns a list of Database.Error objects, representing the errors encountered, if any.

## Example

This example shows how to get the errors returned by a Database.insert operation. It inserts two accounts, one of which doesn’t have the required Name field, and sets the second parameter to false: Database.insert(accts, false);. This sets the partial processing option. Next, the example checks if the call had any failures through if (!sr.isSuccess()) and then iterates through the errors, writing error information to the debug log.

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
    if (!sr.isSuccess()) {
        // Operation failed, so get all errors                
        for(Database.Error err : sr.getErrors()) {
            System.debug('The following error has occurred.');                    
            System.debug(err.getStatusCode() + ': ' + err.getMessage());
            System.debug('Fields that affected this error: ' + err.getFields());
        }
    }
}
```
