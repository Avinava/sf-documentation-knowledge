---
title: "RelatedList Class"
domain: apex-reference
topic: relatedlist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.028Z
estimatedTokens: 649
namespace: Metadata
keywords: [RelatedList, custom, components, sidebars, Salesforce, console, Usage, hideOnDetail, clone]
---

# RelatedList Class

> Represents related list custom components on the sidebars of the
      Salesforce console.

**Namespace:** `Metadata`

# RelatedList Class

Represents related list custom components on the sidebars of the Salesforce console.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “RelatedList” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[RelatedList Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm#apex_Metadata_RelatedList_properties)**

-   **[RelatedList Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm#apex_Metadata_RelatedList_methods)**


## RelatedList Properties

The following are properties for RelatedList.

-   **[hideOnDetail](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm#apex_Metadata_RelatedList_hideOnDetail)**
    When set to true, the related list is hidden from detail pages where it appears as a component to prevent duplicate information from showing.
-   **[name](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm#apex_Metadata_RelatedList_name)**
    The name of the component as it appears to console users.

### hideOnDetail

When set to true, the related list is hidden from detail pages where it appears as a component to prevent duplicate information from showing.

#### Signature

public Boolean hideOnDetail {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### name

The name of the component as it appears to console users.

#### Signature

public String name {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## RelatedList Methods

The following are methods for RelatedList.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm#apex_Metadata_RelatedList_clone)**
    Makes a duplicate copy of the Metadata.RelatedList.

### clone()

Makes a duplicate copy of the Metadata.RelatedList.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- RelatedList Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm)
- RelatedList Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm)
- hideOnDetail (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm)
- name (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedList.htm)
