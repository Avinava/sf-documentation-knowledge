---
title: "SidebarComponent Properties"
domain: apex-reference
topic: sidebarcomponent-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.059Z
keywords: [SidebarComponent, Properties, Specifies, component, type., Valid, values, “KnowledgeOne”, “Lookup”, “Milestones”, “RelatedList”, “Topics”, “Files”, “CaseExperts”., componentType, Signature, Property, Value, createAction, enableLinking]
---

# SidebarComponent Properties

> Specifies the component type. Valid values are “KnowledgeOne”,
      “Lookup”, “Milestones”, “RelatedList”, “Topics”, “Files”, and “CaseExperts”.

## SidebarComponent Properties

The following are properties for SidebarComponent.

-   **[componentType](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_componentType)**  
    Specifies the component type. Valid values are “KnowledgeOne”, “Lookup”, “Milestones”, “RelatedList”, “Topics”, “Files”, and “CaseExperts”.
-   **[createAction](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_createAction)**  
    If the component is a lookup field, the name of the quick action used to create a record.
-   **[enableLinking](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_enableLinking)**  
    If the component is a lookup field, lets users associate a record with this field.
-   **[height](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_height)**  
    The height of the component in the container. The unit property determines the unit of measurement, in pixels or percent.
-   **[knowledgeOneEnable](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_knowledgeOneEnable)**  
    Indicates if the component is enabled for Knowledge One.
-   **[label](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_label)**  
    The name of the component as it displays to console users. Available for components in a container with the style of tabs or accordion.
-   **[lookup](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_lookup)**  
    If the component is a lookup field, the name of the field.
-   **[page\_x](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_page_x)**  
    If the component is a Visualforce page, the name of the Visualforce page.
-   **[relatedLists](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_relatedLists)**  
    If the component is a related list component, the list of related list names.
-   **[unit](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_unit)**  
    The unit of measurement (pixels or percent) for the height and width of the component in the container.
-   **[updateAction](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_updateAction)**  
    If the component is a lookup field, the name of the quick action used to update a record.
-   **[width](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_Metadata_SidebarComponent_width)**  
    The width of the component in the container. The unit property determines the unit of measurement, in pixels or percent.

### componentType

Specifies the component type. Valid values are “KnowledgeOne”, “Lookup”, “Milestones”, “RelatedList”, “Topics”, “Files”, and “CaseExperts”.

#### Signature

public String componentType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### createAction

If the component is a lookup field, the name of the quick action used to create a record.

#### Signature

public String createAction {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### enableLinking

If the component is a lookup field, lets users associate a record with this field.

#### Signature

public Boolean enableLinking {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### height

The height of the component in the container. The unit property determines the unit of measurement, in pixels or percent.

#### Signature

public Integer height {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### knowledgeOneEnable

Indicates if the component is enabled for Knowledge One.

#### Signature

public Boolean knowledgeOneEnable {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### label

The name of the component as it displays to console users. Available for components in a container with the style of tabs or accordion.

#### Signature

public String label {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lookup

If the component is a lookup field, the name of the field.

#### Signature

public String lookup {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### page\_x

If the component is a Visualforce page, the name of the Visualforce page.

#### Signature

public String page\_x {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### relatedLists

If the component is a related list component, the list of related list names.

#### Signature

public List<Metadata.RelatedList> relatedLists {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.RelatedList](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm#apex_class_Metadata_RelatedList "Represents related list custom components on the sidebars of the Salesforce console.")\>

### unit

The unit of measurement (pixels or percent) for the height and width of the component in the container.

#### Signature

public String unit {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### updateAction

If the component is a lookup field, the name of the quick action used to update a record.

#### Signature

public String updateAction {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### width

The width of the component in the container. The unit property determines the unit of measurement, in pixels or percent.

#### Signature

public Integer width {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")