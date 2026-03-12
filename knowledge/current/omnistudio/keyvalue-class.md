---
title: "KeyValue Class"
domain: omnistudio
topic: keyvalue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.624Z
estimatedTokens: 486
keywords: [KeyValue, key-value, pairs, present, document, key]
---

# KeyValue Class

> This class contains the details of the key-value pairs present in the
    document.

# KeyValue Class

This class contains the details of the key-value pairs present in the document.

## Namespace

[documentreader](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm "The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.")

-   **[KeyValue Properties](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_KeyValue.htm#apex_documentreader_KeyValue_properties)**


## KeyValue Properties

The following are properties for KeyValue.

-   **[key](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_KeyValue.htm#apex_documentreader_KeyValue_key)**
    The key present in a key-value pair.
-   **[value](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_KeyValue.htm#apex_documentreader_KeyValue_value)**
    The value present in a key-value pair.

### key

The key present in a key-value pair.

#### Signature

public documentreader.ExtractedValue key {get; set;}

#### Property Value

Type: [documentreader.ExtractedValue](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_ExtractedValue.htm#apex_class_documentreader_ExtractedValue "This class contains the value extracted from the document and its confidence score.")

### value

The value present in a key-value pair.

#### Signature

public documentreader.ExtractedValue value {get; set;}

#### Property Value

Type: [documentreader.ExtractedValue](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_ExtractedValue.htm#apex_class_documentreader_ExtractedValue "This class contains the value extracted from the document and its confidence score.")

## Related Topics

- documentreader (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm)
- KeyValue Properties (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_KeyValue.htm)
- key (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_KeyValue.htm)
- value (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_KeyValue.htm)
- documentreader.ExtractedValue (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_ExtractedValue.htm)
