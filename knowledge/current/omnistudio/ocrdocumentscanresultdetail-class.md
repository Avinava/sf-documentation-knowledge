---
title: "OcrDocumentScanResultDetail Class"
domain: omnistudio
topic: ocrdocumentscanresultdetail-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.596Z
estimatedTokens: 845
keywords: [OcrDocumentScanResultDetail, contains, OCR, document, scan, result, details., stores, key-value, pairs, present, page, number, extracted, text, status, result., keyValuePairs, ocrDocumentScanResultId, ocrService]
---

# OcrDocumentScanResultDetail Class

> This class contains the OCR document scan result details. It stores the OCR document scan
    result ID, key-value pairs present in the document, the page number of the extracted text, and
    status of the document scan result.

# OcrDocumentScanResultDetail Class

This class contains the OCR document scan result details. It stores the OCR document scan result ID, key-value pairs present in the document, the page number of the extracted text, and status of the document scan result.

## Namespace

[documentreader](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm "The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.")

-   **[OcrDocumentScanResultDetail Properties](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm#apex_documentreader_OcrDocumentScanResultDetail_properties)**


## OcrDocumentScanResultDetail Properties

The following are properties for OcrDocumentScanResultDetail.

-   **[keyValuePairs](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm#apex_documentreader_OcrDocumentScanResultDetail_keyValuePairs)**
    The key-value pairs present in document.
-   **[ocrDocumentScanResultId](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm#apex_documentreader_OcrDocumentScanResultDetail_ocrDocumentScanResultId)**
    The ID of the OCR document scan result.
-   **[ocrService](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm#apex_documentreader_OcrDocumentScanResultDetail_ocrService)**
    The OCR service that’s used for document scan result.
-   **[pageNumber](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm#apex_documentreader_OcrDocumentScanResultDetail_pageNumber)**
    The page number of the document with which the OCR document scan result is associated.
-   **[status](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm#apex_documentreader_OcrDocumentScanResultDetail_status)**
    The status of the OCR document scan result.

### keyValuePairs

The key-value pairs present in document.

#### Signature

public List<documentreader.KeyValue> keyValuePairs {get; set;}

#### Property Value

Type: List<[documentreader.KeyValue](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_KeyValue.htm#apex_class_documentreader_KeyValue "This class contains the details of the key-value pairs present in the document.")\>

### ocrDocumentScanResultId

The ID of the OCR document scan result.

#### Signature

public String ocrDocumentScanResultId {get; set;}

#### Property Value

Type: String

### ocrService

The OCR service that’s used for document scan result.

#### Signature

public String ocrService {get; set;}

#### Property Value

Type: String

### pageNumber

The page number of the document with which the OCR document scan result is associated.

#### Signature

public Integer pageNumber {get; set;}

#### Property Value

Type: Integer

### status

The status of the OCR document scan result.

#### Signature

public String status {get; set;}

#### Property Value

Type: String

## Related Topics

- documentreader (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm)
- OcrDocumentScanResultDetail Properties (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm)
- keyValuePairs (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm)
- ocrDocumentScanResultId (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm)
- ocrService (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm)
- pageNumber (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm)
- status (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm)
- documentreader.KeyValue (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_KeyValue.htm)
