---
title: "QuickActionList Class"
domain: apex-reference
topic: quickactionlist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.004Z
estimatedTokens: 548
namespace: Metadata
keywords: [QuickActionList, actions, associated, layout, Usage, quickActionListItems, clone]
---

# QuickActionList Class

> Represents the list of actions associated with the page
    layout.

**Namespace:** `Metadata`

# QuickActionList Class

Represents the list of actions associated with the page layout.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “QuickActionList” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[QuickActionList Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm#apex_Metadata_QuickActionList_properties)**

-   **[QuickActionList Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm#apex_Metadata_QuickActionList_methods)**


## QuickActionList Properties

The following are properties for QuickActionList.

-   **[quickActionListItems](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm#apex_Metadata_QuickActionList_quickActionListItems)**
    List of QuickActionList objects.

### quickActionListItems

List of QuickActionList objects.

#### Signature

public List<Metadata.QuickActionListItem> quickActionListItems {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.QuickActionListItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionListItem.htm#apex_class_Metadata_QuickActionListItem "Represents an action in the QuickActionList.")\>

## QuickActionList Methods

The following are methods for QuickActionList.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm#apex_Metadata_QuickActionList_clone)**
    Makes a duplicate copy of the Metadata.QuickActionList.

### clone()

Makes a duplicate copy of the Metadata.QuickActionList.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- QuickActionList Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm)
- QuickActionList Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm)
- quickActionListItems (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Metadata.QuickActionListItem (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionListItem.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_QuickActionList.htm)
