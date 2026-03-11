---
title: "DocumentReader Namespace"
domain: omnistudio
topic: documentreader-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.924Z
keywords: [DocumentReader, Namespace, See]
---

# DocumentReader Namespace

# DocumentReader Namespace

The DocumentReader namespace contains classes for storing the output parameters of the Intelligent Document Reader flow actions. The Apex classes store text extracted from uploaded documents or based on one or more content document IDs and the active OCR template details.

The following are the classes in the documentreader namespace.

-   **[AdditionalField Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_AdditionalField.htm#apex_class_documentreader_AdditionalField)**  
    This class contains the details of the fields that are created or updated in the target object.
-   **[AdditionalFields Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_AdditionalFields.htm#apex_class_documentreader_AdditionalFields)**  
    This class contains a list of the fields of the target object.
-   **[ExtractedValue Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_ExtractedValue.htm#apex_class_documentreader_ExtractedValue)**  
    This class contains the value extracted from the document and its confidence score.
-   **[KeyValue Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_KeyValue.htm#apex_class_documentreader_KeyValue)**  
    This class contains the details of the key-value pairs present in the document.
-   **[OcrDocumentScanResult Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResult.htm#apex_class_documentreader_OcrDocumentScanResult)**  
    This class contains the OCR document scan result. It stores the OCR Document Scan Result ID and the page number of the extracted text.
-   **[OcrDocumentScanResultDetail Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetail.htm#apex_class_documentreader_OcrDocumentScanResultDetail)**  
    This class contains the OCR document scan result details. It stores the OCR document scan result ID, key-value pairs present in the document, the page number of the extracted text, and status of the document scan result.
-   **[OcrDocumentScanResultDetailsList Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultDetailsList.htm#apex_class_documentreader_OcrDocumentScanResultDetailsList)**  
    This class contains the parameters for the output of the Fetch Extracted Text invocable action.
-   **[OcrDocumentScanResultsList Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrDocumentScanResultsList.htm#apex_class_documentreader_OcrDocumentScanResultsList)**  
    This class contains the parameters for the output of the Initiate Text Extraction invocable action.
-   **[OcrTargetObject Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTargetObject.htm#apex_class_documentreader_OcrTargetObject)**  
    This class contains the details of the OCR target object that is associated with an OCR template.
-   **[OcrTemplate Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplate.htm#apex_class_documentreader_OcrTemplate)**  
    This class contains the details of an OCR template.
-   **[OcrTemplatesList Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_documentreader_OcrTemplatesList.htm#apex_class_documentreader_OcrTemplatesList)**  
    This class contain the active OCR templates returned by the Fetch Active OCR Templates invocable action.

#### See Also

-   [*Extend Your Industries Cloud with Common Features*: Sample Flow to Extract and Store Text in Records](https://help.salesforce.com/s/articleView?id=ind.intelligent_document_reader_complete_flow_actions.htm&type=5&language=en_US "Extend Your Industries Cloud with Common Features: Sample Flow to Extract and Store Text in Records - HTML (New Window)")
    
-   [*Extend Your Industries Cloud with Common Features*: Flow Actions](https://help.salesforce.com/s/articleView?id=ind.intelligent_document_reader_flow_actions.htm&type=5&language=en_US "Extend Your Industries Cloud with Common Features: Flow Actions - HTML (New Window)")