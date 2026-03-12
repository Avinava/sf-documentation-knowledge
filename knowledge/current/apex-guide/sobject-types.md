---
title: "sObject Types"
domain: apex-guide
topic: sobject-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:34.499Z
estimatedTokens: 510
keywords: [sObject, variable, row, data, declared, Apex, SOAP, API, Custom, Labels]
---

# sObject Types

> An sObject variable represents a row of data and can only be declared in Apex using
        SOAP API name of the object.

# sObject Types

An sObject variable represents a row of data and can only be declared in Apex using SOAP API name of the object.

For example:

```

```

Similar to SOAP API, Apex allows the use of the generic sObject abstract type to represent any object. The sObject data type can be used in code that processes different types of sObjects.

The new operator still requires a concrete sObject type, so all instances are specific sObjects. For example:

```

```

You can also use casting between the generic sObject type and the specific sObject type. For example:

```

```

Because sObjects work like objects, you can also have the following:

```

```

DML operations work on variables declared as the generic sObject data type as well as with regular sObjects.

sObject variables are initialized to null, but can be assigned a valid object reference with the new operator. For example:

```

```

Developers can also specify initial field values with comma-separated name = value pairs when instantiating a new sObject. For example:

```

```

For information on accessing existing sObjects from the Lightning Platform database, see “SOQL and SOSL Queries” in the SOQL and SOSL Reference.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The Lightning Platform assigns ID values automatically when an object record is initially inserted to the database for the first time. For more information see [Lists](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm "A list is an ordered collection of elements that are distinguished by their indices. List elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.").

## Custom Labels

Custom labels aren’t standard sObjects. You can’t create a new instance of a custom label. You can only access the value of a custom label using system.label.label\_name. For example:

```

```

For more information on custom labels, see “Custom Labels” in Salesforce Help.

## Code Examples

```
Account a = new Account();
MyCustomObject__c co = new MyCustomObject__c();
```

```
sObject s = new Account();
```

```
// Cast the generic variable s from the example above
// into a specific account and account variable a
Account a = (Account)s;
// The following generates a runtime error
Contact c = (Contact)s;
```

```
Object obj = s;
// and
a = (Account)obj;
```

```
Account a = new Account();
```

## Related Topics

- Lists (atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm)
