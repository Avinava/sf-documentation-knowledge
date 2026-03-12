---
title: "OcrDocumentScanResultDetailsList Class"
domain: omnistudio
topic: ocrdocumentscanresultdetailslist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.599Z
estimatedTokens: 466
keywords: [OcrDocumentScanResultDetailsList, contains, output, Fetch, Extracted, Text, invocable, action., ocrDocumentScanResultDetails]
---

# OcrDocumentScanResultDetailsList Class

> This class contains the parameters for the output of the Fetch Extracted Text invocable
    action.

# OcrDocumentScanResultDetailsList Class

This class contains the parameters for the output of the Fetch Extracted Text invocable action.

## Namespace

[documentreader](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm "The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.")

-   **[OcrDocumentScanResultDetailsList Properties](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetailsList.htm#apex_documentreader_OcrDocumentScanResultDetailsList_properties)**


## OcrDocumentScanResultDetailsList Properties

The following are properties for OcrDocumentScanResultDetailsList.

-   **[ocrDocumentScanResultDetails](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetailsList.htm#apex_documentreader_OcrDocumentScanResultDetailsList_ocrDocumentScanResultDetails)**
    List of the OCR document scan result details.

### ocrDocumentScanResultDetails

List of the OCR document scan result details.

#### Signature

public List<documentreader.OcrDocumentScanResultDetail> ocrDocumentScanResultDetails {get; set;}

#### Property Value

Type: List<[documentreader.OcrDocumentScanResultDetail](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm#apex_class_documentreader_OcrDocumentScanResultDetail "This class contains the OCR document scan result details. It stores the OCR document scan result ID, key-value pairs present in the document, the page number of the extracted text, and status of the document scan result.")\>

## Related Topics

- documentreader (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_documentreader.htm)
- OcrDocumentScanResultDetailsList Properties (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetailsList.htm)
- ocrDocumentScanResultDetails (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetailsList.htm)
- documentreader.OcrDocumentScanResultDetail (atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm)
