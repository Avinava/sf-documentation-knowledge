---
title: "Built-In Exceptions and Common Methods"
domain: apex-guide
topic: built-in-exceptions-and-common-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.342Z
estimatedTokens: 1919
keywords: [Built-In, Exceptions, Common, Apex, provides, number, built-in, exception, types, runtime, engine, throws, errors, encountered, during, execution., You've, seen, DmlException, previous]
---

# Built-In Exceptions and Common Methods

> Apex provides a number of built-in exception types that the runtime engine throws if
            errors are encountered during execution. You've seen the DmlException in the previous
            example. Here is a sample of some other built-in exceptions. For a complete list of
            built-in 

# Built-In Exceptions and Common Methods

Apex provides a number of built-in exception types that the runtime engine throws if errors are encountered during execution. You've seen the DmlException in the previous example. Here is a sample of some other built-in exceptions. For a complete list of built-in exception types, see [Exception Class and Built-In Exceptions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm).

DmlException

Any problem with a DML statement, such as an insert statement missing a required field on a record.

This example makes use of DmlException. The insert DML statement in this example causes a DmlException because it’s inserting a merchandise item without setting any of its required fields. This exception is caught in the catch block and the exception message is written to the debug log using the System.debug statement.

```

```

ListException

Any problem with a list, such as attempting to access an index that is out of bounds.

This example creates a list and adds one element to it. Then, an attempt is made to access two elements, one at index 0, which exists, and one at index 1, which causes a ListException to be thrown because no element exists at this index. This exception is caught in the catch block. The System.debug statement in the catch block writes the following to the debug log: The following exception has occurred: List index out of bounds: 1.

```

```

NullPointerException

Any problem with dereferencing a null variable.

This example creates a String variable named s but we don’t initialize it to a value, hence, it is null. Calling the contains method on our null variable causes a NullPointerException. The exception is caught in our catch block and this is what is written to the debug log: The following exception has occurred: Attempt to de-reference a null object.

```

```

QueryException

Any problem with SOQL queries, such as assigning a query that returns no records or more than one record to a singleton sObject variable.

The second SOQL query in this example causes a QueryException. The example assigns a Merchandise object to what is returned from the query. Note the use of LIMIT 1 in the query. This ensures that at most one object is returned from the database so we can assign it to a single object and not a list. However, in this case, we don’t have a Merchandise named XYZ, so nothing is returned, and the attempt to assign the return value to a single object results in a QueryException. The exception is caught in our catch block and this is what you’ll see in the debug log: The following exception has occurred: List has no rows for assignment to SObject.

```

```

SObjectException

Any problem with sObject records, such as attempting to change a field in an update statement that can only be changed during insert.

This example results in an SObjectException in the try block, which is caught in the catch block. The example queries an invoice statement and selects only its Name field. It then attempts to get the Description\_\_c field on the queried sObject, which isn’t available because it isn’t in the list of fields queried in the SELECT statement. This results in an SObjectException. This exception is caught in our catch block and this is what you’ll see in the debug log: The following exception has occurred: SObject row was retrieved via SOQL without querying the requested field: Invoice\_Statement\_\_c.Description\_\_c.

```

```

## Common Exception Methods

You can use common exception methods to get more information about an exception, such as the exception error message or the stack trace. The previous example calls the getMessage method, which returns the error message associated with the exception. There are other exception methods that are also available. Here are descriptions of some useful methods:

-   getCause: Returns the cause of the exception as an exception object.
-   getLineNumber: Returns the line number from where the exception was thrown.
-   getMessage: Returns the error message that displays for the user.
-   getStackTraceString: Returns the stack trace of a thrown exception as a string.
-   getTypeName: Returns the type of exception, such as DmlException, ListException, MathException, and so on.

**Example**

To find out what some of the common methods return, try running this example.

```

```

The output of all System.debug statements looks like the following:

17:38:04:149 USER\_DEBUG \[7\]|DEBUG|Exception type caught: System.SObjectException

17:38:04:149 USER\_DEBUG \[8\]|DEBUG|Message: SObject row was retrieved via SOQL without querying the requested field: Merchandise\_\_c.Total\_Inventory\_\_c

17:38:04:150 USER\_DEBUG \[9\]|DEBUG|Cause: null

17:38:04:150 USER\_DEBUG \[10\]|DEBUG|Line number: 5

17:38:04:150 USER\_DEBUG \[11\]|DEBUG|Stack trace: AnonymousBlock: line 5, column 1

The catch statement argument type is the generic Exception type. It caught the more specific SObjectException. You can verify that this is so by inspecting the return value of e.getTypeName() in the debug output. The output also contains other properties of the SObjectException, like the error message, the line number where the exception occurred, and the stack trace. You might be wondering why getCause returned null. This is because in our sample there was no previous exception (inner exception) that caused this exception. In [Create Custom Exceptions](atlas.en-us.apexcode.meta/apexcode/apex_exception_custom.htm), you’ll get to see an example where the return value of getCause is an actual exception.

## More Exception Methods

Some exception types, such as DmlException, have specific exception methods that apply to only them and aren’t common to other exception types:

-   getDmlFieldNames(Index of the failed record): Returns the names of the fields that caused the error for the specified failed record.
-   getDmlId(Index of the failed record): Returns the ID of the failed record that caused the error for the specified failed record.
-   getDmlMessage(Index of the failed record): Returns the error message for the specified failed record.
-   getNumDml: Returns the number of failed records.

**Example**

This snippet makes use of the DmlException methods to get more information about the exceptions returned when inserting a list of Merchandise objects. The list of items to insert contains three items, the last two of which don’t have required fields and cause exceptions.

```

```

Note how the sample above didn’t include all the initial code in the try block. Only the portion of the code that could generate an exception is wrapped inside a try block, in this case the insert statement could return a DML exception in case the input data is not valid. The exception resulting from the insert operation is caught by the catch block that follows it. After executing this sample, you’ll see an output of System.debug statements similar to the following:

14:01:24:939 USER\_DEBUG \[20\]|DEBUG|getNumDml=2

14:01:24:941 USER\_DEBUG \[23\]|DEBUG|getDmlFieldNames=(Price, Total Inventory)

14:01:24:941 USER\_DEBUG \[24\]|DEBUG|getDmlMessage=Required fields are missing: \[Price, Total Inventory\]

14:01:24:942 USER\_DEBUG \[23\]|DEBUG|getDmlFieldNames=(Description, Price, Total Inventory)

14:01:24:942 USER\_DEBUG \[24\]|DEBUG|getDmlMessage=Required fields are missing: \[Description, Price, Total Inventory\]

The number of DML failures is correctly reported as two since two items in our list fail insertion. Also, the field names that caused the failure, and the error message for each failed record is written to the output.

## Code Examples

```apex
try {
    Merchandise__c m = new Merchandise__c();
    insert m;
} catch(DmlException e) {
    System.debug('The following exception has occurred: ' + e.getMessage());
}
```

```apex
try {
    List<Integer> li = new List<Integer>();
    li.add(15);
    // This list contains only one element,
    // but we're attempting to access the second element
    // from this zero-based list.
    Integer i1 = li[0]; 
    Integer i2 = li[1]; // Causes a ListException
} catch(ListException le) {
    System.debug('The following exception has occurred: ' + le.getMessage());
}
```

```apex
try {
    String s;
    Boolean b = s.contains('abc'); // Causes a NullPointerException
} catch(NullPointerException npe) {
    System.debug('The following exception has occurred: ' + npe.getMessage());
}
```

```apex
try {
    // This statement doesn't cause an exception, even though 
    // we don't have a merchandise with name='XYZ'.
    // The list will just be empty.
    List<Merchandise__c> lm = [SELECT Name FROM Merchandise__c WHERE Name = 'XYZ'];
    // lm.size() is 0 
    System.debug(lm.size());
    
    // However, this statement causes a QueryException because 
    // we're assiging the return value to a Merchandise__c object
    // but no Merchandise is returned.
    Merchandise__c m = [SELECT Name FROM Merchandise__c WHERE Name = 'XYZ' LIMIT 1];
} catch(QueryException qe) {
    System.debug('The following exception has occurred: ' + qe.getMessage());    
}
```

```apex
try {
    Invoice_Statement__c inv = new Invoice_Statement__c(
        Description__c='New Invoice');
    insert inv;

    // Query the invoice we just inserted
    Invoice_Statement__c v = [SELECT Name FROM Invoice_Statement__c WHERE Id = :inv.Id];
    // Causes an SObjectException because we didn't retrieve
    // the Description__c field.
    String s = v.Description__c;
} catch(SObjectException se) {
    System.debug('The following exception has occurred: ' + se.getMessage());
}
```

## Related Topics

- Create Custom Exceptions (atlas.en-us.apexcode.meta/apexcode/apex_exception_custom.htm)
