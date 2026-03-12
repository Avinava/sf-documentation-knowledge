---
title: "OcrDocumentScanResult Class"
domain: psc-api
topic: ocrdocumentscanresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.528Z
estimatedTokens: 417
keywords: [OcrDocumentScanResult, OCR, document, scan, result, stores, number, extracted, text, ocrDocumentScanResultId, pageNumber]
---

# OcrDocumentScanResult Class

> This class contains the OCR document scan result. It stores the OCR Document Scan Result
    ID and the page number of the extracted text.

# OcrDocumentScanResult Class

This class contains the OCR document scan result. It stores the OCR Document Scan Result ID and the page number of the extracted text.

## Namespace

[documentreader](atlas.en-us.psc_api.meta/psc_api/apex_namespace_documentreader.htm "The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.")

-   **[OcrDocumentScanResult Properties](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrDocumentScanResult.htm#apex_documentreader_OcrDocumentScanResult_properties)**


## OcrDocumentScanResult Properties

The following are properties for OcrDocumentScanResult.

-   **[ocrDocumentScanResultId](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrDocumentScanResult.htm#apex_documentreader_OcrDocumentScanResult_ocrDocumentScanResultId)**
    The ID of the OCR document scan result.
-   **[pageNumber](atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrDocumentScanResult.htm#apex_documentreader_OcrDocumentScanResult_pageNumber)**
    The page number of the document with which the OCR document scan result is associated.

### ocrDocumentScanResultId

The ID of the OCR document scan result.

#### Signature

public String ocrDocumentScanResultId {get; set;}

#### Property Value

Type: String

### pageNumber

The page number of the document with which the OCR document scan result is associated.

#### Signature

public Integer pageNumber {get; set;}

#### Property Value

Type: Integer

## Related Topics

- documentreader (atlas.en-us.psc_api.meta/psc_api/apex_namespace_documentreader.htm)
- OcrDocumentScanResult Properties (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrDocumentScanResult.htm)
- ocrDocumentScanResultId (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrDocumentScanResult.htm)
- pageNumber (atlas.en-us.psc_api.meta/psc_api/apex_class_documentreader_OcrDocumentScanResult.htm)
