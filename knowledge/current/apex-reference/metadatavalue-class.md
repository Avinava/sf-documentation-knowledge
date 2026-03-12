---
title: "MetadataValue Class"
domain: apex-reference
topic: metadatavalue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.460Z
estimatedTokens: 309
namespace: Metadata
keywords: [MetadataValue, abstract, base, represents, custom, metadata, component, field., Usage, clone]
---

# MetadataValue Class

> An abstract base class that represents a custom metadata component
      field.

**Namespace:** `Metadata`

# MetadataValue Class

An abstract base class that represents a custom metadata component field.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

You can’t create instances of this abstract class. Instead, create an instance of a specific custom metadata component value class that derives from Metadata.MetadataValue, such as [Metadata.CustomMetadataValue](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadataValue.htm#apex_class_Metadata_CustomMetadataValue "Represents custom metadata values for a custom metadata component.").

-   **[MetadataValue Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MetadataValue.htm#apex_Metadata_MetadataValue_methods)**


## MetadataValue Methods

The following are methods for MetadataValue.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MetadataValue.htm#apex_Metadata_MetadataValue_clone)**
    Makes a duplicate copy of the Metadata.MetadataValue.

### clone()

Makes a duplicate copy of the Metadata.MetadataValue.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.CustomMetadataValue (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadataValue.htm)
- MetadataValue Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MetadataValue.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_MetadataValue.htm)
