---
title: "OcrTemplate Class"
domain: omnistudio
topic: ocrtemplate-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.648Z
estimatedTokens: 725
keywords: [OcrTemplate, OCR, template, developerName, documentTypeId, ocrTargetObjects, ocrTemplateId]
---

# OcrTemplate Class

> This class contains the details of an OCR template.

# OcrTemplate Class

This class contains the details of an OCR template.

## Namespace

[documentreader](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm "The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.")

-   **[OcrTemplate Properties](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm#apex_documentreader_OcrTemplate_properties)**


## OcrTemplate Properties

The following are properties for OcrTemplate.

-   **[developerName](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm#apex_documentreader_OcrTemplate_developerName)**
    The API name of the OCR template.
-   **[documentTypeId](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm#apex_documentreader_OcrTemplate_documentTypeId)**
    The ID of the document type associated with the OCR template.
-   **[name](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm#apex_documentreader_OcrTemplate_name)**
    The name of the OCR template.
-   **[ocrTargetObjects](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm#apex_documentreader_OcrTemplate_ocrTargetObjects)**
    The list of OCR target objects associated with the OCR template.
-   **[ocrTemplateId](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm#apex_documentreader_OcrTemplate_ocrTemplateId)**
    The ID of the OCR template.

### developerName

The API name of the OCR template.

#### Signature

public String developerName {get; set;}

#### Property Value

Type: String

### documentTypeId

The ID of the document type associated with the OCR template.

#### Signature

public String documentTypeId {get; set;}

#### Property Value

Type: String

### name

The name of the OCR template.

#### Signature

public String name {get; set;}

#### Property Value

Type: String

### ocrTargetObjects

The list of OCR target objects associated with the OCR template.

#### Signature

public List<documentreader.OcrTargetObject> ocrTargetObjects {get; set;}

#### Property Value

Type: List<[documentreader.OcrTargetObject](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTargetObject.htm#apex_class_documentreader_OcrTargetObject "This class contains the details of the OCR target object that is associated with an OCR template.")\>

### ocrTemplateId

The ID of the OCR template.

#### Signature

public String ocrTemplateId {get; set;}

#### Property Value

Type: String

## Related Topics

- documentreader (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm)
- OcrTemplate Properties (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm)
- developerName (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm)
- documentTypeId (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm)
- name (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm)
- ocrTargetObjects (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm)
- ocrTemplateId (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm)
- documentreader.OcrTargetObject (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTargetObject.htm)
