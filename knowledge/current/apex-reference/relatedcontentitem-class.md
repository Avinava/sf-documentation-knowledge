---
title: "RelatedContentItem Class"
domain: apex-reference
topic: relatedcontentitem-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.023Z
estimatedTokens: 516
namespace: Metadata
keywords: [RelatedContentItem, individual, item, RelatedContent, Usage, layoutItem, clone]
---

# RelatedContentItem Class

> Represents an individual item in the RelatedContent list.

**Namespace:** `Metadata`

# RelatedContentItem Class

Represents an individual item in the RelatedContent list.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use this class when accessing [Metadata.Layout](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm#apex_class_Metadata_Layout "Represents the metadata associated with a page layout.") metadata components. For more information, see “RelatedContentItem” in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm).

-   **[RelatedContentItem Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm#apex_Metadata_RelatedContentItem_properties)**

-   **[RelatedContentItem Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm#apex_Metadata_RelatedContentItem_methods)**


## RelatedContentItem Properties

The following are properties for RelatedContentItem.

-   **[layoutItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm#apex_Metadata_RelatedContentItem_layoutItem)**
    An individual layout item in the Mobile Cards section.

### layoutItem

An individual layout item in the Mobile Cards section.

#### Signature

public Metadata.LayoutItem layoutItem {get; set;}

#### Property Value

Type: [Metadata.LayoutItem](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm#apex_class_Metadata_LayoutItem "Represents the valid values that define a layout item.")

## RelatedContentItem Methods

The following are methods for RelatedContentItem.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm#apex_Metadata_RelatedContentItem_clone)**
    Makes a duplicate copy of the Metadata.RelatedContentItem.

### clone()

Makes a duplicate copy of the Metadata.RelatedContentItem.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.Layout (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Layout.htm)
- RelatedContentItem Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm)
- RelatedContentItem Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm)
- layoutItem (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm)
- Metadata.LayoutItem (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_LayoutItem.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_RelatedContentItem.htm)
