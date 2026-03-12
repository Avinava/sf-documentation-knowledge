---
title: "UpsertContext Class"
domain: apex-reference
topic: upsertcontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.587Z
estimatedTokens: 502
namespace: DataSource
keywords: [UpsertContext, instance, passed, upsertRows, Datasource.Connection, context, upsert, implementor, Usage, rows, tableSelected]
---

# UpsertContext Class

> An instance of UpsertContext
      is passed to the upsertRows() method on your Datasource.Connection class. This class provides context
      information about the upsert request to the implementor of upsertRows().

**Namespace:** `DataSource`

# UpsertContext Class

An instance of UpsertContext is passed to the upsertRows() method on your Datasource.Connection class. This class provides context information about the upsert request to the implementor of upsertRows().

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

The Apex Connector Framework creates the contet for operations. Context is comprised of parameters about the operations, which other methods can use. An instance of the UpsertContext class packages these parameters into an object that can be used when an upsertRows() operation is initiated.

-   **[UpsertContext Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertContext.htm#apex_DataSource_UpsertContext_properties)**


## UpsertContext Properties

The following are properties for UpsertContext.

-   **[rows](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertContext.htm#apex_DataSource_UpsertContext_rows)**
    List of rows corresponding to the external object records to upsert.
-   **[tableSelected](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertContext.htm#apex_DataSource_UpsertContext_tableSelected)**
    The name of the table to upsert rows in.

### rows

List of rows corresponding to the external object records to upsert.

#### Signature

public List<Map<String,ANY>> rows {get; set;}

#### Property Value

Type: List<Map<String,Object>>

### tableSelected

The name of the table to upsert rows in.

#### Signature

public String tableSelected {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- UpsertContext Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertContext.htm)
- rows (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertContext.htm)
- tableSelected (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_UpsertContext.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
