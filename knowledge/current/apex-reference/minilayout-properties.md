---
title: "MiniLayout Properties"
domain: apex-reference
topic: minilayout-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.990Z
keywords: [MiniLayout, Properties, fields, mini-layout, listed, order, they, appear, UI., Fields, must, main, layout., Signature, Property, Value, relatedLists]
---

# MiniLayout Properties

> The fields for the mini-layout, listed in the order they appear in the
      UI. Fields that appear in the mini-layout must appear in the main layout.

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