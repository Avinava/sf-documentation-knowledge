---
title: "Intelligent Document Reader"
domain: psc-api
topic: intelligent-document-reader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.582Z
estimatedTokens: 757
keywords: [Intelligent, Document, Reader, optical, character, recognition, automatically, extract, data, external, documents]
---

# Intelligent Document Reader

> Intelligent Document Reader provides optical character recognition to automatically
  extract data from external documents.

# Intelligent Document Reader

Intelligent Document Reader provides optical character recognition to automatically extract data from external documents.

| Available in: Lightning Experience |
| --- |
| Available in: View product and edition availability |


You specify the data’s source form and then map the fields in the form to the equivalent fields in Salesforce. Use the extracted information to create or update record fields or to verify existing data. For example, check a birthdate in Salesforce against the birthdate in a scanned passport.

-   **[Intelligent Document Reader Standard Objects](atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_objects_overview.htm)**
    Use standard objects to create, update, and activate Intelligent Document Reader.
-   **[Apex Reference](atlas.en-us.psc_api.meta/psc_api/intelligent_doc_reader_apex_reference.htm)**
    This Apex reference goes into detail about the built-in Apex classes and interfaces.
-   **[Intelligent Document Reader Business APIs](atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_apis.htm)**
    Use the Intelligent Document Reader Business APIs to read the mapping details of the extracted text that is stored in a Salesforce object. Intelligent Document Reader uses optical character recognition to automatically extract data from documents. You specify the kind of form you’re getting data from, then map fields in the form to the appropriate fields in the Salesforce objects.
-   **[OCR Metadata API Types](atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_metadata_api.htm)**
    Metadata API enables you to access some types and feature settings that you can customize in the user interface. For more information about Metadata API and to find a complete reference of existing metadata types, see **[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/)**.
-   **[OCR Tooling API Objects](atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_tooling_api.htm)**
    Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. For more information about Tooling API objects and to find a complete reference of all the supported objects, see **[Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm)**.
-   **[Intelligent Document Reader Standard Invocable Actions](atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_standard_actions_parent.htm)**
    Intelligent Document Reader detects and extracts text from a document using the Amazon Textract API, which is based on optical character recognition. With the standard invocable actions, you can automate the text extraction process, which includes detecting and extracting the text, fetching the extracted text, and selecting an OCR template for the extracted text.

## Related Topics

- Intelligent Document Reader Standard Objects (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_objects_overview.htm)
- Apex Reference (atlas.en-us.psc_api.meta/psc_api/intelligent_doc_reader_apex_reference.htm)
- Intelligent Document Reader Business APIs (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_apis.htm)
- OCR Metadata API Types (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_metadata_api.htm)
- OCR Tooling API Objects (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_tooling_api.htm)
- Intelligent Document Reader Standard Invocable Actions (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_standard_actions_parent.htm)
