---
title: "PlatformActionList Properties"
domain: apex-reference
topic: platformactionlist-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.004Z
keywords: [PlatformActionList, Properties, context, action, list., actionListContext, Signature, Property, Value, platformActionListItems, relatedSourceEntity]
---

# PlatformActionList Properties

> The context of the action list.

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