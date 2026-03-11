---
title: "PrimaryTabComponents Properties"
domain: apex-reference
topic: primarytabcomponents-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.014Z
keywords: [PrimaryTabComponents, Properties, Represents, custom, console, component, Visualforce, page, lookup, field, related, lists, section, layout., Signature, Property, Value, containers]
---

# PrimaryTabComponents Properties

> Represents a custom console component (Visualforce page, lookup field,
      or related lists) on a section of a page layout.

## PrimaryTabComponents Properties

The following are properties for PrimaryTabComponents.

-   **[component](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm#apex_Metadata_PrimaryTabComponents_component)**  
    Represents a custom console component (Visualforce page, lookup field, or related lists) on a section of a page layout.
-   **[containers](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm#apex_Metadata_PrimaryTabComponents_containers)**  
    Represents a location and style in which to display more than one custom console component on the sidebars of the Salesforce console.

### component

Represents a custom console component (Visualforce page, lookup field, or related lists) on a section of a page layout.

#### Signature

public List<Metadata.ConsoleComponent> component {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.ConsoleComponent](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm#apex_class_Metadata_ConsoleComponent "Represents a custom console component on a section of a page layout.")\>

### containers

Represents a location and style in which to display more than one custom console component on the sidebars of the Salesforce console.

#### Signature

public List<Metadata.Container> containers {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.Container](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_class_Metadata_Container "Represents a location and style in which to display more than one custom console component in the sidebars of the console.")\>