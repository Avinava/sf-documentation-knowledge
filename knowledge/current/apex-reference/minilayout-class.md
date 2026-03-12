---
title: "MiniLayout Class"
domain: apex-reference
topic: minilayout-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.970Z
estimatedTokens: 804
namespace: Metadata
keywords: [MiniLayout, mini, view, record, Console, tab, hover, event, overlays, Usage, relatedLists, clone]
---

# MiniLayout Class

> Represents a mini view of a record in the Console tab, hover details,
      and event overlays.

**Namespace:** `Metadata`

# MiniLayout Class

Represents a mini view of a record in the Console tab, hover details, and event overlays.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “MiniLayout” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[MiniLayout Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm#apex_Metadata_MiniLayout_properties)**

-   **[MiniLayout Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm#apex_Metadata_MiniLayout_methods)**


## MiniLayout Properties

The following are properties for MiniLayout.

-   **[fields](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm#apex_Metadata_MiniLayout_fields)**
    The fields for the mini-layout, listed in the order they appear in the UI. Fields that appear in the mini-layout must appear in the main layout.
-   **[relatedLists](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm#apex_Metadata_MiniLayout_relatedLists)**
    The mini related lists, listed in the order they appear in the UI. You cannot set sorting on mini related lists. Fields that appear in the mini related lists must appear in the main layout.

### fields

The fields for the mini-layout, listed in the order they appear in the UI. Fields that appear in the mini-layout must appear in the main layout.

#### Signature

public List<String\> fields {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### relatedLists

The mini related lists, listed in the order they appear in the UI. You cannot set sorting on mini related lists. Fields that appear in the mini related lists must appear in the main layout.

#### Signature

public List<Metadata.RelatedListItem> relatedLists {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.RelatedListItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm#apex_class_Metadata_RelatedListItem "Represents an item in the related list in a page layout.")\>

## MiniLayout Methods

The following are methods for MiniLayout.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm#apex_Metadata_MiniLayout_clone)**
    Makes a duplicate copy of the Metadata.MiniLayout.

### clone()

Makes a duplicate copy of the Metadata.MiniLayout.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- MiniLayout Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm)
- MiniLayout Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm)
- fields (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm)
- relatedLists (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Metadata.RelatedListItem (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedListItem.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MiniLayout.htm)
