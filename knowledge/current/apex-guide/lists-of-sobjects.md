---
title: "Lists of sObjects"
domain: apex-guide
topic: lists-of-sobjects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.627Z
estimatedTokens: 777
keywords: [sObjects, contain, among, elements, bulk, processing, data, Auto-populating, SOQL, Query, Adding, Retrieving, Record, Generation, Array]
---

# Lists of sObjects

> Lists can contain sObjects among other types of elements.
Lists of sObjects can be used for bulk processing of data.

# Lists of sObjects

Lists can contain sObjects among other types of elements. Lists of sObjects can be used for bulk processing of data.

You can use a list to store sObjects. Lists are useful when working with SOQL queries. SOQL queries return sObject data and this data can be stored in a list of sObjects. Also, you can use lists to perform bulk operations, such as inserting a list of sObjects with one call.

To declare a list of sObjects, use the List keyword followed by the sObject type within <> characters. For example:

```

```

## Auto-populating a List from a SOQL Query

You can assign a List variable directly to the results of a SOQL query. The SOQL query returns a new list populated with the records returned. Make sure that the declared List variable contains the same sObject that is being queried. Or you can use the generic sObject data type.

This example shows how to declare and assign a list of accounts to the return value of a SOQL query. The query returns up to 1,000 returns account records containing the Id and Name fields.

```

```

## Adding and Retrieving List Elements

As with lists of primitive data types, you can access and set elements of sObject lists using the List methods provided by Apex. For example:

```

```

## Bulk Processing

You can bulk-process a list of sObjects by passing a list to the DML operation. This example shows how you can insert a list of accounts.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If you perform a bulk insert of Knowledge article versions, make the ownerId of all records the same.

## Record ID Generation

Apex automatically generates IDs for each object in an sObject list that was inserted or upserted using DML. Therefore, a list that contains more than one instance of an sObject cannot be inserted or upserted even if it has a null ID. This situation would imply that two IDs would need to be written to the same structure in memory, which is illegal.

For example, the insert statement in the following block of code generates a ListException because it tries to insert a list with two references to the same sObject (a):

```

```

## Using Array Notation for One-Dimensional Lists of sObjects

Alternatively, you can use the array notation (square brackets) to declare and reference lists of sObjects.

This example declares a list of accounts using the array notation.

```

```

This example adds an element to the list using square brackets.

```

```

These examples also use the array notation with sObject lists.

| Example | Description |
| --- | --- |
| List<Account> accts = new Account[]{}; | Defines an Account list with no elements. |
| List<Account> accts = new Account[]          {new Account(), null, new Account()}; | Defines an Account list with memory allocated for three Accounts: a new Account object in the first position, null in the second, and another new Account object in the third. |
| List<Contact> contacts = new List<Contact>                                   (otherList); | Defines the Contact list with a new list. |

## Code Examples

```apex
// Create an empty list of Accounts
List<Account> myList = new List<Account>();
```

```apex
// Create a list of account records from a SOQL query
List<Account> accts = [SELECT Id, Name FROM Account LIMIT 1000];
```

```apex
List<Account> myList = new List<Account>(); // Define a new list
Account a = new Account(Name='Acme'); // Create the account first
myList.add(a);                    // Add the account sObject
Account a2 = myList.get(0);      // Retrieve the element at index 0
```

```apex
// Define the list
List<Account> acctList = new List<Account>(); 
// Create account sObjects
Account a1 = new Account(Name='Account1'); 
Account a2 = new Account(Name='Account2'); 
// Add accounts to the list
acctList.add(a1);
acctList.add(a2);
// Bulk insert the list
insert acctList;
```

```apex
try {

   // Create a list with two references to the same sObject element
   Account a = new Account();
   List<Account> accs = new List<Account>{a, a};

   // Attempt to insert it...
   insert accs;

   // Will not get here
   System.assert(false);
} catch (ListException e) {
   // But will get here
}
```
