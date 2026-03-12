---
title: "SummaryLayoutItem Class"
domain: apex-reference
topic: summarylayoutitem-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.607Z
estimatedTokens: 1096
namespace: Metadata
keywords: [SummaryLayoutItem, Controls, appearance, individual, field, its, column, row, position, within, highlights, panel, grid, Case, Feed, enabled., two, fields, per, panel.]
---

# SummaryLayoutItem Class

> Controls the appearance of an individual field and its column and row
      position within the highlights panel grid, when Case Feed is enabled. You can have two fields
      per each grid in a highlights panel.

**Namespace:** `Metadata`

# SummaryLayoutItem Class

Controls the appearance of an individual field and its column and row position within the highlights panel grid, when Case Feed is enabled. You can have two fields per each grid in a highlights panel.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “SummaryLayoutItem” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[SummaryLayoutItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_Metadata_SummaryLayoutItem_properties)**

-   **[SummaryLayoutItem Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_Metadata_SummaryLayoutItem_methods)**


## SummaryLayoutItem Properties

The following are properties for SummaryLayoutItem.

-   **[customLink](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_Metadata_SummaryLayoutItem_customLink)**
    The custom link reference.
-   **[field](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_Metadata_SummaryLayoutItem_field)**
    The field name reference, relative to the page layout. Must be a standard or custom field that also exists on the detail page.
-   **[posX](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_Metadata_SummaryLayoutItem_posX)**
    The item's column position in the highlights panel grid. Must be within the range of sizeX.
-   **[posY](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_Metadata_SummaryLayoutItem_posY)**
    The item's row position in the highlights panel grid. Must be within the range of sizeY.
-   **[posZ](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_Metadata_SummaryLayoutItem_posZ)**
    Reserved for future use. If provided, the setting is not visible to users.

### customLink

The custom link reference.

#### Signature

public String customLink {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### field

The field name reference, relative to the page layout. Must be a standard or custom field that also exists on the detail page.

#### Signature

public String field {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### posX

The item's column position in the highlights panel grid. Must be within the range of sizeX.

#### Signature

public Integer posX {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### posY

The item's row position in the highlights panel grid. Must be within the range of sizeY.

#### Signature

public Integer posY {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### posZ

Reserved for future use. If provided, the setting is not visible to users.

#### Signature

public Integer posZ {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

## SummaryLayoutItem Methods

The following are methods for SummaryLayoutItem.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_Metadata_SummaryLayoutItem_clone)**
    Makes a duplicate copy of the Metadata.SummaryLayoutItem.

### clone()

Makes a duplicate copy of the Metadata.SummaryLayoutItem.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- SummaryLayoutItem Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm)
- SummaryLayoutItem Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm)
- customLink (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm)
- field (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm)
- posX (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm)
- posY (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm)
- posZ (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
