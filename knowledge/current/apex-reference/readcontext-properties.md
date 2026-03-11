---
title: "ReadContext Properties"
domain: apex-reference
topic: readcontext-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.612Z
keywords: [ReadContext, Properties, Maximum, number, rows, query, return., maxResults, Signature, Property, Value, metadata, offset]
---

# ReadContext Properties

> Maximum number of rows that the query can return.

## ReadContext Properties

The following are properties for ReadContext.

-   **[maxResults](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ReadContext.htm#apex_DataSource_ReadContext_maxResults)**  
    Maximum number of rows that the query can return.
-   **[metadata](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ReadContext.htm#apex_DataSource_ReadContext_metadata)**  
    Describes the external system’s tables to query.
-   **[offset](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ReadContext.htm#apex_DataSource_ReadContext_offset)**  
    The starting row offset into the query’s result set. Used for client-driven paging.

### maxResults

Maximum number of rows that the query can return.

#### Signature

public Integer maxResults {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### metadata

Describes the external system’s tables to query.

#### Signature

public List<DataSource.Table> metadata {get; set;}

#### Property Value

Type: List<[DataSource.Table](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_class_DataSource_Table "Describes a table on an external system that the Salesforce Connect custom adapter connects to. This class extends the DataSourceUtil class and inherits its methods.")\>

### offset

The starting row offset into the query’s result set. Used for client-driven paging.

#### Signature

public Integer offset {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")