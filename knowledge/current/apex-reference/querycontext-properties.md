---
title: "QueryContext Properties"
domain: apex-reference
topic: querycontext-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.600Z
keywords: [QueryContext, Properties, Query, token, that’s, used, server-driven, paging, determine, fetch, subsequent, batch, results., queryMoreToken, Signature, Property, Value, tableSelection]
---

# QueryContext Properties

> Query token that’s used for server-driven paging to determine and
      fetch the subsequent batch of results.

## QueryContext Properties

The following are properties for QueryContext.

-   **[queryMoreToken](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_DataSource_QueryContext_queryMoreToken)**  
    Query token that’s used for server-driven paging to determine and fetch the subsequent batch of results.
-   **[tableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm#apex_DataSource_QueryContext_tableSelection)**  
    Query details that represent the FROM, ORDER BY, SELECT, and WHERE clauses in a SOQL or SOSL query.

### queryMoreToken

Query token that’s used for server-driven paging to determine and fetch the subsequent batch of results.

#### Signature

public String queryMoreToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### tableSelection

Query details that represent the FROM, ORDER BY, SELECT, and WHERE clauses in a SOQL or SOSL query.

#### Signature

public DataSource.TableSelection tableSelection {get; set;}

#### Property Value

Type: [DataSource.TableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection "Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.")