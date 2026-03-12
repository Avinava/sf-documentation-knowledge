---
title: "CustomConsoleComponents Class"
domain: apex-reference
topic: customconsolecomponents-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.300Z
estimatedTokens: 756
namespace: Metadata
keywords: [CustomConsoleComponents, Represents, custom, console, components, Visualforce, pages, lookup, fields, related, lists, page, layout., Usage, primaryTabComponents, subtabComponents, clone]
---

# CustomConsoleComponents Class

> Represents custom console components (Visualforce pages, lookup
      fields, or related lists) on a page layout.

**Namespace:** `Metadata`

# CustomConsoleComponents Class

Represents custom console components (Visualforce pages, lookup fields, or related lists) on a page layout.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “CustomConsoleComponents” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[CustomConsoleComponents Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm#apex_Metadata_CustomConsoleComponents_properties)**

-   **[CustomConsoleComponents Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm#apex_Metadata_CustomConsoleComponents_methods)**


## CustomConsoleComponents Properties

The following are properties for CustomConsoleComponents.

-   **[primaryTabComponents](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm#apex_Metadata_CustomConsoleComponents_primaryTabComponents)**
    Represents custom console components on primary tabs in the Salesforce console.
-   **[subtabComponents](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm#apex_Metadata_CustomConsoleComponents_subtabComponents)**
    Represents custom console components on subtabs in the Salesforce console.

### primaryTabComponents

Represents custom console components on primary tabs in the Salesforce console.

#### Signature

public Metadata.PrimaryTabComponents primaryTabComponents {get; set;}

#### Property Value

Type: [Metadata.PrimaryTabComponents](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm#apex_class_Metadata_PrimaryTabComponents "Represents custom console components on primary tabs in the Salesforce console.")

### subtabComponents

Represents custom console components on subtabs in the Salesforce console.

#### Signature

public Metadata.SubtabComponents subtabComponents {get; set;}

#### Property Value

Type: [Metadata.SubtabComponents](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm#apex_class_Metadata_SubtabComponents "Represents custom console components on subtabs in the Salesforce console.")

## CustomConsoleComponents Methods

The following are methods for CustomConsoleComponents.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm#apex_Metadata_CustomConsoleComponents_clone)**
    Makes a duplicate copy of the Metadata.CustomConsoleComponents.

### clone()

Makes a duplicate copy of the Metadata.CustomConsoleComponents.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- CustomConsoleComponents Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm)
- CustomConsoleComponents Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm)
- primaryTabComponents (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm)
- subtabComponents (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm)
- Metadata.PrimaryTabComponents (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_PrimaryTabComponents.htm)
- Metadata.SubtabComponents (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_SubtabComponents.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomConsoleComponents.htm)
