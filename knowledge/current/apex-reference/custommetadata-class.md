---
title: "CustomMetadata Class"
domain: apex-reference
topic: custommetadata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.310Z
estimatedTokens: 1156
namespace: Warning
keywords: [CustomMetadata, Represents, records, custom, metadata, types., Warning, Usage, Example, Note, description, label, protected, values, clone]
---

# CustomMetadata Class

> Represents records of custom metadata types.

**Namespace:** `Warning`

# CustomMetadata Class

Represents records of custom metadata types.

## Namespace

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

Protected custom metadata types behave like public custom metadata types when they are outside of a managed package. Public custom metadata types are readable for all profiles, including the guest user. Do not store secrets, personally identifying information, or any private data in these records. Use protected custom metadata types only in managed packages. Outside of a managed package, use named credentials or encrypted custom fields to store secrets like OAuth tokens, passwords, and other confidential material.

[Metadata](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm "The Metadata namespace provides classes and methods for working with custom metadata in Salesforce")

## Usage

Use Metadata.CustomMetadata to represent records of custom metadata types in Apex. For more information, see [Custom Metadata Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_custommetadatatypes.htm) in the Metadata API Developer Guide.

## Example

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

When you assign namespaces to records, provide full, qualified record names to the app. If both the type and the record are in Namespace, use something like: customMetadata.fullName = 'Namespace\_\_MetadataTypeName.Namespace\_\_MetadataRecordName'

-   **[CustomMetadata Properties](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm#apex_Metadata_CustomMetadata_properties)**

-   **[CustomMetadata Methods](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm#apex_Metadata_CustomMetadata_methods)**


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

## CustomMetadata Methods

The following are methods for CustomMetadata.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm#apex_Metadata_CustomMetadata_clone)**
    Makes a duplicate copy of the Metadata.CustomMetadata.

### clone()

Makes a duplicate copy of the Metadata.CustomMetadata.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Code Examples

```
// Set up custom metadata to be created in the subscriber org.
    Metadata.CustomMetadata customMetadata =  new Metadata.CustomMetadata();
    customMetadata.fullName = 'ISVNamespace__MetadataTypeName.MetadataRecordName';

    Metadata.CustomMetadataValue customField = new Metadata.CustomMetadataValue();
    customField.field = 'customField__c';
    customField.value = 'New value';

    customMetadata.values.add(customField);
```

## Related Topics

- Metadata (atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)
- CustomMetadata Properties (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm)
- CustomMetadata Methods (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm)
- description (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm)
- label (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm)
- protected_x (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm)
- values (atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadata.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
