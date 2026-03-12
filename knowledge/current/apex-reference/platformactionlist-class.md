---
title: "PlatformActionList Class"
domain: apex-reference
topic: platformactionlist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.986Z
estimatedTokens: 928
namespace: Metadata
keywords: [PlatformActionList, actions, their, order, display, Salesforce, mobile, action, bar, layout, Usage, actionListContext, platformActionListItems, relatedSourceEntity, clone]
---

# PlatformActionList Class

> Represents the list of actions, and their order, that display in the
      Salesforce mobile action bar for the layout.

**Namespace:** `Metadata`

# PlatformActionList Class

Represents the list of actions, and their order, that display in the Salesforce mobile action bar for the layout.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “PlatformActionList” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[PlatformActionList Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_properties)**

-   **[PlatformActionList Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_methods)**


## PlatformActionList Properties

The following are properties for PlatformActionList.

-   **[actionListContext](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_actionListContext)**
    The context of the action list.
-   **[platformActionListItems](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_platformActionListItems)**
    The actions in the platform action list.
-   **[relatedSourceEntity](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_relatedSourceEntity)**
    When the actionListContext property is “RelatedList” or” “RelatedListRecord”, this field represents the API name of the related list to which the action belongs.

### actionListContext

The context of the action list.

#### Signature

public Metadata.PlatformActionListContextEnum actionListContext {get; set;}

#### Property Value

Type: [Metadata.PlatformActionListContextEnum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_PlatformActionListContextEnum.htm#apex_enum_Metadata_PlatformActionListContextEnum "Describes the different contexts of action lists.")

### platformActionListItems

The actions in the platform action list.

#### Signature

public List<Metadata.PlatformActionListItem> platformActionListItems {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.PlatformActionListItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionListItem.htm#apex_class_Metadata_PlatformActionListItem "Represents an action in the platform action list for a layout.")\>

### relatedSourceEntity

When the actionListContext property is “RelatedList” or” “RelatedListRecord”, this field represents the API name of the related list to which the action belongs.

#### Signature

public String relatedSourceEntity {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## PlatformActionList Methods

The following are methods for PlatformActionList.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm#apex_Metadata_PlatformActionList_clone)**
    Makes a duplicate copy of the Metadata.PlatformActionList.

### clone()

Makes a duplicate copy of the Metadata.PlatformActionList.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- PlatformActionList Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm)
- PlatformActionList Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm)
- actionListContext (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm)
- platformActionListItems (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm)
- relatedSourceEntity (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionList.htm)
- Metadata.PlatformActionListContextEnum (atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_PlatformActionListContextEnum.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Metadata.PlatformActionListItem (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionListItem.htm)
