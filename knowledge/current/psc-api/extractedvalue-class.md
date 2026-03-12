---
title: "ExtractedValue Class"
domain: psc-api
topic: extractedvalue-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.521Z
estimatedTokens: 347
keywords: [ExtractedValue, extracted, document, confidence, score]
---

# ExtractedValue Class

> This class contains the value extracted from the document and its confidence
    score.

# ExtractedValue Class

This class contains the value extracted from the document and its confidence score.

## Namespace

[documentreader](atlas.en-us.psc_api.meta/psc_api/apex_namespace_documentreader.htm "The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.")

-   **[ExtractedValue Properties](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_ExtractedValue.htm#apex_documentreader_ExtractedValue_properties)**


## ExtractedValue Properties

The following are properties for ExtractedValue.

-   **[confidence](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_ExtractedValue.htm#apex_documentreader_ExtractedValue_confidence)**
    The confidence score for the extracted value.
-   **[value](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_ExtractedValue.htm#apex_documentreader_ExtractedValue_value)**
    The value extracted from the document.

### confidence

The confidence score for the extracted value.

#### Signature

public Double confidence {get; set;}

#### Property Value

Type: Double

### value

The value extracted from the document.

#### Signature

public String value {get; set;}

#### Property Value

Type: String

## Related Topics

- documentreader (atlas.en-us.psc_api.meta/psc_api/apex_namespace_documentreader.htm)
- ExtractedValue Properties (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_ExtractedValue.htm)
- confidence (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_ExtractedValue.htm)
- value (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_ExtractedValue.htm)
