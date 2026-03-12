---
title: "RelatedContent Class"
domain: apex-reference
topic: relatedcontent-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.012Z
estimatedTokens: 562
namespace: Metadata
keywords: [RelatedContent, Mobile, Cards, layout, Usage, relatedContentItems, clone]
---

# RelatedContent Class

> Represents the Mobile Cards section of the page
    layout.

**Namespace:** `Metadata`

# RelatedContent Class

Represents the Mobile Cards section of the page layout.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “RelatedContent” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[RelatedContent Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm#apex_Metadata_RelatedContent_properties)**

-   **[RelatedContent Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm#apex_Metadata_RelatedContent_methods)**


## RelatedContent Properties

The following are properties for RelatedContent.

-   **[relatedContentItems](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm#apex_Metadata_RelatedContent_relatedContentItems)**
    A list of layout items in the Mobile Cards section of the page layout.

### relatedContentItems

A list of layout items in the Mobile Cards section of the page layout.

#### Signature

public List<Metadata.RelatedContentItem> relatedContentItems {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.RelatedContentItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm#apex_class_Metadata_RelatedContentItem "Represents an individual item in the RelatedContent list.")\>

## RelatedContent Methods

The following are methods for RelatedContent.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm#apex_Metadata_RelatedContent_clone)**
    Makes a duplicate copy of the Metadata.RelatedContent.

### clone()

Makes a duplicate copy of the Metadata.RelatedContent.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- RelatedContent Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm)
- RelatedContent Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm)
- relatedContentItems (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Metadata.RelatedContentItem (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContent.htm)
