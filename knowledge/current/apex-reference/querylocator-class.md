---
title: "QueryLocator Class"
domain: apex-reference
topic: querylocator-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.179Z
keywords: [QueryLocator, Class, Returns, new, instance, query, locator, iterator., iterator, Signature, Return, Value, Usage, Warning]
---

# QueryLocator Class

> Returns a new instance of a query locator iterator.

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