---
title: "Intelligent Document Reader Business APIs"
domain: omnistudio
topic: intelligent-document-reader-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:10.325Z
keywords: [Intelligent, Document, Reader, Business, APIs, Available, Resources]
---

# Intelligent Document Reader Business APIs

# Intelligent Document Reader Business APIs

Use the Intelligent Document Reader Business APIs to read the mapping details of the extracted text that is stored in a Salesforce object. Intelligent Document Reader uses optical character recognition to automatically extract data from documents. You specify the kind of form you’re getting data from, then map fields in the form to the appropriate fields in the Salesforce objects.

## Available Resources

| Resource | Description |
| --- | --- |
| connect/form-reader/mapping | Retrieve the mappings between the values of the keys extracted from the document to the Salesforce object fields with respect to a given template. |
| /connect/form-reader/contentDocuments/${contentDocumentId}​/ocrTemplates/${ocrTemplateId}/targetObjectFieldMappings | Retrieve mapping between the values of the keys extracted from the document with respect to an OCR template. |
| /connect/form-reader/ocrTemplates | Retrieve a list of active OCR templates. |
| /connect/form-reader/ocrTemplates/${ocrTemplateId} | Retrieve the details of an active OCR template by the template ID. |
| /connect/form-reader/contentDocuments/${contentDocumentId}​/ocrDocumentScanResults | Retrieve details of the extracted key-value pairs for a document from the latest version of the OCR document scan result. Create an OCR document scan result record using the extracted text from the latest version of a document. |
| /connect/form-reader/contentDocuments​/${contentDocumentId}/record | Create records in Salesforce objects using a document based on a content document record. |
| /connect/form-reader/contentDocuments​/${contentDocumentId}/record/${targetRecordId} | Update an existing record in a Salesforce object using a document based on a content document record. |
| /connect/form-reader/receivedDocuments​/${receivedDocumentId}/record | Create records in Salesforce objects using a document based on a received document record. |
| /connect/form-reader/receivedDocuments​/${receivedDocumentId}/record/${targetRecordId} | Update an existing record in a Salesforce object using a document based on a received document record. |

-   **[REST Reference](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_apis_rest_references.htm)**  
    You can access Intelligent Document Reader APIs using REST endpoints. These REST APIs follow similar conventions as Connect REST APIs.