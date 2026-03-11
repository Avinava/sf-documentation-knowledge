---
title: "DeleteContext Properties"
domain: apex-reference
topic: deletecontext-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.571Z
keywords: [DeleteContext, Properties, external, IDs, rows, representing, object, records, delete., externalIds, Signature, Property, Value, tableSelected]
---

# DeleteContext Properties

> The external IDs of the rows representing external object records to
      delete.

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