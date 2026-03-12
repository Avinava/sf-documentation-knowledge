---
title: "DeleteContext Class"
domain: apex-reference
topic: deletecontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.942Z
estimatedTokens: 507
namespace: DataSource
keywords: [DeleteContext, instance, passed, deleteRows, Database.Connection, class., provides, context, information, delete, request, implementor, Usage, externalIds, tableSelected]
---

# DeleteContext Class

> An instance of DeleteContext
      is passed to the deleteRows() method on your Database.Connection class. The class provides context
      information about the delete request to the implementor of deleteRows().

**Namespace:** `DataSource`

# DeleteContext Class

An instance of DeleteContext is passed to the deleteRows() method on your Database.Connection class. The class provides context information about the delete request to the implementor of deleteRows().

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

The Apex Connector Framework creates context for operations. Context is comprised of parameters about the operations, which other methods can use. An instance of the DeleteContext class packages these parameters into an object that can be used when a deleteRows() operation is initiated.

-   **[DeleteContext Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteContext.htm#apex_DataSource_DeleteContext_properties)**


## DeleteContext Properties

The following are properties for DeleteContext.

-   **[externalIds](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteContext.htm#apex_DataSource_DeleteContext_externalIds)**
    The external IDs of the rows representing external object records to delete.
-   **[tableSelected](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteContext.htm#apex_DataSource_DeleteContext_tableSelected)**
    The name of the table to delete rows from.

### externalIds

The external IDs of the rows representing external object records to delete.

#### Signature

public List<String\> externalIds {get; set;}

#### Property Value

Type: List<String>

### tableSelected

The name of the table to delete rows from.

#### Signature

public String tableSelected {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- DeleteContext Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteContext.htm)
- externalIds (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteContext.htm)
- tableSelected (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_DeleteContext.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
