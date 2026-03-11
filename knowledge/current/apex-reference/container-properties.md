---
title: "Container Properties"
domain: apex-reference
topic: container-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.836Z
keywords: [Container, Properties, height, component’s, container., unit, property, determines, measurement, pixels, percent., Signature, Property, Value, isContainerAutoSizeEnabled, region, sidebarComponents, style, width]
---

# Container Properties

> The height of the component’s container. The unit property determines the unit of measurement, in pixels or
      percent.

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