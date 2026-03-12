---
title: "Container Class"
domain: apex-reference
topic: container-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.295Z
estimatedTokens: 1443
namespace: Metadata
keywords: [Container, Represents, location, style, which, display, custom, console, component, sidebars, console., Usage, height, isContainerAutoSizeEnabled, region, sidebarComponents, unit, width, clone]
---

# Container Class

> Represents a location and style in which to display more than one
      custom console component in the sidebars of the console.

**Namespace:** `Metadata`

# Container Class

Represents a location and style in which to display more than one custom console component in the sidebars of the console.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “Container” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[Container Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_properties)**

-   **[Container Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_methods)**


## Container Properties

The following are properties for Container.

-   **[height](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_height)**
    The height of the component’s container. The unit property determines the unit of measurement, in pixels or percent.
-   **[isContainerAutoSizeEnabled](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_isContainerAutoSizeEnabled)**
    If set to true, stacked console components in the sidebars autosize vertically.
-   **[region](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_region)**
    The location of the component’s container (right, left, bottom, top).
-   **[sidebarComponents](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_sidebarComponents)**
    Represents a specific custom console component to display in the components’ container.
-   **[style](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_style)**
    The style of the container in which to display multiple components (stack, tab, accordion).
-   **[unit](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_unit)**
    The unit of measurement, in pixels or percent, for the height or width of the components’ container.
-   **[width](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_width)**
    The width of the component’s container. The unit property determines the unit of measurement, in pixels or percent.

### height

The height of the component’s container. The unit property determines the unit of measurement, in pixels or percent.

#### Signature

public Integer height {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isContainerAutoSizeEnabled

If set to true, stacked console components in the sidebars autosize vertically.

#### Signature

public Boolean isContainerAutoSizeEnabled {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### region

The location of the component’s container (right, left, bottom, top).

#### Signature

public String region {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### sidebarComponents

Represents a specific custom console component to display in the components’ container.

#### Signature

public List<Metadata.SidebarComponent> sidebarComponents {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.SidebarComponent](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SidebarComponent.htm#apex_class_Metadata_SidebarComponent "Represents a specific custom console component to display in a container that hosts multiple components in one of the sidebars of the Salesforce console.")\>

### style

The style of the container in which to display multiple components (stack, tab, accordion).

#### Signature

public String style {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### unit

The unit of measurement, in pixels or percent, for the height or width of the components’ container.

#### Signature

public String unit {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### width

The width of the component’s container. The unit property determines the unit of measurement, in pixels or percent.

#### Signature

public Integer width {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

## Container Methods

The following are methods for Container.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm#apex_Metadata_Container_clone)**
    Makes a duplicate copy of the Metadata.Container.

### clone()

Makes a duplicate copy of the Metadata.Container.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- Container Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- Container Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- height (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- isContainerAutoSizeEnabled (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- region (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- sidebarComponents (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- style (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
- unit (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Container.htm)
