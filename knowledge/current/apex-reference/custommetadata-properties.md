---
title: "CustomMetadata Properties"
domain: apex-reference
topic: custommetadata-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.846Z
keywords: [CustomMetadata, Properties, description, custom, metadata., Signature, Property, Value, label, protected, values]
---

# CustomMetadata Properties

> The description of the custom metadata.

## CustomMetadata Properties

The following are properties for CustomMetadata.

-   **[description](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm#apex_Metadata_CustomMetadata_description)**  
    The description of the custom metadata.
-   **[label](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm#apex_Metadata_CustomMetadata_label)**  
    The label of the custom metadata record.
-   **[protected\_x](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm#apex_Metadata_CustomMetadata_protected_x)**  
    Property that describes whether the custom metadata record is a protected component.
-   **[values](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm#apex_Metadata_CustomMetadata_values)**  
    A list of custom metadata values, such as custom fields, for the custom metadata record.

### description

The description of the custom metadata.

#### Signature

public String description {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### label

The label of the custom metadata record.

#### Signature

public String label {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### protected\_x

Property that describes whether the custom metadata record is a protected component.

#### Signature

public Boolean protected\_x {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### values

A list of custom metadata values, such as custom fields, for the custom metadata record.

#### Signature

public List<Metadata.CustomMetadataValue> values {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Metadata.CustomMetadataValue](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadataValue.htm#apex_class_Metadata_CustomMetadataValue "Represents custom metadata values for a custom metadata component.")\>