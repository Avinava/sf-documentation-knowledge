---
title: "OcrTargetObject Class"
domain: psc-api
topic: ocrtargetobject-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.543Z
estimatedTokens: 474
keywords: [OcrTargetObject, OCR, target, associated, template, ocrTargetObjectId, targetObject, targetObjectRecordType]
---

# OcrTargetObject Class

> This class contains the details of the OCR target object that is associated with an OCR
    template.

# OcrTargetObject Class

This class contains the details of the OCR target object that is associated with an OCR template.

## Namespace

[documentreader](atlas.en-us.psc_api.meta/psc_api/apex_namespace_documentreader.htm "The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.")

-   **[OcrTargetObject Properties](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrTargetObject.htm#apex_documentreader_OcrTargetObject_properties)**


## OcrTargetObject Properties

The following are properties for OcrTargetObject.

-   **[ocrTargetObjectId](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrTargetObject.htm#apex_documentreader_OcrTargetObject_ocrTargetObjectId)**
    The ID of the OCR target object.
-   **[targetObject](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrTargetObject.htm#apex_documentreader_OcrTargetObject_targetObject)**
    The name of the target object to which information from a form is mapped.
-   **[targetObjectRecordType](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrTargetObject.htm#apex_documentreader_OcrTargetObject_targetObjectRecordType)**
    The developer name of the record type.

### ocrTargetObjectId

The ID of the OCR target object.

#### Signature

public String ocrTargetObjectId {get; set;}

#### Property Value

Type: String

### targetObject

The name of the target object to which information from a form is mapped.

#### Signature

public String targetObject {get; set;}

#### Property Value

Type: String

### targetObjectRecordType

The developer name of the record type.

#### Signature

public String targetObjectRecordType {get; set;}

#### Property Value

Type: String

## Related Topics

- documentreader (atlas.en-us.psc_api.meta/psc_api/apex_namespace_documentreader.htm)
- OcrTargetObject Properties (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrTargetObject.htm)
- ocrTargetObjectId (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrTargetObject.htm)
- targetObject (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrTargetObject.htm)
- targetObjectRecordType (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrTargetObject.htm)
