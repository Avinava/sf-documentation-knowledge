---
title: "CustomMetadataValue Properties"
domain: apex-reference
topic: custommetadatavalue-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.852Z
keywords: [CustomMetadataValue, Properties, field, name, custom, metadata, value., Signature, Property, Value, value]
---

# CustomMetadataValue Properties

> The field name for the custom metadata value.

## CustomMetadataValue Properties

The following are properties for CustomMetadataValue.

-   **[field](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadataValue.htm#apex_Metadata_CustomMetadataValue_field)**  
    The field name for the custom metadata value.
-   **[value](atlas.en-us.apexref.meta/apexref/apex_class_Metadata_CustomMetadataValue.htm#apex_Metadata_CustomMetadataValue_value)**  
    The field value for the custom metadata value.

### field

The field name for the custom metadata value.

#### Signature

public String field {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### value

The field value for the custom metadata value.

#### Signature

public Object value {get; set;}

#### Property Value

Type: Object

Supported Apex primitive types are:

-   Boolean
-   Date
-   DateTime
-   Decimal
-   Double
-   Integer
-   Long
-   String

When setting the value for relationship fields, use the qualified API name of the related metadata, not the ID.

For more information, see [Primitive Data Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).