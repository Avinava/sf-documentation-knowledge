---
title: "LayoutColumn Properties"
domain: apex-reference
topic: layoutcolumn-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.944Z
keywords: [LayoutColumn, Properties, individual, items, within, column, ordered, top, bottom, layoutItems, Signature, Property, Value, reserved]
---

# LayoutColumn Properties

> The individual items within a column (ordered from top to
      bottom).

## LayoutColumn Properties

The following are properties for LayoutColumn.

-   **[layoutItems](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm#apex_Metadata_LayoutColumn_layoutItems)**  
    The individual items within a column (ordered from top to bottom).
-   **[reserved](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm#apex_Metadata_LayoutColumn_reserved)**  
    This field is reserved for Salesforce.

### layoutItems

The individual items within a column (ordered from top to bottom).

#### Signature

public List<Metadata.LayoutItem> layoutItems {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.LayoutItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_class_Metadata_LayoutItem "Represents the valid values that define a layout item.")\>

### reserved

This field is reserved for Salesforce.

#### Signature

public String reserved {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")