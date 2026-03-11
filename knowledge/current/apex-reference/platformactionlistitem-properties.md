---
title: "PlatformActionListItem Properties"
domain: apex-reference
topic: platformactionlistitem-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.010Z
keywords: [PlatformActionListItem, Properties, API, name, action, list., actionName, Signature, Property, Value, actionType, sortOrder, subtype]
---

# PlatformActionListItem Properties

> The API name for the action in the list.

## PlatformActionListItem Properties

The following are properties for PlatformActionListItem.

-   **[actionName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionListItem.htm#apex_Metadata_PlatformActionListItem_actionName)**  
    The API name for the action in the list.
-   **[actionType](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionListItem.htm#apex_Metadata_PlatformActionListItem_actionType)**  
    The type of action.
-   **[sortOrder](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionListItem.htm#apex_Metadata_PlatformActionListItem_sortOrder)**  
    The placement of the action in the list.
-   **[subtype](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PlatformActionListItem.htm#apex_Metadata_PlatformActionListItem_subtype)**  
    The subtype of the action.

### actionName

The API name for the action in the list.

#### Signature

public String actionName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### actionType

The type of action.

#### Signature

public Metadata.PlatformActionTypeEnum actionType {get; set;}

#### Property Value

Type: [Metadata.PlatformActionTypeEnum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_PlatformActionTypeEnum.htm#apex_enum_Metadata_PlatformActionTypeEnum "The type of action for a PlatformActionListItem.")

### sortOrder

The placement of the action in the list.

#### Signature

public Integer sortOrder {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### subtype

The subtype of the action.

#### Signature

public String subtype {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")