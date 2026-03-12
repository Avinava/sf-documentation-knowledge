---
title: "Intelligent Document Reader Business APIs"
domain: psc-api
topic: intelligent-document-reader-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.609Z
estimatedTokens: 600
keywords: [Intelligent, Document, Reader, Business, APIs, mapping, extracted, text, stored, Salesforce, uses, optical, character, recognition, automatically]
---

# Intelligent Document Reader Business APIs

> Use the Intelligent Document Reader Business APIs to read the mapping
      details of the extracted text that is stored in a Salesforce object. Intelligent Document
    Reader uses optical character recognition to automatically extract data from documents. You
    specify the kind of form you’re getting data from, then map fields in the form to the
    appropriate fields in the Salesforce objects.

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

-   **[REST Reference](atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_apis_rest_references.htm)**
    You can access Intelligent Document Reader APIs using REST endpoints. These REST APIs follow similar conventions as Connect REST APIs.

## Related Topics

- connect/form-reader/mapping (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_resources_document_reader_mappings.htm)
- /connect/form-reader/contentDocuments/${contentDocumentId}​/ocrTemplates/${ocrTemplateId}/targetObjectFieldMappings (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_resources_ocr_mapping_details.htm)
- /connect/form-reader/ocrTemplates (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_resources_get_ocr_templates.htm)
- /connect/form-reader/ocrTemplates/${ocrTemplateId} (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_resources_get_ocr_template_details.htm)
- /connect/form-reader/contentDocuments/${contentDocumentId}​/ocrDocumentScanResults (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_resources_extraction_of_content_doc.htm)
- /connect/form-reader/contentDocuments​/${contentDocumentId}/record (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_resources_create_content_documents.htm)
- /connect/form-reader/contentDocuments​/${contentDocumentId}/record/${targetRecordId} (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_resources_update_content_documents.htm)
- /connect/form-reader/receivedDocuments​/${receivedDocumentId}/record (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_resources_create_received_documents.htm)
- /connect/form-reader/receivedDocuments​/${receivedDocumentId}/record/${targetRecordId} (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_resources_update_received_documents.htm)
- REST Reference (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_apis_rest_references.htm)
