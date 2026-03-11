---
title: "Accessing SObject Fields"
domain: apex-guide
topic: accessing-sobject-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.995Z
keywords: [Accessing, SObject, Fields, Note]
---

# Accessing SObject Fields

# Accessing SObject Fields

As in Java, SObject fields can be accessed or changed with simple dot notation. For example:

```

```

System-generated fields, such as Created By or Last Modified Date, cannot be modified. If you try, the Apex runtime engine generates an error. Additionally, formula field values and values for other fields that are read-only for the context user cannot be changed.

If you use the generic SObject type instead of a specific object, such as Account, you can retrieve only the Id field using dot notation. You can set the Id field for Apex code saved using Salesforce API version 27.0 and later). Alternatively, you can use the generic SObject put and get methods. See [SObject Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject.htm).

This example shows how you can access the Id field and operations that aren’t allowed on generic SObjects.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If your organization has enabled person accounts, you have two different kinds of accounts: business accounts and person accounts. If your code creates a new account using name, a business account is created. If your code uses LastName, a person account is created.

If you want to perform operations on an SObject, it is recommended that you first convert it into a specific object. For example:

```

```

The following example shows how you can use SOSL over a set of records to determine their object types. Once you have converted the generic SObject record into a Contact, Lead, or Account, you can modify its fields accordingly:

```

```

## Using SObject Fields

SObject fields can be initially set or not set (unset); unset fields are not the same as null or blank fields. When you perform a DML operation on an SObject, you can change a field that is set; you can’t change unset fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To erase the current value of a field, set the field to null.

If an Apex method takes an SObject parameter, you can use the [System.isSet()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_isSet) method to identify the set fields. If you want to unset any fields to retain their values, first create an SObject instance. Then apply only the fields you want to be part of the DML operation.

This example code shows how SObject fields are identified as set or unset.

```

```

An expression with SObject fields of type Boolean evaluates to true only if the SObject field is true. If the field is false or null, the expression evaluates to false. This example code shows an expression that checks if the IsActive field of a Campaign object is null. Because this expression always evaluates to false, the code in the if statement is never executed.

```

```