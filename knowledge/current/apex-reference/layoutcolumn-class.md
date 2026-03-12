---
title: "LayoutColumn Class"
domain: apex-reference
topic: layoutcolumn-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.934Z
estimatedTokens: 649
namespace: Metadata
keywords: [LayoutColumn, items, column, layout, Usage, layoutItems, reserved, clone]
---

# LayoutColumn Class

> Represents the items in a column within a layout
    section.

**Namespace:** `Metadata`

# LayoutColumn Class

Represents the items in a column within a layout section.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “LayoutColumn” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[LayoutColumn Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm#apex_Metadata_LayoutColumn_properties)**

-   **[LayoutColumn Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm#apex_Metadata_LayoutColumn_methods)**


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

## LayoutColumn Methods

The following are methods for LayoutColumn.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm#apex_Metadata_LayoutColumn_clone)**
    Makes a duplicate copy of the Metadata.LayoutColumn.

### clone()

Makes a duplicate copy of the Metadata.LayoutColumn.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- LayoutColumn Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm)
- LayoutColumn Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm)
- layoutItems (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm)
- reserved (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Metadata.LayoutItem (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutColumn.htm)
