---
title: "Dynamic DML"
domain: apex-guide
topic: dynamic-dml
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.305Z
estimatedTokens: 1067
keywords: [Dynamic, DML, addition, querying, describe, information, building, SOQL, queries, runtime, create, sObjects, dynamically, insert, database, DML., sObject, Creation, Example, Setting]
---

# Dynamic DML

> In addition to querying describe information and building SOQL
queries at runtime, you can also create sObjects dynamically, and
insert them into the database using DML.

# Dynamic DML

In addition to querying describe information and building SOQL queries at runtime, you can also create sObjects dynamically, and insert them into the database using DML.

To create a new sObject of a given type, use the newSObject method on an sObject token. Note that the token must be cast into a concrete sObject type (such as Account). For example:

```

```

Though the sObject token tokenA is a token of Account, it is considered an sObject because it is accessed separately. It must be cast back into the concrete sObject type Account to use the newSObject method. For more information on casting, see [Classes and Casting](atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm "In general, all type information is available at run time. This means that Apex enables casting, that is, a data type of one class can be assigned to a data type of another class, but only if one class is a subclass of the other class. Use casting when you want to convert an object from one data type to another.").

You can also specify an ID with newSObject to create an sObject that references an existing record that you can update later. For example:

```

```

See [SObjectType Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Schema_SObjectType.htm).

## Dynamic sObject Creation Example

This example shows how to obtain the sObject token through the Schema.getGlobalDescribe method and then creates a new sObject using the newSObject method on the token. This example also contains a test method that verifies the dynamic creation of an account.

```

```

```

```

## Setting and Retrieving Field Values

Use the get and put methods on an object to set or retrieve values for fields using either the API name of the field expressed as a String, or the field's token. In the following example, the API name of the field AccountNumber is used:

```

```

The following example uses the AccountNumber field's token instead:

```

```

The Object scalar data type can be used as a generic data type to set or retrieve field values on an sObject. This is equivalent to the [anyType](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm "HTML (New Window)") field type. Note that the Object data type is different from the sObject data type, which can be used as a generic type for any sObject.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

## Setting and Retrieving Foreign Keys

Apex supports populating foreign keys by name (or external ID) in the same way as the API. To set or retrieve the scalar ID value of a foreign key, use the get or put methods.

To set or retrieve the *record* associated with a foreign key, use the getSObject and putSObject methods. Note that these methods must be used with the sObject data type, not Object. For example:

```

```

There is no need to specify the external ID for a parent sObject value while working with child sObjects. If you provide an ID in the parent sObject, it is ignored by the DML operation. Apex assumes the foreign key is populated through a relationship SOQL query, which always returns a parent object with a populated ID. If you have an ID, use it with the child object.

For example, suppose that custom object C1 has a foreign key C2\_\_c that links to a parent custom object C2. You want to create a C1 object and have it associated with a C2 record named 'AW Computing' (assigned to the value C2\_\_r). You do not need the ID of the 'AW Computing' record, as it is populated through the relationship of parent to child. For example:

```

```

If you had assigned a value to the ID for C2\_\_r, it would be ignored. If you do have the ID, assign it to the object (C2\_\_c), not the record.

You can also access foreign keys using dynamic Apex. The following example shows how to get the values from a subquery in a parent-to-child relationship using dynamic Apex:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_sosl.htm "Dynamic SOSL")

## Code Examples

```
// Get a new account
Account a = new Account();
// Get the token for the account
Schema.sObjectType tokenA = a.getSObjectType();
// The following produces an error because the token is a generic sObject, not an Account
// Account b = tokenA.newSObject();
// The following works because the token is cast back into an Account
Account b = (Account)tokenA.newSObject();
```

```apex
SObject s = Database.query('SELECT Id FROM account LIMIT 1')[0].getSObjectType().
                                       newSObject([SELECT Id FROM Account LIMIT 1][0].Id);
```

```apex
public class DynamicSObjectCreation {
    public static sObject createObject(String typeName) {
        Schema.SObjectType targetType = Schema.getGlobalDescribe().get(typeName);
        if (targetType == null) {
            // throw an exception
        }
        
        // Instantiate an sObject with the type passed in as an argument
        //  at run time.
        return targetType.newSObject(); 
    }
}
```

```apex
@isTest
private class DynamicSObjectCreationTest {
    static testmethod void testObjectCreation() {
        String typeName = 'Account';
        String acctName = 'Acme';
        
        // Create a new sObject by passing the sObject type as an argument.
        Account a = (Account)DynamicSObjectCreation.createObject(typeName);        
        System.assertEquals(typeName, String.valueOf(a.getSobjectType()));
        // Set the account name and insert the account.
        a.Name = acctName;
        insert a;

        // Verify the new sObject got inserted.
        Account[] b = [SELECT Name from Account WHERE Name = :acctName];
        system.assert(b.size() > 0);
    }
}
```

```
SObject s = [SELECT AccountNumber FROM Account LIMIT 1];
Object o = s.get('AccountNumber');
s.put('AccountNumber', 'abc');
```

## Related Topics

- Classes and Casting (atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_sosl.htm)
