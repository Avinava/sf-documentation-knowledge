---
title: "QueryLocator Class"
domain: apex-reference
topic: querylocator-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.561Z
estimatedTokens: 619
namespace: Database
keywords: [QueryLocator, record, Database.getQueryLocator, Batch, Apex, getQuery, Usage, iterator]
---

# QueryLocator Class

> Represents the record set returned by Database.getQueryLocator and used with Batch Apex.

**Namespace:** `Database`

# QueryLocator Class

Represents the record set returned by Database.getQueryLocator and used with Batch Apex.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## QueryLocator Methods

The following are methods for QueryLocator. All are instance methods.

-   **[getQuery()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_Database_QueryLocator_getQuery)**
    Returns the query used to instantiate the Database.QueryLocator object. This is useful when testing the start method.
-   **[iterator()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_Database_QueryLocator_iterator)**
    Returns a new instance of a query locator iterator.

### getQuery()

Returns the query used to instantiate the Database.QueryLocator object. This is useful when testing the start method.

#### Signature

public String getQuery()

#### Return Value

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm)

#### Usage

You can’t use the [FOR UPDATE keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_locking_statements.htm) with a getQueryLocator query to lock a set of records. The set of records in the batch is determined when the start method is run.

#### Example

```

```

### iterator()

Returns a new instance of a query locator iterator.

#### Signature

public Database.QueryLocatorIterator iterator()

#### Return Value

Type: [Database.QueryLocatorIterator](atlas.en-us.apexref.meta/apexref/apex_class_database_querylocatoriterator.htm#apex_class_database_querylocatoriterator "Represents an iterator over a query locator record set.")

#### Usage

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

To iterate over a query locator, save the iterator instance that this method returns in a variable and then use this variable to iterate over the collection. Calling iterator every time you want to perform an iteration can result in incorrect behavior because each call returns a new iterator instance.

For an example, see [QueryLocatorIterator Class](atlas.en-us.apexref.meta/apexref/apex_class_database_querylocatoriterator.htm#apex_class_database_querylocatoriterator "Represents an iterator over a query locator record set.").

## Code Examples

```apex
System.assertEquals(QLReturnedFromStart.
getQuery(),
Database.getQueryLocator([SELECT Id
   FROM Account]).getQuery() );
```

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- getQuery() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm)
- iterator() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm)
- Database.QueryLocatorIterator (atlas.en-us.apexref.meta/apexref/apex_class_database_querylocatoriterator.htm)
- QueryLocatorIterator Class (atlas.en-us.apexref.meta/apexref/apex_class_database_querylocatoriterator.htm)
