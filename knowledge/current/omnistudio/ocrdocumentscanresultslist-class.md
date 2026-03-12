---
title: "OcrDocumentScanResultsList Class"
domain: omnistudio
topic: ocrdocumentscanresultslist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.603Z
estimatedTokens: 418
keywords: [OcrDocumentScanResultsList, contains, output, Initiate, Text, Extraction, invocable, action., ocrDocumentScanResults]
---

# OcrDocumentScanResultsList Class

> This class contains the parameters for the output of the Initiate Text Extraction
    invocable action.

# OcrDocumentScanResultsList Class

This class contains the parameters for the output of the Initiate Text Extraction invocable action.

## Namespace

[documentreader](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm "The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.")

-   **[OcrDocumentScanResultsList Properties](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultsList.htm#apex_documentreader_OcrDocumentScanResultsList_properties)**


## OcrDocumentScanResultsList Properties

The following are properties for OcrDocumentScanResultsList.

-   **[ocrDocumentScanResults](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultsList.htm#apex_documentreader_OcrDocumentScanResultsList_ocrDocumentScanResults)**
    List of the OCR document scan results.

### ocrDocumentScanResults

List of the OCR document scan results.

#### Signature

public List<documentreader.OcrDocumentScanResult> ocrDocumentScanResults {get; set;}

#### Property Value

Type: List<[documentreader.OcrDocumentScanResult](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResult.htm#apex_class_documentreader_OcrDocumentScanResult "This class contains the OCR document scan result. It stores the OCR Document Scan Result ID and the page number of the extracted text.")\>

## Related Topics

- documentreader (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm)
- OcrDocumentScanResultsList Properties (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultsList.htm)
- ocrDocumentScanResults (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultsList.htm)
- documentreader.OcrDocumentScanResult (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResult.htm)
