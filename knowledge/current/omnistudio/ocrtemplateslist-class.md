---
title: "OcrTemplatesList Class"
domain: omnistudio
topic: ocrtemplateslist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.613Z
estimatedTokens: 352
keywords: [OcrTemplatesList, contain, active, OCR, templates, returned, Fetch, Active, Templates, invocable, action., ocrTemplates]
---

# OcrTemplatesList Class

> This class contain the active OCR templates returned by the Fetch Active OCR Templates
    invocable action.

# OcrTemplatesList Class

This class contain the active OCR templates returned by the Fetch Active OCR Templates invocable action.

## Namespace

[documentreader](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm "The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.")

-   **[OcrTemplatesList Properties](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplatesList.htm#apex_documentreader_OcrTemplatesList_properties)**


## OcrTemplatesList Properties

The following are properties for OcrTemplatesList.

-   **[ocrTemplates](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplatesList.htm#apex_documentreader_OcrTemplatesList_ocrTemplates)**
    List of the OCR templates.

### ocrTemplates

List of the OCR templates.

#### Signature

public List<documentreader.OcrTemplate> ocrTemplates {get; set;}

#### Property Value

Type: List<[documentreader.OcrTemplate](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm#apex_class_documentreader_OcrTemplate "This class contains the details of an OCR template.")\>

## Related Topics

- documentreader (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm)
- OcrTemplatesList Properties (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplatesList.htm)
- ocrTemplates (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplatesList.htm)
- documentreader.OcrTemplate (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm)
