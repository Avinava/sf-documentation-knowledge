---
title: "Metadata Class"
domain: apex-reference
topic: metadata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.959Z
estimatedTokens: 691
namespace: Metadata
keywords: [Metadata, abstract, base, custom, component, Usage, fullName, clone]
---

# Metadata Class

> An abstract base class that represents a custom metadata
      component.

**Namespace:** `Metadata`

# Metadata Class

An abstract base class that represents a custom metadata component.

## Namespace

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

You can’t create instances of this abstract class. Instead, create an instance of a specific custom metadata component class that derives from Metadata.Metadata, such as [Metadata.CustomMetadata](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm#apex_class_Metadata_CustomMetadata "Represents records of custom metadata types."). For more information, see [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) in the Metadata API Developer Guide.

-   **[Metadata Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_Metadata_Metadata_properties)**

-   **[Metadata Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_Metadata_Metadata_methods)**


## Metadata Properties

The following are properties for Metadata.

-   **[fullName](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_Metadata_Metadata_fullName)**
    The full name of the custom metadata, which can include the namespace, type, and component name.

### fullName

The full name of the custom metadata, which can include the namespace, type, and component name.

#### Signature

public String fullName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The format of the full name can include the namespace, metadata type, and metadata component name. If you’re updating components in a namespace, you also need to qualify the namespace for the component in the full name. For example, the full name for a custom metadata "MDType1\_\_mdt" component named "Component1" that is contained in the "myPackage" namespace is "myPackage\_\_MDType1\_\_mdt.myPackage\_\_Component1". For more information on full name formats for different metadata types, see reference documentation on the metadata types in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm "HTML (New Window)").

## Metadata Methods

The following are methods for Metadata.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm#apex_Metadata_Metadata_clone)**
    Makes a duplicate copy of the Metadata.Metadata.

### clone()

Makes a duplicate copy of the Metadata.Metadata.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- Metadata.CustomMetadata (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm)
- Metadata Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm)
- Metadata Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm)
- fullName (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_Metadata.htm)
