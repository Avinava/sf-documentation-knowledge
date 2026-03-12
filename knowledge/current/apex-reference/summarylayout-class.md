---
title: "SummaryLayout Class"
domain: apex-reference
topic: summarylayout-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.600Z
estimatedTokens: 1352
namespace: Metadata
keywords: [SummaryLayout, Controls, appearance, highlights, panel, which, summarizes, key, fields, grid, top, page, layout, Case, Feed, enabled., Usage, masterLabel, Important, sizeX]
---

# SummaryLayout Class

> Controls the appearance of the highlights panel, which summarizes key
      fields in a grid at the top of a page layout, when Case Feed is enabled.

**Namespace:** `Metadata`

# SummaryLayout Class

Controls the appearance of the highlights panel, which summarizes key fields in a grid at the top of a page layout, when Case Feed is enabled.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “SummaryLayout” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[SummaryLayout Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_Metadata_SummaryLayout_properties)**

-   **[SummaryLayout Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_Metadata_SummaryLayout_methods)**


## SummaryLayout Properties

The following are properties for SummaryLayout.

-   **[masterLabel](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_Metadata_SummaryLayout_masterLabel)**
    The name of the layout label.
-   **[sizeX](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_Metadata_SummaryLayout_sizeX)**
    Number of columns in the highlights pane, between 1 and 4 (inclusive).
-   **[sizeY](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_Metadata_SummaryLayout_sizeY)**
    Number of rows in each column, either 1 or 2.
-   **[sizeZ](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_Metadata_SummaryLayout_sizeZ)**
    If provided, the setting is not visible to users.
-   **[summaryLayoutItems](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_Metadata_SummaryLayout_summaryLayoutItems)**
    Controls the appearance of an individual field and its column and row position within the highlights panel grid, when Case Feed is enabled. At least one is required.
-   **[summaryLayoutStyle](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_Metadata_SummaryLayout_summaryLayoutStyle)**
    Specifies the panel style.

### masterLabel

The name of the layout label.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

#### Signature

public String masterLabel {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### sizeX

Number of columns in the highlights pane, between 1 and 4 (inclusive).

#### Signature

public Integer sizeX {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### sizeY

Number of rows in each column, either 1 or 2.

#### Signature

public Integer sizeY {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### sizeZ

If provided, the setting is not visible to users.

#### Signature

public Integer sizeZ {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### summaryLayoutItems

Controls the appearance of an individual field and its column and row position within the highlights panel grid, when Case Feed is enabled. At least one is required.

#### Signature

public List<Metadata.SummaryLayoutItem> summaryLayoutItems {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.SummaryLayoutItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayoutItem.htm#apex_class_Metadata_SummaryLayoutItem "Controls the appearance of an individual field and its column and row position within the highlights panel grid, when Case Feed is enabled. You can have two fields per each grid in a highlights panel.")\>

### summaryLayoutStyle

Specifies the panel style.

#### Signature

public Metadata.SummaryLayoutStyleEnum summaryLayoutStyle {get; set;}

#### Property Value

Type: [Metadata.SummaryLayoutStyleEnum](atlas.en-us.apexref.meta/apexref/apex_enum_Metadata_SummaryLayoutStyleEnum.htm#apex_enum_Metadata_SummaryLayoutStyleEnum "Describes the highlights panel style for a SummaryLayout.")

## SummaryLayout Methods

The following are methods for SummaryLayout.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm#apex_Metadata_SummaryLayout_clone)**
    Makes a duplicate copy of the Metadata.SummaryLayout.

### clone()

Makes a duplicate copy of the Metadata.SummaryLayout.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- SummaryLayout Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm)
- SummaryLayout Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm)
- masterLabel (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm)
- sizeX (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm)
- sizeY (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm)
- sizeZ (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm)
- summaryLayoutItems (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm)
- summaryLayoutStyle (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SummaryLayout.htm)
