---
title: "QueryLocatorIterator Methods"
domain: apex-reference
topic: querylocatoriterator-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.429Z
keywords: [QueryLocatorIterator, Methods, Returns, true, there, records, remaining, collection, otherwise, returns, false., hasNext, Signature, Return, Value, next, Usage, Example]
---

# QueryLocatorIterator Methods

> Returns true if
there are one or more records remaining in the collection; otherwise,
returns false.

## QueryLocatorIterator Methods

The following are methods for QueryLocatorIterator. All are instance methods.

-   **[hasNext()](atlas.en-us.apexref.meta/apexref/apex_class_database_querylocatoriterator.htm#apex_Database_QueryLocatorIterator_hasNext)**  
    Returns true if there are one or more records remaining in the collection; otherwise, returns false.
-   **[next()](atlas.en-us.apexref.meta/apexref/apex_class_database_querylocatoriterator.htm#apex_Database_QueryLocatorIterator_next)**  
    Advances the iterator to the next sObject record and returns the sObject.

### hasNext()

Returns true if there are one or more records remaining in the collection; otherwise, returns false.

#### Signature

public Boolean hasNext()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### next()

Advances the iterator to the next sObject record and returns the sObject.

#### Signature

public sObject next()

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Usage

Because the return value is the generic sObject type, you must cast it if using a more specific type. For example:

```

```

#### Example

```

```