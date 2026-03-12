---
title: "Intelligent Form Reader"
domain: omnistudio
topic: intelligent-form-reader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:50.459Z
estimatedTokens: 698
keywords: [Intelligent, Form, Reader, optical, character, recognition, automatically, extract, data, external, documents]
---

# Intelligent Form Reader

> Intelligent Form Reader provides optical character recognition to automatically
        extract data from external documents.

# Intelligent Form Reader

Intelligent Form Reader provides optical character recognition to automatically extract data from external documents.

You specify the data’s source form and then map the fields in the form to the equivalent fields in Salesforce. Use the extracted information to create or update record fields or to verify existing data. For example, check a birthdate in Salesforce against the birthdate in a scanned passport.

-   **[Intelligent Form Reader Standard Objects](atlas.en-us.industries_reference.meta/industries_reference/form_reader_standard_objects_overview.htm)**
    Use standard objects to create, update, and activate intelligent form reader.
-   **[Intelligent Form Reader Business APIs](atlas.en-us.industries_reference.meta/industries_reference/form_reader_apis.htm)**
    Use the Intelligent Form Reader Business APIs to read the mapping details of the extracted text that is stored in a Salesforce object. Intelligent Form reader uses optical character recognition to automatically extract data from documents. You specify the kind of form you are getting data from, then map fields in the form to the appropriate fields in the Salesfore objects.
-   **[Intelligent Form Reader Metadata API Types](atlas.en-us.industries_reference.meta/industries_reference/ocr_metadata_api_parent.htm)**
    Metadata API enables you to access some types and feature settings that you can customize in the user interface. For more information about Metadata API and to find a complete reference of existing metadata types, see **[Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/)**.
-   **[Intelligent Form Reader Tooling API Objects](atlas.en-us.industries_reference.meta/industries_reference/ocr_tooling_api_parent.htm)**
    Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. For more information about Tooling API objects and to find a complete reference of all the supported objects, see **[Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm)**.
-   **[Intelligent Form Reader Standard Invocable Actions](atlas.en-us.industries_reference.meta/industries_reference/form_reader_standard_actions_parent.htm)**
    Intelligent Form Reader detects and extracts text from a document using the Amazon Textract API, which is based on optical character recognition. With the standard invocable actions, you can automate the text extraction process, which includes detecting and extracting the text, fetching the extracted text, and selecting an OCR template for the extracted text

## Related Topics

- Intelligent Form Reader Standard Objects (atlas.en-us.industries_reference.meta/industries_reference/form_reader_standard_objects_overview.htm)
- Intelligent Form Reader Business APIs (atlas.en-us.industries_reference.meta/industries_reference/form_reader_apis.htm)
- Intelligent Form Reader Metadata API Types (atlas.en-us.industries_reference.meta/industries_reference/ocr_metadata_api_parent.htm)
- Intelligent Form Reader Tooling API Objects (atlas.en-us.industries_reference.meta/industries_reference/ocr_tooling_api_parent.htm)
- Intelligent Form Reader Standard Invocable Actions (atlas.en-us.industries_reference.meta/industries_reference/form_reader_standard_actions_parent.htm)
