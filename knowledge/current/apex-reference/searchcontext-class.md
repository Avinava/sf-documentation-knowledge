---
title: "SearchContext Class"
domain: apex-reference
topic: searchcontext-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:33.618Z
keywords: [SearchContext, Class, List, queries, their, details., details, represent, ORDER, SELECT, WHERE, clauses, SOQL, SOSL, query., tableSelections, Signature, Property, Value]
---

# SearchContext Class

> List of queries and their details. The details represent the FROM,
      ORDER BY, SELECT, and WHERE clauses in each SOQL or SOSL query.

### tableSelections

List of queries and their details. The details represent the FROM, ORDER BY, SELECT, and WHERE clauses in each SOQL or SOSL query.

#### Signature

public List<DataSource.TableSelection> tableSelections {get; set;}

#### Property Value

Type: List<[DataSource.TableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection "Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.")\>