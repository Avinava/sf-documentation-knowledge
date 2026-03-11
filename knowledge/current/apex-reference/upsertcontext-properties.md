---
title: "UpsertContext Properties"
domain: apex-reference
topic: upsertcontext-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.659Z
keywords: [UpsertContext, Properties, List, rows, corresponding, external, object, records, upsert., Signature, Property, Value, tableSelected]
---

# UpsertContext Properties

> List of rows corresponding to the external object records to
      upsert.

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