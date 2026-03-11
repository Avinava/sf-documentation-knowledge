---
title: "Metadata Properties"
domain: apex-reference
topic: metadata-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.982Z
keywords: [Metadata, Properties, full, name, custom, metadata, which, include, namespace, type, component, name., fullName, Signature, Property, Value]
---

# Metadata Properties

> The full name of the custom metadata, which can include the namespace,
      type, and component name.

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