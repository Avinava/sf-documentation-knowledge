---
title: "SummaryLayoutItem Properties"
domain: apex-reference
topic: summarylayoutitem-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.075Z
keywords: [SummaryLayoutItem, Properties, custom, link, reference., customLink, Signature, Property, Value, field, posX, posY, posZ]
---

# SummaryLayoutItem Properties

> The custom link reference.

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