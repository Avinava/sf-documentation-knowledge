---
title: "ReadContext Class"
domain: apex-reference
topic: readcontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.000Z
estimatedTokens: 587
namespace: DataSource
keywords: [ReadContext, Abstract, base, QueryContext, SearchContext, classes., maxResults, metadata, offset]
---

# ReadContext Class

> Abstract base class for the QueryContext and SearchContext
  classes.

**Namespace:** `DataSource`

# ReadContext Class

Abstract base class for the QueryContext and SearchContext classes.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

-   **[ReadContext Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ReadContext.htm#apex_DataSource_ReadContext_properties)**


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

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- ReadContext Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ReadContext.htm)
- maxResults (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ReadContext.htm)
- metadata (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ReadContext.htm)
- offset (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ReadContext.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- DataSource.Table (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm)
