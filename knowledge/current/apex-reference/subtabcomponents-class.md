---
title: "SubtabComponents Class"
domain: apex-reference
topic: subtabcomponents-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.590Z
estimatedTokens: 820
namespace: Metadata
keywords: [SubtabComponents, Represents, custom, console, components, subtabs, Salesforce, console., Usage, component, containers, clone]
---

# SubtabComponents Class

> Represents custom console components on subtabs in the Salesforce
    console.

**Namespace:** `Metadata`

# SubtabComponents Class

Represents custom console components on subtabs in the Salesforce console.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “SubtabComponents” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[SubtabComponents Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm#apex_Metadata_SubtabComponents_properties)**

-   **[SubtabComponents Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm#apex_Metadata_SubtabComponents_methods)**


## SubtabComponents Properties

The following are properties for SubtabComponents.

-   **[component](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm#apex_Metadata_SubtabComponents_component)**
    Represents a custom console component (Visualforce page, lookup field, or related lists) on a section of a page layout.
-   **[containers](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm#apex_Metadata_SubtabComponents_containers)**
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

## SubtabComponents Methods

The following are methods for SubtabComponents.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm#apex_Metadata_SubtabComponents_clone)**
    Makes a duplicate copy of the Metadata.SubtabComponents.

### clone()

Makes a duplicate copy of the Metadata.SubtabComponents.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- SubtabComponents Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm)
- SubtabComponents Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm)
- component (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm)
- containers (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Metadata.ConsoleComponent (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm)
- Metadata.Container (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm)
