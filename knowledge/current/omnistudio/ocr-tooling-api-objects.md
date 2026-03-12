---
title: "OCR Tooling API Objects"
domain: omnistudio
topic: ocr-tooling-api-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:51.748Z
estimatedTokens: 774
keywords: [OCR, Tooling, API, Objects, exposes, metadata, used, developer, tooling, access, through, REST, SOAP., API’s, SOQL, capabilities, many, types, allow, retrieve]
---

# OCR Tooling API Objects

> Tooling API exposes metadata used in developer tooling that
        you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types
        allow you to retrieve smaller pieces of metadata. For more information about Tooling API
        objects and to find a complete reference of all the supported objects, see Introducing Tooling API.

# OCR Tooling API Objects

Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. For more information about Tooling API objects and to find a complete reference of all the supported objects, see **[Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm)**.

-   **[OcrSampleDocument](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_sampledocument.htm)**
    Represents the details of a sample document or a document type that's used as a reference while extracting and mapping information from a customer document. This object is available in API version 55.0 and later.
-   **[OcrSampleDocumentField](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_sampledocumentfield.htm)**
    Represents the details of the field in a document whose value is extracted and mapped to a Salesforce object field. This object is available in API version 55.0 and later.
-   **[OcrSampleDocumentPage](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_sampledocumentpage.htm)**
    Represents a collection of fields that define a page in the OCR sample document. This object is available in API version 55.0 and later.
-   **[OcrSampleDocumentPageItem](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocrsampledocumentpageitem.htm)**
    Represents details of items present on an OCR sample document page. This object is available in API version 56.0 and later.
-   **[OcrTargetObject](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_target_object.htm)**
    Represents the details of the object to which information from a document is extracted and mapped. This object is available in API version 55.0 and later.
-   **[OcrTargetObjFieldMapping](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_targetobjfieldmapping.htm)**
    Represents the details of how information from a document field is mapped to fields in an object. This object is available in API version 55.0 and later.
-   **[OcrTemplate](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_template.htm)**
    Represents the details of the mapping between a document and a Salesforce object using Intelligent Document Reader. This object is available in API version 55.0 and later.
-   **[OcrTemplateSampleDocument](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_templatesampledocument.htm)**
    Represents a relationship between an OCR template and an OCR sample document. This object is available in API version 55.0 and later.

## Related Topics

- OcrSampleDocument (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_sampledocument.htm)
- OcrSampleDocumentField (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_sampledocumentfield.htm)
- OcrSampleDocumentPage (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_sampledocumentpage.htm)
- OcrSampleDocumentPageItem (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocrsampledocumentpageitem.htm)
- OcrTargetObject (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_target_object.htm)
- OcrTargetObjFieldMapping (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_targetobjfieldmapping.htm)
- OcrTemplate (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_template.htm)
- OcrTemplateSampleDocument (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_tooling_api_objects_ocr_templatesampledocument.htm)
