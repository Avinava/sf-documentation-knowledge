---
title: "LayoutItem Class"
domain: apex-reference
topic: layoutitem-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.947Z
estimatedTokens: 2180
namespace: Metadata
keywords: [LayoutItem, define, layout, item, Usage, analyticsCloudComponent, behavior, canvas, component, customLink, emptySpace, height, reportChartComponent, scontrol, showLabel]
---

# LayoutItem Class

> Represents the valid values that define a layout
    item.

**Namespace:** `Metadata`

# LayoutItem Class

Represents the valid values that define a layout item.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “LayoutItem” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[LayoutItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_properties)**

-   **[LayoutItem Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_methods)**


## LayoutItem Properties

The following are properties for LayoutItem.

-   **[analyticsCloudComponent](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_analyticsCloudComponent)**
    A Wave Analytics dashboard component on a page.
-   **[behavior](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_behavior)**
    Determines the field behavior.
-   **[canvas](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_canvas)**
    References a canvas app.
-   **[component](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_component)**
    References a component.
-   **[customLink](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_customLink)**
    The custom link reference.
-   **[emptySpace](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_emptySpace)**
    Controls if this layout item is a blank space.
-   **[field](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_field)**
    The field name reference, relative to the layout, for example “Description” or “MyField\_\_c”.
-   **[height](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_height)**
    For s-controls and pages only, the height in pixels.
-   **[page\_x](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_page_x)**
    Reference to a Visualforce page.
-   **[reportChartComponent](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_reportChartComponent)**
    Refers to a report chart that you can add to a standard or custom object page.
-   **[scontrol](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_scontrol)**
    Reference to an s-control.
-   **[showLabel](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_showLabel)**
    For s-control and pages only, whether to show the label.
-   **[showScrollbars](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_showScrollbars)**
    For s-control and pages only, whether to show scrollbars.
-   **[width](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_width)**
    For s-control and pages only, the width in pixels or percent. Pixel values are simply the number of pixels, for example, 500. Percentage values must include the percent sign, for example, 20%.

### analyticsCloudComponent

A Wave Analytics dashboard component on a page.

#### Signature

public Metadata.AnalyticsCloudComponentLayoutItem analyticsCloudComponent {get; set;}

#### Property Value

Type: [Metadata.AnalyticsCloudComponentLayoutItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_AnalyticsCloudComponentLayoutItem.htm#apex_class_Metadata_AnalyticsCloudComponentLayoutItem "Represents the settings for a Wave Analytics dashboard on a standard or custom page.")

### behavior

Determines the field behavior.

#### Signature

public Metadata.UiBehavior behavior {get; set;}

#### Property Value

Type: [Metadata.UiBehavior](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_UiBehavior.htm#apex_enum_Metadata_UiBehavior "Describes the behavior for a layout item on a layout page.")

### canvas

References a canvas app.

#### Signature

public String canvas {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### component

References a component.

#### Signature

public String component {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### customLink

The custom link reference.

#### Signature

public String customLink {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### emptySpace

Controls if this layout item is a blank space.

#### Signature

public Boolean emptySpace {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### field

The field name reference, relative to the layout, for example “Description” or “MyField\_\_c”.

#### Signature

public String field {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### height

For s-controls and pages only, the height in pixels.

#### Signature

public Integer height {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### page\_x

Reference to a Visualforce page.

#### Signature

public String page\_x {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### reportChartComponent

Refers to a report chart that you can add to a standard or custom object page.

#### Signature

public Metadata.ReportChartComponentLayoutItem reportChartComponent {get; set;}

#### Property Value

Type: [Metadata.ReportChartComponentLayoutItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_ReportChartComponentLayoutItem.htm#apex_class_Metadata_ReportChartComponentLayoutItem "Represents the settings for a report chart on a standard or custom page.")

### scontrol

Reference to an s-control.

#### Signature

public String scontrol {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### showLabel

For s-control and pages only, whether to show the label.

#### Signature

public Boolean showLabel {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### showScrollbars

For s-control and pages only, whether to show scrollbars.

#### Signature

public Boolean showScrollbars {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### width

For s-control and pages only, the width in pixels or percent. Pixel values are simply the number of pixels, for example, 500. Percentage values must include the percent sign, for example, 20%.

#### Signature

public String width {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## LayoutItem Methods

The following are methods for LayoutItem.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_Metadata_LayoutItem_clone)**
    Makes a duplicate copy of the Metadata.LayoutItem.

### clone()

Makes a duplicate copy of the Metadata.LayoutItem.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- LayoutItem Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
- LayoutItem Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
- analyticsCloudComponent (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
- behavior (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
- canvas (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
- component (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
- customLink (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
- emptySpace (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
