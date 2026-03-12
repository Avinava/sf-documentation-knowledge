---
title: "PrimaryTabComponents Class"
domain: apex-reference
topic: primarytabcomponents-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.517Z
estimatedTokens: 841
namespace: Metadata
keywords: [PrimaryTabComponents, Represents, custom, console, components, primary, tabs, Salesforce, console., Usage, component, containers, clone]
---

# PrimaryTabComponents Class

> Represents custom console components on primary tabs in the Salesforce
    console.

**Namespace:** `Metadata`

# PrimaryTabComponents Class

Represents custom console components on primary tabs in the Salesforce console.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “PrimaryTabComponents” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[PrimaryTabComponents Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm#apex_Metadata_PrimaryTabComponents_properties)**

-   **[PrimaryTabComponents Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm#apex_Metadata_PrimaryTabComponents_methods)**


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

## PrimaryTabComponents Methods

The following are methods for PrimaryTabComponents.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm#apex_Metadata_PrimaryTabComponents_clone)**
    Makes a duplicate copy of the Metadata.PrimaryTabComponents.

### clone()

Makes a duplicate copy of the Metadata.PrimaryTabComponents.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- PrimaryTabComponents Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm)
- PrimaryTabComponents Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm)
- component (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm)
- containers (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Metadata.ConsoleComponent (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ConsoleComponent.htm)
- Metadata.Container (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm)
