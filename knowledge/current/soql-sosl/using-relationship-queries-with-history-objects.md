---
title: "Using Relationship Queries with History Objects"
domain: soql-sosl
topic: using-relationship-queries-with-history-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.585Z
estimatedTokens: 128
keywords: [Relationship, Queries, History, Objects, Custom, standard, associated, tracks, changes, record, SOQL, traverse, parent]
---

# Using Relationship Queries with History Objects

> Custom objects and some standard objects have an associated history object that tracks
  changes to an object record. You can use SOQL relationship queries to traverse a history object to
  its parent object.

# Using Relationship Queries with History Objects

Custom objects and some standard objects have an associated history object that tracks changes to an object record. You can use SOQL relationship queries to traverse a history object to its parent object.

For example, the following query returns every history row for Foo\_\_c and displays the name and custom fields of Foo:

```

```

This example query returns every Foo object row together with the corresponding history rows in nested subqueries:

```

```

## Code Examples

```
SELECT OldValue, NewValue, Parent.Id, Parent.name, Parent.customfield__c 
FROM foo__history
```

```
SELECT Name, customfield__c, (SELECT OldValue, NewValue FROM foo__history) 
FROM foo__c
```
