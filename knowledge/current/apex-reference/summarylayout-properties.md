---
title: "SummaryLayout Properties"
domain: apex-reference
topic: summarylayout-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.069Z
keywords: [SummaryLayout, Properties, name, layout, label., masterLabel, Important, Signature, Property, Value, sizeX, sizeY, sizeZ, summaryLayoutItems, summaryLayoutStyle]
---

# SummaryLayout Properties

> The name of the layout label.

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